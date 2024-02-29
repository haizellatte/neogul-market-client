"use client";
import instance from "@/api/instance";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  isAuthInitialized: boolean;
  toggleLogIn: () => void;
};

const initialValue: AuthContextType = {
  isLoggedIn: false,
  isAuthInitialized: false,
  toggleLogIn: () => {},
};

//todo
//* 1. 로그아웃 시 axios에 빈값 넣어주기
//* 2. context에서 isLoggedIn false로 바꿔주기
//* 3. 로컬 스토리지 clearItem

const AuthContext = createContext(initialValue);
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: PropsWithChildren) {
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const toggleLogIn = () => setIsLoggedIn((prev) => !prev);

  const value: AuthContextType = {
    isLoggedIn,
    isAuthInitialized,
    toggleLogIn,
  };

  useEffect(() => {
    const isAccessTokenStored = !!(typeof window !== "undefined"
      ? window.localStorage.getItem("accessToken")
      : null);
    setIsAuthInitialized(true);
    setIsLoggedIn(isAccessTokenStored);
  }, []);

  //* 4분 30초마다 리프레시 토큰 갱신
  useEffect(() => {
    let timerId: number | undefined;
    //* 로그인 값이 바뀌면 실행
    if (isLoggedIn) {
      timerId = window.setInterval(async () => {
        const {
          data: { accessToken },
        } = await instance.get("/auth/refresh-token");

        if (!accessToken) {
          setIsLoggedIn(false);
          return;
        }

        //* 1. Axios의 헤더에 토큰 넣기
        instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

        //* 2. localStorage에 accessToken 저장
        localStorage.setItem("accessToken", accessToken);
      }, 1000 * 60 * 60 * 2);

      //* clean-up : setInterval이 여러번 호출되는 것을 방지
      return () => {
        window.clearInterval(timerId);
      };
    } else {
      //* 처음 접속 시
      if (!timerId) return;
      //* 로그아웃 시
      window.clearInterval(timerId);
    }
    //* 로그아웃 하면
  }, [isLoggedIn]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

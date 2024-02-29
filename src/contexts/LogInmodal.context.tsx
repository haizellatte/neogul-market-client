"use client";

import LogInModal from "@/components/LoginModal/LoginModal";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuth } from "./auth.context";

type ModalContexType = {
  isOpen: boolean;
  toggleModal: () => void;
};

const initialValue: ModalContexType = {
  isOpen: false,
  toggleModal: () => {},
};

const LogInModalContext = createContext(initialValue);
export const useLogInModal = () => useContext(LogInModalContext);

export function LogInModalProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const toggleModal = () => setIsOpen((prev) => !prev);

  //* 모달 오픈 시, background 스크롤 block
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  //* 로그인 상태라면 모달 닫기
  useEffect(() => {
    if (isLoggedIn) {
      setIsOpen(false);
    }
  }, [isLoggedIn]);

  const value: ModalContexType = {
    isOpen,
    toggleModal,
  };

  // todo : 정규표현식을 사용해서 로그인이 필요한 서비스인데, 로그인이 되어 있지 않으면, 로그인 모달이 뜨겠금 구현

  return (
    <LogInModalContext.Provider value={value}>
      {children}
      {isOpen && <LogInModal />}
    </LogInModalContext.Provider>
  );
}

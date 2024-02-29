"use client";

import instance from "@/api/instance";
import { useLogInModal } from "@/contexts/LogInmodal.context";
import { useAuth } from "@/contexts/auth.context";
import Link from "next/link";
import { toast } from "react-toastify";

function AuthButton() {
  const { toggleModal } = useLogInModal();
  const { isLoggedIn, toggleLogIn, isAuthInitialized } = useAuth();

  const handleLogout = async () => {
    toast.success("로그아웃 되었습니다.");

    instance.defaults.headers.common.Authorization = "";

    //* 2. Context 값 변경
    toggleLogIn();

    //* 3. localStorage에 accessToken 삭제하기
    localStorage.removeItem("accessToken");
  };

  if (!isAuthInitialized) return null;

  return (
    <div className="flex items-center gap-4 ml-auto">
      {isLoggedIn ? (
        <button
          className="block rounded-md bg-[#37b83f] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#37b83f]/75"
          onClick={handleLogout}
        >
          로그아웃
        </button>
      ) : (
        <>
          <Link
            className="block rounded-md bg-[#37b83f] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#37b83f]/75"
            href="/auth/sign-up"
          >
            회원가입
          </Link>
          <button
            className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#37b83f] transition hover:text-[#37b83f]/75"
            onClick={toggleModal}
          >
            로그인
          </button>
        </>
      )}
    </div>
  );
}

export default AuthButton;

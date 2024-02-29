"use client";
import instance from "@/api/instance";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useAuth } from "@/contexts/auth.context";
import ScrollToTop from "@/utils/ScrollToTop";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";
import SignUpSchema from "./SignUpSchema";

function SignUpForm() {
  const { isLoggedIn, toggleLogIn } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      const data = SignUpSchema.parse(formData);

      const response = await instance.post("/auth/sign-up", data);
      const { accessToken } = response.data;

      instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

      //* 2. Context 값 변경
      toggleLogIn();

      //* 3. localStorage에 accessToken 저장
      localStorage.setItem("accessToken", accessToken);

      toast.success("회원가입 되었습니다!");

      return accessToken;
    } catch (error) {
      //* 유효성 검증 실패 시 alert 띄우기
      if (error instanceof z.ZodError) {
        //* zod 유효성 실패 시
        const errorMessage = error.errors.map((e) => e.message).join(", ");
        toast.error(errorMessage);
      }
      throw new Error("이미 존재하는 유저입니다.");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/");
      ScrollToTop();
    }
  }, [isLoggedIn, router]);

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[480px]">
      <div className="mb-6">
        <Input
          label="이메일"
          autoFocus
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="user@email.com"
          required
        />
      </div>
      <div className="mb-6">
        <Input
          label="비밀번호"
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="비밀번호는 8자리 이상이어야 합니다."
          required
        />
      </div>
      <div className="mb-10">
        <Input
          label="비밀번호 확인"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          placeholder="Confirm your password"
          required
        />
      </div>

      <Button>Sign up</Button>
    </form>
  );
}

export default SignUpForm;

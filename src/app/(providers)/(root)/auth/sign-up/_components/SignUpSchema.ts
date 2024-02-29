import { z } from "zod";

const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*\d)[a-z\d]{8,20}$/i);

const SignUpSchema = z
  .object({
    email: z.string().email({ message: "유효한 이메일 형식이 아닙니다." }),
    password: z
      .string()
      .min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
      .max(20, "비밀번호는 최대 20자 이내여야 합니다.")
      .regex(passwordRegex, "비밀번호는 최소 8자 이상이어야 합니다."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

export default SignUpSchema;

import AuthDtoType from "@/types/authDto.type";
import { AxiosResponse } from "axios";
import instance from "../instance";

export const signUp = async (
  signUpDto: AuthDtoType
): Promise<AxiosResponse<any, any>> => {
  return instance.post("/auth/sign-up", signUpDto);
};

export const findUserEmail = async () => {
  return instance.get(`/auth/user-email`);
};

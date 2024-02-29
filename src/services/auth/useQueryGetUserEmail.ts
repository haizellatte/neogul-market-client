import api from "@/api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryGetUserEmail() {
  const { data } = useQuery({
    queryKey: ["userEmail"],
    queryFn: api.auth.findUserEmail,
    refetchOnWindowFocus: true,
  });

  const responce = data?.data;
  return responce;
}

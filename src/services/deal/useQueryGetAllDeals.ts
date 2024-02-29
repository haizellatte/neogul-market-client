import api from "@/api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryGetAllDeals() {
  const { data } = useQuery({
    queryKey: ["deals"],
    queryFn: api.deal.getDeals,
    refetchOnWindowFocus: true,
  });

  const responce = data?.data;
  return responce;
}

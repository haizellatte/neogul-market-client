import api from "@/api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryGetDealById(dealId: number) {
  return useQuery({
    queryKey: ["deal", dealId],
    queryFn: () => api.deal.getDealById(dealId),
    enabled: !!dealId,
  });
}

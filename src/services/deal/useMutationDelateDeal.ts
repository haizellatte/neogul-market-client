import api from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationDelateDeal() {
  const queryClient = useQueryClient();

  const mutationFn = api.deal.deleteDeal;

  return useMutation({
    mutationFn,
    onSuccess: () =>
      queryClient.invalidateQueries({ exact: true, queryKey: ["deal"] }),
  });
}

import api from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutaionToggleLike() {
  const queryClient = useQueryClient();

  const mutationFn = api.deal.toggleLike;

  return useMutation({
    mutationFn,
    onSuccess: () =>
      queryClient.invalidateQueries({ exact: true, queryKey: ["deal"] }),
  });
}

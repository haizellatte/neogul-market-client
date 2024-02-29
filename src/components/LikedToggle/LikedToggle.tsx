import useMutaionToggleLike from "@/services/deal/useMutaionToggleLike";

import { BsHeartFill } from "react-icons/bs";

interface LikedToggleProps {
  isLiked: boolean;
  dealId: string;
}

function LikedToggle({ isLiked, dealId }: LikedToggleProps) {
  //* dealId get
  const { mutate: dealToggleLike } = useMutaionToggleLike();

  const handleToggleLike = () => {
    dealToggleLike(Number(dealId), {
      onSuccess: () => {
        window.location.reload();
      },
      onError: (error) => {
        // 에러 처리 로직
        console.error("Error deleting deal:", error);
      },
    });
  };

  return (
    <>
      {isLiked ? (
        <BsHeartFill onClick={handleToggleLike} color="#ff475a" size={24} />
      ) : (
        <BsHeartFill onClick={handleToggleLike} color="#e1e2e3" size={24} />
      )}
    </>
  );
}

export default LikedToggle;

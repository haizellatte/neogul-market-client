import useTimeDiff from "@/hooks/useTimeDiff";
import DealResponseType from "@/types/DealResponse.type";
import Image from "next/image";
import { BsHeartFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { TbCurrencyWon, TbEyeSearch } from "react-icons/tb";

interface ProductItemProps {
  deal: DealResponseType;
}

function ProductItem({ deal }: ProductItemProps) {
  const { title, location, price, likes, imgUrl, views, createdAt } = deal;
  const timeDifference = useTimeDiff(createdAt);

  return (
    <div className="grid gap-y-1">
      {imgUrl ? (
        <Image
          src={`https://port-0-time-attack-fullstack-server-17xco2lltdolaae.sel5.cloudtype.app/${imgUrl}`}
          width={288}
          height={240}
          alt="대표 이미지"
          className="object-cover sm:h-60 h-44 rounded-lgr"
        />
      ) : (
        <div className="sm:h-60 h-44 rounded-lg bg-[#efefefa4]" />
      )}

      <div className="my-2 border-b-[1px] pb-2 pt-2">
        <div className="font-bold pr-2">{title}</div>
      </div>
      <div className="flex items-center gap-x-2">
        <TbCurrencyWon />
        <div className="text-[14px]">{`${price?.toLocaleString()}원`}</div>
      </div>
      <div className="flex items-center gap-x-2">
        <IoLocationSharp />
        <div className="text-[14px]">{location}</div>
      </div>
      <div className="flex items-center gap-x-2 justify-end mt-4 pr-3">
        <TbEyeSearch color="gray" />
        <div className="text-sm">{views}</div>
        <BsHeartFill color="gray" size={12} />
        <div className="text-sm">{likes}</div>
      </div>
      <div className="text-[12px] text-end pr-3 text-[#2a9531]">
        {timeDifference}
      </div>
    </div>
  );
}

export default ProductItem;

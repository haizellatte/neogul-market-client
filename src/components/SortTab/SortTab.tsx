"use client";
import useQueryGetAllDeals from "@/services/deal/useQueryGetAllDeals";
import DealResponseType from "@/types/DealResponse.type";
import Link from "next/link";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import ProductItem from "../ProductItem";

const sortLabel = ["최신순", "조회순", "관심순"];

function SortTab() {
  const deals = useQueryGetAllDeals();

  const [activeSortTab, setActiveSortTab] = useState("최신순");
  const [dealData, setDealData] = useState<DealResponseType[]>([]);

  const handleClickSort: React.MouseEventHandler<HTMLLIElement> = (e) => {
    const target = e.currentTarget.innerText;
    setActiveSortTab(() => target);
  };

  useEffect(() => {
    let sortedDeals = [...deals];

    if (activeSortTab === "조회순") {
      sortedDeals.sort((a, b) => b.views - a.views);
    } else if (activeSortTab === "관심순") {
      sortedDeals.sort((a, b) => b.likes - a.likes);
    } else {
      sortedDeals.sort((a, b) => Number(b.createdAt) - Number(a.createdAt)); //* "최신순"
    }
    setDealData(sortedDeals);
  }, [activeSortTab]);

  return (
    <div>
      <div className="flex">
        <ul className="flex -space-space-x-px rounded-md border bg-[#efefefa4] shadow-sm items-center h-[38px] my-8 ml-auto">
          {sortLabel.map((label) => (
            <li
              key={uuid()}
              className={`py-2 px-4 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-all cursor-auto ${
                activeSortTab === label ? `bg-white text-gray-900` : null
              }`}
              onClick={handleClickSort}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
      <main className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-y-16 sm:gap-x-12 pt-6">
        {dealData &&
          dealData.map((deal: any) => (
            <Link href={`/deals/${deal.id}`} key={uuid()}>
              <ProductItem deal={deal} />
            </Link>
          ))}
      </main>
    </div>
  );
}

export default SortTab;

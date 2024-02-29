"use client";

import useQueryGetAllDeals from "@/services/deal/useQueryGetAllDeals";
import Link from "next/link";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import ProductItem from "../ProductItem";

const selectTab = ["내 판매글", "관심 판매글"];

function SelectTab() {
  const deals = useQueryGetAllDeals();

  const [activeSortTab, setActiveSortTab] = useState("최신순");
  const [dealData, setDealData] = useState([]);

  const handleClickSort: React.MouseEventHandler<HTMLLIElement> = (e) => {
    const target = e.currentTarget.innerText;
    setActiveSortTab(() => target);
  };

  useEffect(() => {
    setDealData(deals);
  }, []);

  return (
    <div>
      <div className="flex">
        <ul className="flex -space-space-x-px rounded-md border bg-[#efefefa4] shadow-sm items-center h-[38px] my-8 ml-auto">
          {selectTab.map((label) => (
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

export default SelectTab;

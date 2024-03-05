"use client";
import DetailProductTable from "@/components/DetailProductTable";
import DeleteButton from "@/components/Edit_DeleteButton/DeleteButton";
import EditButton from "@/components/Edit_DeleteButton/EditButton";
import LikedToggle from "@/components/LikedToggle";
import Page from "@/components/Page";
import useQueryGetUserEmail from "@/services/auth/useQueryGetUserEmail";
import useMutationDelateDeal from "@/services/deal/useMutationDelateDeal";
import useQueryGetDealById from "@/services/deal/useQueryGetDeal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DetailDealsPage(props: { params: { dealId: string } }) {
  const router = useRouter();
  const WriteUser = useQueryGetUserEmail();
  const dealId = props.params.dealId;
  const { data: getDeal } = useQueryGetDealById(Number(dealId));

  //* dealId get
  const { mutate: deleteDeal } = useMutationDelateDeal();

  if (!getDeal) return null;
  if (!deleteDeal) return null;

  //* 삭제 handler
  const handleDeleteDeal = () => {
    deleteDeal(Number(dealId), {
      onSuccess: () => {
        toast.success("삭제 되었습니다");
        router.push("/");
      },
      onError: (error) => {
        // 에러 처리 로직
        console.error("Error deleting deal:", error);
      },
    });
  };

  //* 작성 유저인지 아닌지 판별
  const isWriteUser =
    WriteUser && getDeal && WriteUser.email === getDeal.userEmail;

  return (
    <Page>
      <div className="flex w-full px-6 pb-[-2]">
        <h2 className="font-bold text-3xl text-center mt-12 mb-2">
          상세 페이지
        </h2>
      </div>
      <div className="w-full px-6 grid grid-cols-1 sm:grid-cols-2 pt-10 gap-y-10 ">
        {getDeal && getDeal.imgUrl ? (
          <Image
            src={`https://port-0-time-attack-fullstack-server-17xco2lltdolaae.sel5.cloudtype.app/${getDeal.imgUrl}`}
            width={420}
            height={500}
            alt="대표 이미지"
            className="object-cover sm:h-80 h-70 rounded-lg flex mx-0"
          />
        ) : (
          <div className="sm:h-60 h-44 rounded-lg bg-[#efefefa4]" />
        )}

        <div className="grid grid-cols-1 max-x-lg x-full gap-y-4">
          <div className="flex justify-end">
            {/*  다른 사람 글이면 : 하트 / 유저의 글이라면 : edit, delete */}
            {isWriteUser ? (
              <span className="inline-flex rounded-md border bg-white shadow-sm max-h-10">
                <EditButton dealId={dealId} />
                <DeleteButton
                  handleDeleteDeal={handleDeleteDeal}
                  dealId={dealId}
                />
              </span>
            ) : (
              <LikedToggle
                isLiked={getDeal.likes === 1 ? true : false}
                dealId={dealId}
              />
            )}
          </div>
          {/* Product-info Table */}
          <DetailProductTable
            email={getDeal.userEmail}
            title={getDeal.title}
            content={getDeal.content}
            price={getDeal.price}
          />
          <div className="mt-auto flex justify-end">
            <span className="text-gray-500 text-sm pr-2">
              관심 {getDeal.likes}
            </span>
            <span className="text-gray-500 text-sm pr-2">∙</span>
            <span className="text-gray-500 text-sm">조회 {getDeal.views}</span>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default DetailDealsPage;

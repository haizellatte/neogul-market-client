"use client";

import api from "@/api";
import Button from "@/components/Button";
import dealDtoDtype from "@/types/dealDto.type";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";
import FileUploadInput from "../../../create/_components/FileUploadInput";
import PostSchema from "../../../create/_components/PostSchema";
import PostSection from "../../../create/_components/PostSection";

interface EditFormProps {
  dealId: string;
  getByDeal: dealDtoDtype;
}

function EditForm({ dealId, getByDeal }: EditFormProps) {
  const router = useRouter();
  const [postData, setPostData] = useState<dealDtoDtype>({
    title: "",
    content: "",
    location: "",
    price: 0,
    imgUrl: null,
  });

  const newData = {
    title: getByDeal.title,
    content: getByDeal.content,
    location: getByDeal.location,
    price: getByDeal.price,
    imgUrl: null,
  };

  useEffect(() => {
    setPostData({ ...newData });
  }, []);

  const handleUploadFile: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const imgFile = e.target.files?.[0];
    if (!imgFile) return alert("파일을 선택해주세요.");

    setPostData({ ...postData, imgUrl: imgFile });
  };

  const handleUpdateDealPost = async (e: any) => {
    e.preventDefault();

    try {
      const parsedData = PostSchema.parse(postData);

      const createdPostData = new FormData();

      Object.entries(parsedData).forEach(([key, value]) => {
        createdPostData.append(
          key,
          typeof value === "number" ? String(value) : value
        );
      });

      const response = await api.deal.updateDeal(
        Number(dealId),
        createdPostData
      );

      if (!response) throw new Error("error");

      toast.success("게시물이 수정되었습니다!");
      router.replace(`http://localhost:3000/deals/${dealId}`);

      return response;
    } catch (error) {
      if (error instanceof z.ZodError) {
        //* zod 유효성 실패 시
        const errorMessage = error.errors.map((e) => e.message).join(", ");
        toast.error(errorMessage);
      }
      // 네트워크 오류 또는 서버 에러 처리
      toast.error("네트워크 또는 서버 오류입니다.");
    }
  };

  return (
    <>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <PostSection
          label="이미지 업로드"
          isValid={postData.imgUrl ? true : false}
        >
          <FileUploadInput handleUploadFile={handleUploadFile} />
        </PostSection>

        <PostSection label="제목" isValid={postData.title.length > 2}>
          <input
            type="text"
            value={postData.title}
            placeholder="제목은 최소 3자 이상이어야 합니다."
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
            className="w-full bg-gray-100 rounded-md p-4"
          />
        </PostSection>
        <PostSection label="내용" isValid={postData.content.length > 9}>
          <textarea
            value={postData.content}
            placeholder="내용은 최소 10자 이상이어야 합니다."
            onChange={(e) =>
              setPostData({ ...postData, content: e.target.value })
            }
            className="bg-gray-100 rounded-md w-full h-40 p-4"
          />
        </PostSection>
        <PostSection label="직거래 위치" isValid={postData.location.length > 9}>
          <input
            type="text"
            value={postData.location}
            placeholder="시, 구, 동을 포함해 10자 이상 작성해주세요."
            onChange={(e) =>
              setPostData({ ...postData, location: e.target.value })
            }
            className="w-full bg-gray-100 rounded-md p-4"
          />
        </PostSection>
        <PostSection label="판매 가격" isValid={postData.price > 0}>
          <input
            type="text"
            value={postData.price}
            placeholder="1원 미만은 입력할 수 없습니다."
            onChange={(e) =>
              setPostData({ ...postData, price: Number(e.target.value) })
            }
            className="w-full bg-gray-100 rounded-md p-4"
          />
        </PostSection>
      </ol>
      <Button onClick={handleUpdateDealPost}>작성 완료</Button>
    </>
  );
}

export default EditForm;

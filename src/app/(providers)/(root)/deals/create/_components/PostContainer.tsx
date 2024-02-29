"use client";
import api from "@/api";
import dealDtoDtype from "@/types/dealDto.type";
import { formatPrice } from "@/utils/formatPrice";
import { parsePrice } from "@/utils/parsePrice";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";
import FileUploadInput from "./FileUploadInput";
import PostSchema from "./PostSchema";
import PostSection from "./PostSection";

interface PostContainerProps {
  postData: dealDtoDtype;
  setPostData: React.Dispatch<React.SetStateAction<dealDtoDtype>>;
}

function PostContainer({ postData, setPostData }: PostContainerProps) {
  const { title, content, location, price, imgUrl } = postData;
  const [displayPrice, setDisplayPrice] = useState("");
  const router = useRouter();

  //* create Post
  const handlePost: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
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

      const response = await api.deal.createDeal(createdPostData);

      if (!response) throw new Error("error");

      toast.success("성공적으로 게시물이 등록되었습니다!");
      router.push(`/`);
    } catch (error) {
      if (error instanceof z.ZodError) {
        //* zod 유효성 실패 시
        const errorMessage = error.errors.map((e) => e.message).join(", ");
        toast.error(errorMessage);
      }

      toast.error("네트워크 또는 서버 오류입니다.");
    }
  };

  //* 사진 업로드
  const handleUploadFile: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const imgFile = e.target.files?.[0];
    if (!imgFile) return alert("파일을 선택해주세요.");

    setPostData({ ...postData, imgUrl: imgFile });
  };

  //* price input value change
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPrice = formatPrice(e.target.value);
    setDisplayPrice(formattedPrice);

    const numericPrice = parsePrice(formattedPrice);
    setPostData({ ...postData, price: Number(numericPrice) });
  };

  return (
    <>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <PostSection label="이미지 업로드" isValid={imgUrl ? true : false}>
          <FileUploadInput handleUploadFile={handleUploadFile} />
        </PostSection>

        <PostSection label="제목" isValid={title.length > 2}>
          <input
            type="text"
            value={title}
            placeholder="제목은 최소 2자 이상이어야 합니다."
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
            className="w-full bg-gray-100 rounded-md p-4"
          />
        </PostSection>
        <PostSection label="내용" isValid={content.length > 3}>
          <textarea
            value={content}
            placeholder="내용은 최소 3자 이상이어야 합니다."
            onChange={(e) =>
              setPostData({ ...postData, content: e.target.value })
            }
            className="bg-gray-100 rounded-md w-full h-40 p-4"
          />
        </PostSection>
        <PostSection label="직거래 위치" isValid={location.length > 2}>
          <input
            type="text"
            value={location}
            placeholder="시, 구, 동을 포함해 작성해주세요."
            onChange={(e) =>
              setPostData({ ...postData, location: e.target.value })
            }
            className="w-full bg-gray-100 rounded-md p-4"
          />
        </PostSection>
        <PostSection label="판매 가격" isValid={price >= 0}>
          <input
            type="text"
            value={displayPrice}
            placeholder="숫자만 입력해주세요."
            onChange={handlePriceChange}
            className="w-full bg-gray-100 rounded-md p-4"
          />
        </PostSection>
      </ol>

      <button
        className="border border-white py-4 px-12 text-[15px] font-semibold  transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full data-[color=black]:bg-black data-[color=black]:text-white rounded-md bg-[#37b83f] text-white"
        onClick={handlePost}
      >
        작성 완료
      </button>
    </>
  );
}

export default PostContainer;

"use client";
import HeadingText from "@/components/HeadingText";
import Page from "@/components/Page";
import dealDtoDtype from "@/types/dealDto.type";
import { useState } from "react";
import PostContainer from "./_components/PostContainer";

function CreateDealPage() {
  const [postData, setPostData] = useState<dealDtoDtype>({
    title: "",
    content: "",
    location: "",
    price: 0,
    imgUrl: null,
  });

  return (
    <Page>
      <div className="w-full max-w-3xl px-4">
        <HeadingText>판매글 작성하기</HeadingText>
        <PostContainer postData={postData} setPostData={setPostData} />
      </div>
    </Page>
  );
}

export default CreateDealPage;

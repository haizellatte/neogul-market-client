import Page from "@/components/Page";
import SortTab from "@/components/SortTab";

export default function HomePage() {
  return (
    <Page>
      <div className="w-full mt-6 px-4">
        <header className="flex flex-col justify-start items-start">
          <h2 className="text-2xl font-bold text-gray-900 ">전체글 보기</h2>
          <p className="mt-4 text-gray-500">
            너굴마켓에 올라온 게시물을 확인해보세요! 필터를 통해 최신순, 조회순,
            관심순으로 정렬할 수 있습니다.
          </p>
        </header>
        <SortTab />
      </div>
    </Page>
  );
}

export const revalidate = 5;

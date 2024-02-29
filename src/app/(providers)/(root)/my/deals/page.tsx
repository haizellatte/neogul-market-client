import Page from "@/components/Page";
import SelectTab from "@/components/SelectTab";

function MyDealPage() {
  return (
    <Page>
      <div className="w-full px-4 mt-6">
        <header className="flex flex-col justify-start items-start w-full mt-8">
          <h2 className="text-2xl font-bold text-gray-900 ">My Sales Page</h2>
          <p className="mt-4 text-gray-500">
            내가 작성한 게시물과 북마크한 게시물을 확인해보세요!
          </p>
        </header>
        <SelectTab />
      </div>
    </Page>
  );
}

export default MyDealPage;

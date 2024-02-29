import api from "@/api";
import HeadingText from "@/components/HeadingText";
import Page from "@/components/Page";
import EditForm from "./_components/EditForm";

async function EditDealPage(props: { params: { dealId: string } }) {
  const dealId = props.params.dealId;
  const { data: getByDeal } = await api.deal.getDealById(Number(dealId));

  // todo: mutaion으로 만들기

  return (
    <Page>
      <div className="w-full max-w-3xl px-4">
        <HeadingText>판매글 수정하기</HeadingText>
        <EditForm dealId={dealId} getByDeal={getByDeal} />
      </div>
    </Page>
  );
}

export default EditDealPage;

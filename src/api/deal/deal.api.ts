import instance from "../instance";

export const createDeal = async (dealDto: FormData) => {
  return instance.post("/deals", dealDto, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getDeals = async () => {
  return instance.get("/deals");
};

export const getDealById = async (dealId: number) => {
  const response = await instance.get(`/deals/${dealId}`);
  return response.data;
};

export const updateDeal = async (dealId: number, dealDto: FormData) => {
  return instance.patch(`/deals/${dealId}`, dealDto, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteDeal = async (dealId: number) => {
  return instance.delete(`/deals/${dealId}`);
};

export const toggleLike = async (dealId: number) => {
  return instance.patch(`/deals/${dealId}/toggle-like`);
};

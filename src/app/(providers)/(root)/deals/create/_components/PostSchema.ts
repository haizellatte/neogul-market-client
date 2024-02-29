import { ZodType, z } from "zod";

const PostSchema = z.object({
  title: z.string().min(3, "제목은 최소 3자 이상이어야 합니다."),
  content: z.string().min(5, "내용은 최소 5자 이상이어야 합니다."),
  location: z.string().min(3, "희망하는 직거래 위치를 작성해주세요."),
  price: z.number(),
  imgUrl: z.any() as ZodType<File>,
});

export default PostSchema;

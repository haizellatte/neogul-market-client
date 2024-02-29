import { PropsWithChildren } from "react";

function HeadingText({ children }: PropsWithChildren) {
  return <h2 className="font-bold text-3xl text-center my-12">{children}</h2>;
}

export default HeadingText;

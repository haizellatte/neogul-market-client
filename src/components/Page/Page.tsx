import { PropsWithChildren } from "react";

function Page({ children }: PropsWithChildren) {
  return (
    <main className="px-4 py-10 mx-auto max-w-screen-lg data-[full-width=true]:max-w-none flex flex-col w-full  items-center justify-start pb-20">
      {children}
    </main>
  );
}

export default Page;

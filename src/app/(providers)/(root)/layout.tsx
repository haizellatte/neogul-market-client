import Header from "@/components/Header";
import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      <ToastContainer
        autoClose={3000}
        closeOnClick={true}
        pauseOnHover={false}
        limit={1}
      />
      {children}
    </div>
  );
}

export default RootLayout;

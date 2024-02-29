import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="border border-white py-4 px-12 text-[15px] font-semibold  transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full data-[color=black]:bg-black data-[color=black]:text-white rounded-md bg-[#37b83f] text-white"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

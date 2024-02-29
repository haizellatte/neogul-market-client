import Link from "next/link";
import { BiSolidLeaf } from "react-icons/bi";

function Logo() {
  return (
    <Link href="/" className="flex item-center">
      <BiSolidLeaf color="#0fb300" />
      <span className="text-[#37962f] font-bold text-xl">너굴마켓</span>
    </Link>
  );
}

export default Logo;

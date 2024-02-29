import { FaCheck } from "react-icons/fa";

interface PostSectionProps {
  label: string;
  isValid: boolean;
  children: React.ReactNode;
}

function PostSection({ label, isValid, children }: PostSectionProps) {
  return (
    <li className="mb-10 ms-6">
      <span
        className={`absolute flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full -start-3 ring-1 ring-white dark:ring-gray-900 dark:bg-blue-900 border-gray-200 border-[1.5px] ${
          isValid ? "ring-[#37b83f]" : "null"
        }`}
      >
        {isValid ? (
          <FaCheck size={14} color="#37b83f" />
        ) : (
          <FaCheck size={14} color="#c2bebe" />
        )}
      </span>
      <h3 className="flex items-center mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        {label}
      </h3>
      {children}
    </li>
  );
}

export default PostSection;

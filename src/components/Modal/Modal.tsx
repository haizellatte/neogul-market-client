import { useLogInModal } from "@/contexts/LogInmodal.context";

interface ModalProps {
  label?: string;
  children: React.ReactNode;
}

function Modal({ label, children }: ModalProps) {
  const { toggleModal } = useLogInModal();

  return (
    <div
      className="bg-black/50 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-20"
      onClick={toggleModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-md w-full max-w-[400px] px-5 py-8"
      >
        <h2 className="font-bold text-3xl text-center mb-12">{label}</h2>
        {children}
      </div>
    </div>
  );
}

export default Modal;

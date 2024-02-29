"use client";

interface FileUploadInputProps {
  handleUploadFile: (e: any) => void;
}

function FileUploadInput({ handleUploadFile }: FileUploadInputProps) {
  return (
    <div className="font-[sans-serif] w-full pt-1">
      <input
        type="file"
        className="w-full text-black text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-black rounded"
        onChange={handleUploadFile}
      />
      <p className="text-xs text-gray-400 mt-2">
        PNG, JPG SVG, WEBP, and GIF are Allowed.
      </p>
    </div>
  );
}

export default FileUploadInput;

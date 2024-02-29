import TableOfRow from "./TableOfRow";

interface DetailProductTableProps {
  email: string;
  title: string;
  content: string;
  price: number;
}

function DetailProductTable({
  email,
  title,
  content,
  price,
}: DetailProductTableProps) {
  return (
    <div className="flow-root">
      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        <TableOfRow label="Title" content={title} />
        <TableOfRow label="Content" content={content} />
        <TableOfRow label="Price" content={`${price?.toLocaleString()}원`} />
        <TableOfRow label="User email" content={email} />
      </dl>
    </div>
  );
}

export default DetailProductTable;

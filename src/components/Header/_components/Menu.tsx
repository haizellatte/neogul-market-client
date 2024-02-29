import Link from "next/link";

const menus = [
  { name: "구입하기", href: "/" },
  { name: "판매하기", href: "/deals/create" },
  { name: "내 판매글", href: "/my/deals" },
];

function Menu() {
  return (
    <nav>
      <ul className="ml-7 flex items-center gap-6 text-sm">
        {menus.map((menu, i) => (
          <li key={`${menu}-${i}`}>
            <Link
              href={menu.href}
              className="text-gray-500 transition hover:text-gray-500/75"
            >
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;

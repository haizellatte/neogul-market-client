import AuthButton from "./_components/AuthButton";
import Logo from "./_components/Logo";
import Menu from "./_components/Menu";

function Header() {
  return (
    <header className="flex items-center h-16 px-4 sm:px-6  bg-white sticky top-0 border-b z-10 drop-shadow">
      <Logo />
      <Menu />
      <AuthButton />
    </header>
  );
}

export default Header;

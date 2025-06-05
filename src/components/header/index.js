import Link from "next/link";

const navItems = [
  {
    label: "Home",
    href: "/#home",
  },
  {
    label: "Expertise",
    href: "/#expertise",
  },
  {
    label: "Work",
    href: "/#work",
  },
  {
    label: "Experiense",
    href: "/#experiense",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];

export default function Header() {
  return (
    <header
      className="sticky top-0 left-0 w-full z-50 border-0"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="h-[14vh] pl-[4.4vh] pr-[4.4vh] flex items-center justify-between">
        <div aria-label="logo" className="text-[#66d9ed] text-[5vh] h-[10vh]">
          Ryo Zhu
        </div>

        <nav
          aria-label="navigation"
          className="flex items-center gap-x-[1.6vh]"
        >
          <div aria-label="nav-container" className="h-full flex items-center">
            <ul className="flex items-center gap-x-[1.6vh]">
              {navItems.map((item) => (
                <li
                  className="relative px-[1.6vh] py-[0.8vh] text-white text-nowrap font-bold"
                  key={item.label}
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { name: "Home", href: "/" },
  { name: "Client", href: "/client" },
  { name: "Drinks", href: "/drinks" },
  { name: "Prisma-Example", href: "/prisma-example" },
  { name: "Query", href: "/query" },
  { name: "Tasks", href: "/tasks" },
];

const MainNavigation = () => {
  const pathName = usePathname();
  return (
    <ul className="flex justify-center items-center py-5 bg-black text-white gap-4">
      {LINKS?.map((link) => {
        const isActive = pathName === link.href;
        return (
          <li key={link.name}>
            <Link
              href={link.href}
              className={isActive ? "text-semibold text-blue-500" : undefined}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MainNavigation;

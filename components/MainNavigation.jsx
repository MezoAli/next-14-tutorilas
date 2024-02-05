"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { name: "Client", href: "/client" },
  { name: "Drinks", href: "/drinks" },
  { name: "Prisma-Example", href: "/prisma-example" },
  { name: "Query", href: "/query" },
  { name: "Tasks", href: "/tasks" },
];

const MainNavigation = () => {
  return (
    <nav className="bg-base-300 py-4">
      <div className="py-8 flex-col sm:flex-row navbar max-w-6xl mx-auto px-8">
        <ul className="menu menu-horizontal md:ml-8">
          <li key={"Home"}>
            <Link href="/" className="btn btn-primary text-2xl mr-4">
              Next Js
            </Link>
          </li>
          {LINKS?.map((link) => {
            return (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;

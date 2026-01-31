"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathName = usePathname();
  return (
    <header>
      <div className="main-container inner">
        <Link href={"/"}>
          <div className="relative h-10 w-39 ">
            <Image
              src={"logo.svg"}
              alt="coinpulse logo"
              fill
              className="object-cover"
            />
          </div>
        </Link>

        <nav>
          <Link
            href={"/"}
            className={cn("nav-link", {
              "is-active": pathName === "/",
              "is-home": true,
            })}
          >
            Home
          </Link>
          <p>Search Modal</p>
          <Link
            href={"coins"}
            className={cn("nav-link", {
              "is-active": pathName === "/coins",
            })}
          >
            All coins
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

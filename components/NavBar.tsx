import Image from "next/image";
import Link from "next/link";
import React from "react";

const navIcons = [
  { scr: "/assets/icons/search.svg", alt: "search", link: "/" },
  { scr: "/assets/icons/black-heart.svg", alt: "heart", link: "/" },
  { scr: "/assets/icons/user.svg", alt: "user", link: "/" },
];

const NavBar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="logo"
          />
          <p>
            Blonjo <span className="text-primary">Wae</span>
          </p>
        </Link>
        <div className="flex items-center gap-5">
          {navIcons.map((icon, index) => (
            <Image
              key={icon.alt}
              src={icon.scr}
              alt={icon.alt}
              height={28}
              width={28}
              className="object-contain"
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

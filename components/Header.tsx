import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Header({ photo }: { photo?: string | undefined }) {
  const { dark, setDark } = React.useContext<{ dark: any; setDark: any }>(
    ThemeContext
  );

  useEffect(() => {
    document.documentElement.className = `${dark ? "dark" : ""}`;
  }, [dark]);

  useEffect(() => {
    console.log(dark);
  }, [dark]);

  return (
    <header className="flex justify-between items-center w-full pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-2">
        <Image
          alt="header text"
          src="/imageIcon.png"
          className="sm:w-12 sm:h-12 w-7 h-7"
          width={25}
          height={25}
        />
        <h1 className="sm:text-4xl text-white dark:text-black text-2xl font-bold ml-2 tracking-tight">
          Restore Photos
        </h1>
      </Link>
      <div>
        <button
          onClick={() => setDark(!dark)}
          className="dark:bg-white dark:text-black text-black' text-white px-8 mr-6 py-2 font-bold rounded-full"
        >
          {" "}
          <span>{dark ? "Dark" : "Light"} </span> mode{" "}
        </button>
        <Link className="text-white dark:text-black" href={"/"}>
          Contact Us
        </Link>
      </div>
    </header>
  );
}

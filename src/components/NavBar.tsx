"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { signIn, signOut } from "next-auth/react";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import { Menu } from "react-feather";

import Avatar from "@components/Avatar";
import xodblogo from "public/images/xodblogo150.png";
import { useCurrentUser } from "~/lib/context";


const NavBar: React.FC = ({}) => {
  const [menuActive, setMenuActive] = useState(false);
  const [userControlsActive, setUserControlsActive] = useState(false);
  const pathname = usePathname();
  const currentUser = useCurrentUser();
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const links = [
    {
      name: t("pages.navbar.packs"),
      href: "/packs",
    },
  ];

  const userLinks = [
    // {
    //   name: t("pages.navbar.user.profile"),
    //   href: "/profile",
    // },
    // {
    //   name: t("pages.navbar.user.settings"),
    //   href: "/settings",
    // },
    {
      name: t("pages.navbar.user.signOut"),
      href: null,
      onClick: () => void signOut(),
    },
  ];

//   if (currentUser?.role === "ADMIN")
//     userLinks.splice(-1, 0, { name: t("pages.navbar.user.adminPage"), href: "/admin" });

  return (
    <nav className="bg-neutral-800 drop-shadow">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <a
          href={"/"}
          className="item-center mr-6 flex flex-shrink-0 text-white"
        >
          <Image src={xodblogo} alt="CrossoutDB Logo" width={40} height={40} />
          <span className="m-auto ml-1 text-xl font-semibold tracking-tight">
            CrossoutDB
          </span>
        </a>
        <div className="hidden w-full flex-grow lg:flex lg:w-auto lg:items-center">
          {links.map((link) => (
            <div
              key={link.name}
              className={`${
                pathname === link.href ? "text-white" : "text-xoPrimary"
              } mr-4 hidden hover:text-white  lg:mt-0 lg:inline-block`}
            >
              <Link href={link.href}>{link.name}</Link>
            </div>
          ))}
        </div>
        <div className="hidden w-full flex-grow lg:flex lg:w-auto lg:items-center">
            <button className="border-xoPrimary text-xoPrimary flex items-center border bg-black px-3 py-2 hover:border-white"
            onClick={() =>
                void router.push(router.pathname, router.asPath, {
                  locale: i18n.language === "en" ? "ru" : "en",
                })
              }>{t("pages.navbar.language")}</button>
        </div>
        <div className="flex flex-row space-x-2">
          <div>
            {currentUser ? (
              <div className="relative px-3 py-2">
                <label
                  tabIndex={0}
                  className="avatar btn btn-circle btn-ghost"
                  onClick={() => setUserControlsActive(!userControlsActive)}
                >
                  {currentUser && <Avatar user={currentUser} />}
                </label>
                {userControlsActive && (
                  <div
                    onMouseLeave={() => setUserControlsActive(false)}
                    className="border-xoPrimary text-xoPrimary absolute right-0 my-2 flex items-center border bg-black px-3 py-2 hover:border-white"
                  >
                    <ul>
                      {userLinks.map((entry) => (
                        <li key={entry.name} className="whitespace-nowrap hover:text-white">
                          {entry.href ? (
                            <Link href={entry.href}>{entry.name}</Link>
                          ) : (
                            <button onClick={entry.onClick}>
                              {entry.name}
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <button
                className="border-xoPrimary text-xoPrimary flex items-center border bg-black px-3 py-2 hover:border-white"
                onClick={() => void signIn()}
              >
                {t("pages.navbar.user.signIn")}
              </button>
            )}
          </div>
          <button
            onClick={() => setMenuActive(!menuActive)}
            className={`${
              menuActive
                ? "border-xoQuaternary text-white shadow shadow-orange-500"
                : "border-xoPrimary text-xoPrimary hover:border-white"
            } flex items-center border bg-black px-3 py-2 lg:hidden`}
          >
            <Menu />
          </button>
        </div>
        {menuActive && (
          <div className={`block w-full flex-grow lg:hidden`}>
            <div className="text-sm">
              {links.map((link) => (
                <div
                  key={link.name}
                  className={`${
                    pathname === link.href ? "text-white" : "text-xoPrimary"
                  } mr-4 mt-4 block text-white hover:text-white`}
                >
                  <Link href={link.href}>{link.name}</Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

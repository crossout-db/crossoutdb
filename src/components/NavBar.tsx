import { User } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import Avatar from "./Avatar";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import ManageUsers from "./ManageUsers";

type Props = {
  currentUser: User | undefined;
};

export default function NavBar({ currentUser }: Props) {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  return (
    <div className="navbar border-b bg-base-100 px-8 py-2 " data-theme="dark">
      <div className="navbar-start">
        <Link href="/">
          <Image
            src="/images/crossoutdb_logo.png"
            alt="Crossout DB"
            width={180}
            height={40}
            className="inline-block"
            priority={true}
          />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>{t("navbar.packs")}</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>{t("navbar.tools.title")}</summary>
              <ul className="p-2">
                <li>
                  <a>{t("navbar.tools.badgeExchange")}</a>
                </li>
              </ul>
            </details>
          </li>
          <li onClick={() =>
          void router.push(router.pathname, router.asPath, {
            locale: i18n.language === "en" ? "de" : "en",
          })
        }>
            <a>{t("navbar.language")}</a>
          </li>
          <li>
            <a>{t("navbar.info")}</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex-none">
        {currentUser ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="avatar btn btn-circle btn-ghost">
              {currentUser && <Avatar user={currentUser} />}
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                {t("navbar.user.profile")}
                  <span className="badge">New</span>
                </a>
              </li>
              {currentUser.role === "ADMIN" && (
                <li>
                  <Link href="/admin">{t("navbar.user.adminPage")}</Link>
                </li>
              )}
              <li>
                <a>{t("navbar.user.settings")}</a>
              </li>
              <li>
                <a onClick={() => void signOut()}>{t("navbar.user.signOut")}</a>
              </li>
            </ul>
          </div>
        ) : (
          <button
            className="btn btn-ghost rounded-btn"
            onClick={() => void signIn()}
          >
            {t("navbar.user.signIn")}
          </button>
        )}
      </div>
    </div>
  );
}

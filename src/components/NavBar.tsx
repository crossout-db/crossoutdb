import { User } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import Avatar from "./Avatar";
import ManageUsers from "./ManageUsers";

type Props = {
  currentUser: User | undefined;
};

export default function NavBar({ currentUser }: Props) {
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
            <a>Packs</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Tools</summary>
              <ul className="p-2">
                <li>
                  <a>Calc Crafting</a>
                </li>
                <li>
                  <a>Reduce Crafting</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Info</a>
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
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              {currentUser.role === "ADMIN" && (
                <li>
                  <Link href="/admin">Site Administration</Link>
                </li>
              )}
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={() => void signOut()}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <button
            className="btn btn-ghost rounded-btn"
            onClick={() => void signIn()}
          >
            Sign in
          </button>
        )}
      </div>
    </div>
  );
}

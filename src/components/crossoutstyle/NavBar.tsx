'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import xodblogo from '~/../public/images/xodblogo150.png';
import { Menu } from 'react-feather';
import { usePathname } from 'next/navigation';
import { User } from 'next-auth';
import Avatar from '../Avatar';
import { signIn, signOut } from 'next-auth/react';
import { useCurrentUser } from '~/lib/context';

interface NavBarProps { }

const NavBar: React.FC<NavBarProps> = ({ }) => {
    const [menuActive, setMenuActive] = useState(false);
    const [userControlsActive, setUserControlsActive] = useState(false);
    const pathname = usePathname();
    const currentUser = useCurrentUser();

    const links = [
        {
            name: 'Home',
            href: '/',
        },
    ];

    const userLinks = [
        {
            name: 'Profile',
            href: '/profile',
        },
        {
            name: 'Settings',
            href: '/settings',
        },
        {
            name: 'Logout',
            onClick: () => void signOut(),
        },
    ];

    
    if (currentUser?.role === 'ADMIN') 
        userLinks.splice(-1, 0, { name: 'Site Administration', href: '/admin' })

    return (
        <nav className="bg-neutral-800 drop-shadow">
            <div className="mx-auto container p-4 flex items-center justify-between flex-wrap">
                <a
                    href={'/'}
                    className="flex item-center text-white flex-shrink-0 mr-6">
                    <Image
                        src={xodblogo}
                        alt="CrossoutDB Logo"
                        width={40}
                        height={40}
                    />
                    <span className="font-semibold text-xl tracking-tight m-auto ml-1">
                        CrossoutDB
                    </span>
                </a>
                <div className="flex-grow w-full hidden lg:flex lg:items-center lg:w-auto">
                    {links.map(link => (
                        <div
                            key={link.name}
                            className={`${pathname === link.href
                                ? 'text-white'
                                : 'text-xoPrimary'
                                } hidden lg:inline-block lg:mt-0  hover:text-white mr-4`}>
                            <Link href={link.href}>{link.name}</Link>
                        </div>
                    ))}
                </div>
                <div className="space-x-2 flex flex-row">
                    <div>
                        {currentUser ? (
                            <div className="relative px-3 py-2">
                                <label tabIndex={0} className="avatar btn btn-circle btn-ghost" onClick={() => setUserControlsActive(!userControlsActive)}>
                                    {currentUser && <Avatar user={currentUser} />}
                                </label>
                                {userControlsActive &&
                                    <div onMouseLeave={() => setUserControlsActive(false)} className="absolute right-0 my-2 border-xoPrimary text-xoPrimary hover:border-white flex items-center px-3 py-2 border bg-black">
                                        <ul>
                                            {userLinks.map(entry => <li className="hover:text-white whitespace-nowrap">
                                                {entry.href ?
                                                    <Link href={entry.href}>
                                                        {entry.name}
                                                    </Link>
                                                    :
                                                    <button onClick={entry.onClick}>{entry.name}</button>
                                                }
                                            </li>)}
                                        </ul>
                                    </div>
                                }
                            </div>
                        ) : (
                            <button
                                className="border-xoPrimary text-xoPrimary hover:border-white flex items-center px-3 py-2 border bg-black"
                                onClick={() => void signIn()}
                            >
                                Sign in
                            </button>
                        )}
                    </div>
                    <button
                        onClick={() => setMenuActive(!menuActive)}
                        className={`${menuActive
                            ? 'border-xoQuaternary shadow-orange-500 shadow text-white'
                            : 'border-xoPrimary text-xoPrimary hover:border-white'
                            } lg:hidden flex items-center px-3 py-2 border bg-black`}>
                        <Menu />
                    </button>
                </div>
                {menuActive && (
                    <div className={`w-full block flex-grow lg:hidden`}>
                        <div className="text-sm">
                            {links.map(link => (
                                <div
                                    key={link.name}
                                    className={`${pathname === link.href
                                        ? 'text-white'
                                        : 'text-xoPrimary'
                                        } block mt-4 text-white hover:text-white mr-4`}>
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

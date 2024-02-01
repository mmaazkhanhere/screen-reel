/*A react component used for rendering navigation items within a navigation bar.
It dynamically adjusts styling based whether the current page matches the 
specified  href. If it matches, the label is underlined */

"use client"
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';

type Props = {
    label: string;
    href: string
}

const NavbarItem: React.FC<Props> = ({ label, href }: Props) => {

    const pathName = usePathname() //to get the current pathname
    const isCurrent = pathName === href /*checks whether the current url
    is same as the href specified and assign its value to isCurrent variable */

    return (
        <Link
            href={href}
            className={`text-white font-semibold text-lg 
            ${isCurrent ? 'underline decoration-2 underline-offset-2 cursor-default' :
                    'cursor-pointer hover:underline hover:decoration-white'}`}
        >
            {label}
        </Link>
    )
}

export default NavbarItem
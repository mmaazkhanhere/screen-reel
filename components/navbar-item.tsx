"use client"
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';

type Props = {
    label: string;
    href: string
}

const NavbarItem: React.FC<Props> = ({ label, href }: Props) => {

    const pathName = usePathname()
    const isCurrent = pathName === href

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
import Link from 'next/link';
import React from 'react'

type Props = {
    label: string;
    current?: boolean;
    href: string
}

const NavbarItem: React.FC<Props> = (props: Props) => {
    return (
        <Link
            href={props.href}
            className={`text-white font-semibold text-lg 
            ${props.current ? 'underline decoration-2 underline-offset-2 cursor-default' :
                    'cursor-pointer hover:underline hover:decoration-white'}`}
        >
            {props.label}
        </Link>
    )
}

export default NavbarItem
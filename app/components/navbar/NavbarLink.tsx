import Link from 'next/link';

interface NavbarLinkProps {
    title: string;
    page: string;
}

export const NavbarLinkComp: React.FC<NavbarLinkProps> = ({ page, title }) => {
    return (
        <li className='text-neutral-1000 hover:text-trayenko-green'>
            <Link href={`/${page}`}>{title}</Link>
        </li>
    );
};

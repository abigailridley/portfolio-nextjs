import Link from "next/link";
// import SiteNav from "./site-nav"

export default function Header() {
    return (
        <header className="flex justify-between items-center
        py-4 px-7 border-b">
            <Link href="/">
            <img
                src="/favicon.ico"
                alt='logo'
                className="h-[35px] w-[35px]"
                width='50'
                height='50'
                />
            </Link>
        </header>
    )
}
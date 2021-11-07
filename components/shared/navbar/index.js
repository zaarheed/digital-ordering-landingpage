import Link from "next/link";
import menuItems from "./links";

export default function Navbar() {
    return (
        <div className="bg-royal-500 w-full text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="nav-shrink flex justify-between items-center py-2 lg:justify-start lg:space-x-10">
                    <div className="lg:w-0 lg:flex-1">
                        <Link href="/">
                            <div className="bg-royal-700 rounded-md" style={{ width: 140, height: 40 }} />
                        </Link>
                    </div>
                    <nav className="hidden lg:flex space-x-10">
                        {menuItems.map(item => (
                            <Link href={item.href} key={item.title}>
                                <a className="text-sm leading-6 font-bold hover:text-sunshine-500 focus:outline-none transition ease-in-out duration-150">
                                    {item.title}
                                </a>
                            </Link>
                        ))}
                    </nav>
                    <div className="hidden lg:flex items-center justify-end space-x-8 lg:flex-1 lg:w-0">
                        {/* <button
                            type="button"
                            className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent leading-6 font-bold rounded text-white bg-candy-500 hover:bg-sunshine-500 hover:text-gray-900 focus:outline-none transition ease-in-out duration-150"
                        >
                            Sign Up
                        </button> */}
                    </div>
                </div>
            </div>

        </div>
    );
}
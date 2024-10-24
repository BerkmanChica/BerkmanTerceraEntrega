import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="flex justify-center h-screen bg-gradient-to-b from-purple-900 to-purple-600">
            <ul className="flex flex-col gap-16 mt-10 items-center">
                <Link
                    to={"/"}
                    className="w-40 text-center capitalize py-4 bg-pink-500 rounded-lg font-bold text-white cursor-pointer text-xl transition-all transform hover:scale-105 hover:bg-pink-600 shadow-lg hover:shadow-pink-300/40 md:w-48 md:text-2xl"
                >
                    HomePage
                </Link>
                <Link
                    to={"/humans"}
                    className="w-40 text-center capitalize py-4 bg-pink-500 rounded-lg font-bold text-white cursor-pointer text-xl transition-all transform hover:scale-105 hover:bg-pink-600 shadow-lg hover:shadow-pink-300/40 md:w-48 md:text-2xl"
                >
                    Humans
                </Link>
                <Link
                    to={"/aliens"}
                    className="w-40 text-center capitalize py-4 bg-pink-500 rounded-lg font-bold text-white cursor-pointer text-xl transition-all transform hover:scale-105 hover:bg-pink-600 shadow-lg hover:shadow-pink-300/40 md:w-48 md:text-2xl"
                >
                    Aliens
                </Link>
                <Link
                    to={"/about"}
                    className="w-40 text-center capitalize py-4 bg-pink-500 rounded-lg font-bold text-white cursor-pointer text-xl transition-all transform hover:scale-105 hover:bg-pink-600 shadow-lg hover:shadow-pink-300/40 md:w-48 md:text-2xl"
                >
                    About
                </Link>
            </ul>
        </nav>
    );
}

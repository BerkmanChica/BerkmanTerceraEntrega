import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="flex justify-center h-screen bg-gradient-to-b from-[#3b2a4e] to-[#5d4c7d]">
            <ul className="flex flex-col gap-10 mt-10 items-center">
                {[
                    { name: "HomePage", icon: "🏠" },
                    { name: "Clans", icon: "🏛️" },
                    { name: "Villages", icon: "🏘️" },
                    { name: "Kekkei Genkai", icon: "🔥" },
                    { name: "Tailed Beasts", icon: "🐉" },
                    { name: "Akatsuki", icon: "☠️" },
                    { name: "About", icon: "ℹ️" }
                ].map(({ name, icon }) => (
                    <li key={name} className="transition-transform transform hover:scale-110">
                        <Link
                            to={`/${name.toLowerCase().replace(/ /g, "-")}`}
                            className="relative flex items-center justify-center w-48 py-4 text-xl font-bold text-white bg-gradient-to-r from-orange-500 to-red-400 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl hover:scale-105"
                        >
                            <span className="mr-2">{icon}</span>
                            {name}
                            <span className="absolute inset-0 bg-opacity-30 bg-gray-900 rounded-lg transition-opacity duration-300 opacity-0 hover:opacity-100"></span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default function Header() {
    return (
        <header className="flex flex-col items-center py-8 gap-4 bg-gradient-to-b from-gray-100 to-gray-300 shadow-xl">
            <img
                src="https://i.pinimg.com/originals/9e/fd/8d/9efd8d7d411a744b0c62ac5008566a4a.jpg" // Reemplaza esta URL con la correcta
                height={88}
                width={88}
                alt="mortyPendejo"
                className="hover:scale-110 transition-transform duration-300 rounded-full shadow-lg"
            />  
            <h1 className="capitalize font-extrabold text-center text-purple-800 text-5xl md:text-7xl tracking-wider drop-shadow-lg">
                rick and morty
            </h1>
        </header>
    );
}

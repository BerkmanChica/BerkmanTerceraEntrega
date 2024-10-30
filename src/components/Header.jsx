export default function Header() {
    return (
        <header className="flex flex-col items-center py-8 gap-4 bg-cover bg-center" style={{ backgroundImage: "url('https://example.com/your-naruto-background.jpg')" }}>
            <img
                src="https://th.bing.com/th/id/R.b99a779834a254f7a7205ebe25793af8?rik=ca0PnpSS2sDFdQ&pid=ImgRaw&r=0"
                height={88}
                width={88}
                alt="mortyPendejo"
                className="hover:scale-110 transition-transform duration-300 rounded-full border-4 border-white shadow-lg"
            />
            <h1 className="capitalize font-extrabold text-center text-yellow-300 text-5xl md:text-7xl tracking-wider drop-shadow-lg">
                NARUTO
            </h1>
        </header>
    );
}

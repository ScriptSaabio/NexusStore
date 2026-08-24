import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-gray-900 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <Link to="/" className="text-2xl font-bold">
                    NEXUS STORE
                </Link>

                <nav className="flex gap-6">
                    <Link
                        to="/"
                        className="hover:text-blue-400 transition"
                    >
                        Home
                    </Link>

                    <Link
                        to="/games"
                        className="hover:text-blue-400 transition"
                    >
                        Videogames
                    </Link>

                    <Link
                        to="/roupas"
                        className="hover:text-blue-400 transition"
                    >
                        Roupas
                    </Link>

                    <Link
                        to="/tenis"
                        className="hover:text-blue-400 transition"
                    >
                        Tênis
                    </Link>
                </nav>

            </div>
        </header>
    );
}

export default Header;
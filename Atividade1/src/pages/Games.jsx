import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ProductCarousel from "../components/ProductCarousel.jsx";
import products from "../Data/products.js";
function Games() {

    const games = products.filter(
        product => product.category === "games"
    );

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">

            <Header />

            <main className="flex-1">

                <section className="bg-blue-50 py-12">

                    <div className="max-w-7xl mx-auto px-6">

                        <h1 className="text-4xl font-bold text-gray-900">
                            Videogames
                        </h1>

                        <p className="text-gray-600 mt-3">
                            Consoles, jogos e acessórios para suas partidas.
                        </p>

                    </div>

                </section>

                <ProductCarousel
                    products={games}
                    title="Produtos de videogame"
                />

            </main>

            <Footer />

        </div>
    );
}

export default Games;
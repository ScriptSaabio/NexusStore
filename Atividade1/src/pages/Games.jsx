import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ProductCarousel from "../components/ProductCarousel.jsx";
import ProductCard from "../components/ProductCard.jsx";

import products from "../Data/products.js";

function Games() {

    const games = products.filter(
        product => product.category === "games"
    );

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">

            <Header />

            <main className="flex-1">

                {/* BANNER DA CATEGORIA */}

                <section className="bg-blue-50 py-12">

                    <div className="max-w-7xl mx-auto px-6">

                        <p className="text-blue-600 font-semibold mb-2">
                            NEXUS STORE
                        </p>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Videogames
                        </h1>

                        <p className="text-gray-600 mt-3 max-w-xl">
                            Encontre consoles, jogos e acessórios
                            para deixar suas partidas ainda melhores.
                        </p>

                    </div>

                </section>


                {/* CARROSSEL */}

                <ProductCarousel
                    products={games}
                    title="Destaques em videogames"
                />


                {/* LISTA DE PRODUTOS */}

                <section className="max-w-7xl mx-auto px-6 py-10">

                    <div className="mb-8">

                        <h2 className="text-3xl font-bold text-gray-900">
                            Todos os videogames
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Confira todos os produtos disponíveis nesta categoria.
                        </p>

                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {games.map((product) => (

                            <ProductCard
                                key={product.id}
                                product={product}
                            />

                        ))}

                    </div>

                </section>

            </main>

            <Footer />

        </div>
    );
}

export default Games;
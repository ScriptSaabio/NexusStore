import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ProductCarousel from "../components/ProductCarousel.jsx";
import ProductCard from "../components/ProductCard.jsx";

import products from "../Data/products.js";

function Roupas() {

    const roupas = products.filter(
        product => product.category === "roupas"
    );

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">

            <Header />

            {/* BANNER */}

            <main className="flex-1">

                <section className="bg-blue-50 py-12">

                    <div className="max-w-7xl mx-auto px-6">

                        <p className="text-blue-600 font-semibold mb-2">
                            NEXUS STORE
                        </p>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Roupas
                        </h1>

                        <p className="text-gray-600 mt-3 max-w-xl">
                            Encontre peças para todos os estilos,
                            ocasiões e momentos.
                        </p>

                    </div>

                </section>


                {/* CARROSSEL */}

                <ProductCarousel
                    products={roupas}
                    title="Destaques em roupas"
                />


                {/* LISTA */}

                <section className="max-w-7xl mx-auto px-6 py-10">

                    <div className="mb-8">

                        <h2 className="text-3xl font-bold text-gray-900">
                            Todas as roupas
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Confira todas as peças disponíveis.
                        </p>

                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {roupas.map((product) => (

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

export default Roupas;
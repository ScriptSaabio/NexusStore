import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ProductCarousel from "../components/ProductCarousel.jsx";
import ProductCard from "../components/ProductCard.jsx";
import HeroCarousel from "../components/HeroCarousel.jsx";

import products from "../Data/products.js";

function Home() {

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">

            <Header />

            <main className="flex-1">

                {/* HERO */}

                <section className="bg-linear-to-r from-blue-100 to-cyan-100">

                    <div className="max-w-7xl mx-auto px-6 py-16
                                    flex flex-col md:flex-row
                                    items-center justify-between gap-10">

                        {/* TEXTO */}

                        <div className="max-w-xl">

                            <p className="text-blue-600 font-semibold mb-3">
                                NEXUS STORE
                            </p>

                            <h1 className="text-4xl md:text-6xl font-bold
                                           text-gray-900 leading-tight">

                                Shop Your
                                <br />
                                Favorites

                            </h1>

                            <p className="text-gray-600 mt-5 text-lg">
                                Encontre os melhores produtos em videogames,
                                roupas e tênis com os melhores preços.
                            </p>

                            <button
                                className="mt-6 bg-blue-600 text-white
                                           px-6 py-3 rounded-lg font-semibold
                                           transition-all duration-300
                                           hover:bg-blue-700
                                           hover:scale-105
                                           active:scale-95"
                            >
                                Comprar agora
                            </button>

                        </div>


                        {/* CARROSSEL DE FOTOS */}

                        <HeroCarousel products={products} />

                    </div>

                </section>


                {/* CARROSSEL DE PRODUTOS */}

                <ProductCarousel
                    products={products}
                    title="Produtos em destaque"
                />


                {/* CARDS DOS PRODUTOS */}

                <section className="max-w-7xl mx-auto px-6 py-10">

                    <div className="flex items-center justify-between mb-8">

                        <div>

                            <h2 className="text-3xl font-bold text-gray-900">
                                Nossos produtos
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Confira alguns dos nossos produtos.
                            </p>

                        </div>

                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {products.slice(0, 8).map((product) => (

                            <ProductCard
                                key={product.id}
                                product={product}
                            />

                        ))}

                    </div>

                </section>


                {/* BENEFÍCIOS */}

                <section className="max-w-7xl mx-auto px-6 py-10">

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                        <div className="text-center p-5">
                            <div className="text-3xl mb-2">
                                🚚
                            </div>

                            <h3 className="font-bold">
                                Frete Grátis
                            </h3>

                            <p className="text-sm text-gray-500">
                                Para compras acima de R$ 150
                            </p>
                        </div>


                        <div className="text-center p-5">
                            <div className="text-3xl mb-2">
                                🛡️
                            </div>

                            <h3 className="font-bold">
                                Compra Segura
                            </h3>

                            <p className="text-sm text-gray-500">
                                Seus dados protegidos
                            </p>
                        </div>


                        <div className="text-center p-5">
                            <div className="text-3xl mb-2">
                                🎧
                            </div>

                            <h3 className="font-bold">
                                Suporte
                            </h3>

                            <p className="text-sm text-gray-500">
                                Estamos aqui para ajudar
                            </p>
                        </div>


                        <div className="text-center p-5">
                            <div className="text-3xl mb-2">
                                ↩️
                            </div>

                            <h3 className="font-bold">
                                Devolução Fácil
                            </h3>

                            <p className="text-sm text-gray-500">
                                Até 30 dias para devolver
                            </p>
                        </div>

                    </div>

                </section>

            </main>

            <Footer />

        </div>
    );
}

export default Home;
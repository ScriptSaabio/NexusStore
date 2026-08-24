import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

function Home() {

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">

            <Header />

            <main className="flex-1 max-w-7xl mx-auto px-6 py-12">

                <section className="text-center mb-12">

                    <h1 className="text-4xl font-bold text-gray-900">
                        Bem-vindo à NEXUS STORE
                    </h1>

                    <p className="text-gray-600 mt-3 text-lg">
                        Tudo o que você procura em um só lugar.
                    </p>

                </section>


                <section>

                    <h2 className="text-3xl font-bold mb-6">
                        Produtos em destaque
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <ProductCard
                            nome="PlayStation 5"
                            preco="3.999,90"
                            imagem="https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
                        />

                        <ProductCard
                            nome="Camiseta Oversized"
                            preco="89,90"
                            imagem="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
                        />

                        <ProductCard
                            nome="Tênis Esportivo"
                            preco="299,90"
                            imagem="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                        />

                    </div>

                </section>

            </main>
            <Footer />
        </div>
    );
}

export default Home;
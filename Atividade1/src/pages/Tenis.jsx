import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

function Tenis() {

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">

            <Header />

            <main className="flex-1 max-w-7xl mx-auto px-6 py-12">
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                        Tênis
                    </h1>

                    <p className="text-gray-600 mb-10">
                        Tênis esportivos e casuais para todos os estilos.
                    </p>
                </section>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <ProductCard
                        nome="Tênis Esportivo"
                        preco="299,90"
                        imagem="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                    />

                    <ProductCard
                        nome="Tênis Casual"
                        preco="199,90"
                        imagem="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
                    />

                    <ProductCard
                        nome="Tênis Running"
                        preco="349,90"
                        imagem="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2"
                    />

                </div>

            </main>
            <Footer />
        </div>
    );
}

export default Tenis;
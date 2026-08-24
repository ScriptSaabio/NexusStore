import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

function Roupas() {

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">

            <Header />

            <main className="flex-1 max-w-7xl mx-auto px-6 py-12">
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                        Roupas
                    </h1>

                    <p className="text-gray-600 mb-10">
                        Encontre roupas para todos os estilos.
                    </p>
                </section>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <ProductCard
                        nome="Camiseta Oversized"
                        preco="89,90"
                        imagem="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
                    />

                    <ProductCard
                        nome="Moletom Preto"
                        preco="159,90"
                        imagem="https://images.unsplash.com/photo-1556821840-3a63f95609a7"
                    />

                    <ProductCard
                        nome="Jaqueta Jeans"
                        preco="249,90"
                        imagem="https://images.unsplash.com/photo-1543076447-215ad9ba6923"
                    />

                </div>

            </main>
            <Footer />
        </div>
    );
}

export default Roupas;
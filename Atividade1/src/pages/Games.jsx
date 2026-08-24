import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

function Games() {

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">

            <Header />

            <main className="flex-1 max-w-7xl mx-auto px-6 py-12">

                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">
                        Videogames
                    </h1>

                    <p className="text-gray-600 mb-10">
                        Encontre consoles, jogos e acessórios.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <ProductCard
                        nome="PlayStation 5"
                        preco="3.999,90"
                        imagem="https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
                    />

                    <ProductCard
                        nome="Controle Gamer"
                        preco="299,90"
                        imagem="https://images.kabum.com.br/produtos/fotos/sync_mirakl/883814/xlarge/Controle-Gamer-Sem-Fio-Celular-Joystick-Mane-Bluetooth-2-4g-Sn-pro-A_1771709017.png"
                    />

                    <ProductCard
                        nome="Nintendo Switch"
                        preco="2.299,90"
                        imagem="https://images.unsplash.com/photo-1578303512597-81e6cc155b3e"
                    />

                </div>

            </main>
            <Footer />
        </div>
    );
}

export default Games;
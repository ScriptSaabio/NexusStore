import { useEffect, useState } from "react";

function HeroCarousel({ products }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === products.length - 1
                ? 0
                : prevIndex + 1
        );
    };

    const previousImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0
                ? products.length - 1
                : prevIndex - 1
        );
    };

    // Troca automaticamente a cada 4 segundos
    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === products.length - 1
                    ? 0
                    : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);

    }, [products.length]);

    if (!products.length) {
        return null;
    }

    return (
        <div className="relative w-full max-w-lg">

            {/* IMAGEM */}

            <div className="relative h-80 md:h-96 overflow-hidden rounded-2xl">

                <img
                    key={products[currentIndex].id}
                    src={products[currentIndex].image}
                    alt={products[currentIndex].name}
                    className="w-full h-full object-cover
                           animate-[fadeIn_0.5s_ease-in-out]"
                />

                {/* SETA ANTERIOR */}

                <button
                    onClick={previousImage}
                    aria-label="Imagem anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2
                           w-10 h-10 rounded-full
                           bg-white/90 text-gray-800 shadow
                           flex items-center justify-center
                           transition-all duration-300
                           hover:bg-blue-600 hover:text-white
                           hover:scale-110
                           active:scale-90"
                >
                    ←
                </button>

                {/* SETA PRÓXIMA */}

                <button
                    onClick={nextImage}
                    aria-label="Próxima imagem"
                    className="absolute right-3 top-1/2 -translate-y-1/2
                           w-10 h-10 rounded-full
                           bg-white/90 text-gray-800 shadow
                           flex items-center justify-center
                           transition-all duration-300
                           hover:bg-blue-600 hover:text-white
                           hover:scale-110
                           active:scale-90"
                >
                    →
                </button>

            </div>


            {/* NOME DO PRODUTO */}

            <h2
                key={`name-${products[currentIndex].id}`}
                className="text-center text-xl md:text-2xl font-bold
                       text-gray-900 mt-4
                       animate-[fadeIn_0.5s_ease-in-out]"
            >
                {products[currentIndex].name}
            </h2>


            {/* INDICADORES */}

            <div className="flex justify-center gap-2 mt-4">

                {products.map((product, index) => (

                    <button
                        key={product.id}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Ir para imagem ${index + 1}`}
                        className={`w-2.5 h-2.5 rounded-full
                        transition-all duration-300
                        ${index === currentIndex
                                ? "bg-blue-600 scale-125"
                                : "bg-gray-300 hover:bg-gray-400"
                            }`}
                    />

                ))}

            </div>

        </div>
    );
}

export default HeroCarousel;
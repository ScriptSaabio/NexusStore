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

    useEffect(() => {

        const interval = setInterval(() => {
            nextImage();
        }, 4000);

        return () => clearInterval(interval);

    }, [products.length]);

    const product = products[currentIndex];

    return (
        <div className="relative w-full max-w-lg">

            <div className="relative h-80 md:h-96 overflow-hidden rounded-2xl shadow-xl bg-white">

                <img
                    key={product.id}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover
                               animate-[fadeIn_0.5s_ease-in-out]"
                />

                <div className="absolute bottom-0 left-0 right-0
                                bg-black/60 text-white p-4">

                    <p className="font-bold text-lg">
                        {product.name}
                    </p>

                    <p className="text-sm text-gray-200">
                        R$ {product.price}
                    </p>

                </div>

            </div>


            {/* Botão anterior */}

            <button
                onClick={previousImage}
                className="absolute left-3 top-1/2 -translate-y-1/2
                           w-10 h-10 rounded-full
                           bg-white/90 text-gray-800 shadow
                           transition-all duration-300
                           hover:bg-blue-600 hover:text-white
                           hover:scale-110 active:scale-90"
            >
                ←
            </button>


            {/* Botão próximo */}

            <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2
                           w-10 h-10 rounded-full
                           bg-white/90 text-gray-800 shadow
                           transition-all duration-300
                           hover:bg-blue-600 hover:text-white
                           hover:scale-110 active:scale-90"
            >
                →
            </button>


            {/* Indicadores */}

            <div className="absolute bottom-3 left-1/2
                            -translate-x-1/2 flex gap-2">

                {products.map((item, index) => (

                    <button
                        key={item.id}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            index === currentIndex
                                ? "bg-blue-600 scale-125"
                                : "bg-white/70"
                        }`}
                    />

                ))}

            </div>

        </div>
    );
}

export default HeroCarousel;
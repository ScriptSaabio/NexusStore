import { useState } from "react";
import ProductCard from "./ProductCard.jsx";

function ProductCarousel({ products, title = "Produtos em destaque" }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {

        setCurrentIndex((prevIndex) =>
            prevIndex === products.length - 1
                ? 0
                : prevIndex + 1
        );

    };

    const previous = () => {

        setCurrentIndex((prevIndex) =>
            prevIndex === 0
                ? products.length - 1
                : prevIndex - 1
        );

    };

    if (products.length === 0) {
        return null;
    }

    const visibleProducts = [];

    for (let i = 0; i < Math.min(4, products.length); i++) {

        visibleProducts.push(
            products[(currentIndex + i) % products.length]
        );

    }

    return (
        <section className="max-w-7xl mx-auto px-6 py-10">

            <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {title}
                </h2>

                <div className="flex gap-2">

                    <button
                        onClick={previous}
                        className="w-10 h-10 rounded-full border border-gray-300
                                   bg-white text-gray-700
                                   transition-all duration-300
                                   hover:bg-blue-600 hover:text-white
                                   hover:border-blue-600
                                   active:scale-90"
                    >
                        ←
                    </button>

                    <button
                        onClick={next}
                        className="w-10 h-10 rounded-full border border-gray-300
                                   bg-white text-gray-700
                                   transition-all duration-300
                                   hover:bg-blue-600 hover:text-white
                                   hover:border-blue-600
                                   active:scale-90"
                    >
                        →
                    </button>

                </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {visibleProducts.map((product) => (

                    <div
                        key={product.id}
                        className="animate-[fadeIn_0.4s_ease-in-out]"
                    >
                        <ProductCard product={product} />
                    </div>

                ))}

            </div>

        </section>
    );
}

export default ProductCarousel;
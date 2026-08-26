function ProductCard({ product }) {

    return (
        <div className="group bg-white rounded-xl border border-gray-200 overflow-hidden
                        transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="bg-gray-100 overflow-hidden">

                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-52 object-cover
                               transition-transform duration-500
                               group-hover:scale-110"
                />

            </div>

            <div className="p-5">

                <h3 className="text-lg font-bold text-gray-800">
                    {product.name}
                </h3>

                <p className="text-gray-500 text-sm mt-2 min-h-10">
                    {product.description}
                </p>

                <p className="text-xl font-bold text-blue-600 mt-4">
                    R$ {product.price}
                </p>

                <button
                    className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg
                               transition-all duration-300
                               hover:bg-blue-700 hover:scale-[1.02]
                               active:scale-95"
                >
                    Comprar
                </button>

            </div>

        </div>
    );
}

export default ProductCard;
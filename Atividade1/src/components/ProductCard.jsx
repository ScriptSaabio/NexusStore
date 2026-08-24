import { useState } from "react";

function ProductCard({ nome, preco, imagem }) {

    const [quantidade, setQuantidade] = useState(0);

    function adicionar() {
        setQuantidade(quantidade + 1);
    }

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

            <img
                src={imagem}
                alt={nome}
                className="w-full h-56 object-cover"
            />

            <div className="p-5">

                <h2 className="text-xl font-bold text-gray-800">
                    {nome}
                </h2>

                <p className="text-green-600 font-bold text-lg mt-2">
                    R$ {preco}
                </p>

                <button
                    onClick={adicionar}
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
                >
                    Adicionar ao carrinho
                </button>

                {quantidade > 0 && (
                    <p className="text-center mt-3 text-gray-600">
                        {quantidade} item(ns) no carrinho
                    </p>
                )}

            </div>

        </div>
    );
}

export default ProductCard;
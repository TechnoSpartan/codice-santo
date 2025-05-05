import React from 'react';
import { FaTwitter } from 'react-icons/fa';

interface Props {
    compartir: () => void;
    obtenerOtro: () => void;
    cambiarModo: () => void;
    modoNoche: boolean;
}

export const Botones: React.FC<Props> = ({ compartir, obtenerOtro, cambiarModo, modoNoche }) => {
    return (
        <div className="mt-4 flex flex-wrap justify-center gap-4">
            <button onClick={compartir} className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition">
                <FaTwitter /> Compartir
            </button>
            <button onClick={obtenerOtro} className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition shadow-md">
                📖 Revelar otro versículo
            </button>
            <button onClick={cambiarModo} className="bg-gray-700 text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition">
                {modoNoche ? "Modo Día" : "Modo Noche"}
            </button>
        </div>
    );
};

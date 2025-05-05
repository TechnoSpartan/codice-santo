import React from 'react';
import { formatearFechaBiblica } from '@/utils/formatearFechaBibica.ts';
import { Versiculo } from '@/types.ts';

interface Props {
    versiculo: Versiculo;
    modoNoche: boolean;
    estilo: {
        bg: string;
        text: string;
        font: string;
    };
}

export const VersiculoDisplay: React.FC<Props> = ({ versiculo, modoNoche, estilo }) => {
    return (
        <div className={`font-serif bg-white shadow-xl rounded-2xl p-6 max-w-xl text-center border border-gray-200 
  ${modoNoche ? 'bg-gray-800 text-white border-gray-600' : ''}`}>
        <p className={`text-xl ${estilo.text} ${estilo.font}`}>
                “{versiculo.texto}”
            </p>
            <p className="mt-2 text-sm text-gray-600 italic">
                {versiculo.libro} — {versiculo.capitulo}:{versiculo.versiculo}
            </p>
            <p className="mt-4 text-sm text-gray-500 italic">
                {formatearFechaBiblica(versiculo.fecha)}
            </p>
        </div>
    );
};

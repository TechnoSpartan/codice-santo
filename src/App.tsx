import { useEffect, useState } from "react";
import axios from "axios";
import { VersiculoDisplay } from "@components/VersiculoDisplay";
import { Botones } from "@components/Botones";
import { Versiculo }           from '@/types.ts';

const estilosDivinos = [
    { bg: "bg-yellow-100", text: "text-yellow-800", font: "italic" },
    { bg: "bg-blue-100", text: "text-blue-800", font: "italic" },
    { bg: "bg-red-100", text: "text-red-800", font: "italic" },
    { bg: "bg-green-100", text: "text-green-800", font: "italic" },
    { bg: "bg-purple-100", text: "text-purple-800", font: "italic" },
    { bg: "bg-pink-100", text: "text-pink-800", font: "italic" },
];

function App() {
    const [versiculo, setVersiculo] = useState<Versiculo | null>(null);
    const [loading, setLoading] = useState(true);
    const [estilo, setEstilo] = useState(estilosDivinos[0]);
    const [modoNoche, setModoNoche] = useState(false);

    const obtenerVersiculo = () => {
        setLoading(true);
        axios
            .get(`${import.meta.env.VITE_API_URL}/api/versiculo`)
            .then((res) => {
                setVersiculo(res.data.data);
                const randomEstilo = estilosDivinos[Math.floor(Math.random() * estilosDivinos.length)];
                setEstilo(randomEstilo);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error bajando la Palabra:", err);
                setLoading(false);
            });
    };

    const compartirEnTwitter = () => {
        if (versiculo) {
            const sitio = import.meta.env.VITE_SITE_URL ?? "";
            const textoParaTwitter = encodeURIComponent(`${versiculo.texto} #JesucriptoLives ${sitio}`);
            const url = `https://twitter.com/intent/tweet?text=${textoParaTwitter}`;
            window.open(url, "_blank");
        }
    };

    useEffect(() => {
        obtenerVersiculo();
    }, []);

    return (
        <div className={`min-h-screen flex flex-col items-center justify-center transition-all duration-300 px-4 ${modoNoche ? 'bg-gray-900 text-white' : estilo.bg}`}>
            <h1 className={`text-3xl font-bold mb-4 ${modoNoche ? 'text-white' : 'text-gray-800'}`}>📜 Códice Santo</h1>
            {loading ? (
                <p className="text-gray-600 italic">Consultando a los profetas...</p>
            ) : versiculo ? (
                <>
                    <VersiculoDisplay versiculo={versiculo} modoNoche={modoNoche} estilo={estilo} />
                    <Botones
                        compartir={compartirEnTwitter}
                        obtenerOtro={obtenerVersiculo}
                        cambiarModo={() => setModoNoche(!modoNoche)}
                        modoNoche={modoNoche}
                    />
                    <form action="https://www.paypal.com/donate" method="post" target="_top" className="mt-4">
                        <input type="hidden" name="business" value="23487Z38BLCWE" />
                        <input type="hidden" name="no_recurring" value="0" />
                        <input type="hidden" name="item_name" value="Bendíceme con un café para seguir predicando el código sagrado." />
                        <input type="hidden" name="currency_code" value="EUR" />
                        <button
                            type="submit"
                            className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 px-4 py-2 rounded-xl font-semibold shadow-md transition"
                        >
                            ☕ Bendíceme con un café
                        </button>
                    </form>
                </>
            ) : (
                <p className="text-red-500">No hay palabra hoy. Silencio sagrado.</p>
            )}
        </div>
    );
}

export default App;

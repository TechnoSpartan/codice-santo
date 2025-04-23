import { useEffect, useState } from "react";
import axios from "axios";
import { FaTwitter } from "react-icons/fa";

const estilosDivinos = [
    { bg: "bg-yellow-100", text: "text-yellow-800", font: "italic" },
    { bg: "bg-blue-100", text: "text-blue-800", font: "italic" },
    { bg: "bg-red-100", text: "text-red-800", font: "italic" },
    { bg: "bg-green-100", text: "text-green-800", font: "italic" },
    { bg: "bg-purple-100", text: "text-purple-800", font: "italic" },
    { bg: "bg-pink-100", text: "text-pink-800", font: "italic" },
];

function App() {
    const [versiculo, setVersiculo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [estilo, setEstilo] = useState(estilosDivinos[0]);
    const [modoNoche, setModoNoche] = useState(false);

    const obtenerVersiculo = () => {
        setLoading(true);
        axios.get(`${import.meta.env.VITE_API_URL}/api/versiculo`)
            .then(res => {
                const texto = res.data.versiculo.textoCompleto;
                setVersiculo({ ...res.data.versiculo, texto });
                const randomEstilo = estilosDivinos[Math.floor(Math.random() * estilosDivinos.length)];
                setEstilo(randomEstilo);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error bajando la Palabra:", err);
                setLoading(false);
            });
    };

    useEffect(() => {
        obtenerVersiculo();
    }, []);

    const compartirEnTwitter = () => {
        if (versiculo) {
            const sitio = import.meta.env.VITE_SITE_URL || "";
            const textoParaTwitter = encodeURIComponent(`${versiculo.texto} #JesucriptoLives ${sitio}`);
            const url = `https://twitter.com/intent/tweet?text=${textoParaTwitter}`;
            window.open(url, '_blank');
        }
    };

    return (
        <div className={`min-h-screen flex flex-col items-center justify-center transition-all duration-300 px-4 ${modoNoche ? 'bg-gray-900 text-white' : estilo.bg}`}>
            <h1 className={`text-3xl font-bold mb-4 ${modoNoche ? 'text-white' : 'text-gray-800'}`}>📜 Códice Santo</h1>
            {loading ? (
                <p className="text-gray-600 italic">Consultando a los profetas...</p>
            ) : versiculo ? (
                <div className={`bg-white shadow-xl rounded-2xl p-6 max-w-xl text-center border border-gray-200 ${modoNoche ? 'bg-gray-800 text-white border-gray-600' : ''}`}>
                    <p className={`text-xl ${estilo.text} ${estilo.font}`}>{versiculo.texto}</p>
                    <p className="mt-4 text-sm text-gray-500">
                        Revelado el {new Date().getMonth() + 1}-{new Date().getFullYear()} por el profeta
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center gap-4">
                        <button onClick={compartirEnTwitter} className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition">
                            <FaTwitter /> Compartir
                        </button>
                        <button onClick={obtenerVersiculo} className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition">Otro versículo</button>
                        <button onClick={() => setModoNoche(!modoNoche)} className="bg-gray-700 text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition">
                            {modoNoche ? "Modo Día" : "Modo Noche"}
                        </button>
                        <form action="https://www.paypal.com/donate" method="post" target="_top">
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
                    </div>
                </div>
            ) : (
                <p className="text-red-500">No hay palabra hoy. Silencio sagrado.</p>
            )}
        </div>
    );
}

export default App;

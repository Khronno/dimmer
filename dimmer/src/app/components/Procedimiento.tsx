export default function Procedimiento() {
    return (
        <div className="p-8 w-[90%]" id="procedimiento">
    <div className="bg-gray-300 p-4 rounded-lg shadow-xl">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-sans mb-4 text-gray-600">
            Cómo Construir tu Propio Dimmer Casero: Detalles de las Conexiones
        </h1>
        <p className="text-gray-500 md:text-lg lg:text-xl font-mono font-[500]">
            ¡Vamos a sumergirnos en las conexiones para crear tu propio dimmer! Sigue estos pasos detallados:
        </p>
        <ol className="list-decimal ml-6 mb-4 text-gray-500 md:text-lg lg:text-xl font-mono font-[500]">
            <li>
                <strong>Conexión del Triac y el Diac:</strong>
                <p>
                    Comienza conectando el Triac y el Diac en paralelo. Asegúrate de seguir las indicaciones del fabricante:
                    <ul className="list-disc ml-6">
                        <li>Observa la orientación correcta.</li>
                        <li>Conecta los pines según las especificaciones.</li>
                    </ul>
                </p>
            </li>

            <li>
                <strong>Conexión del Potenciómetro y la Resistencia de 220 ohmios:</strong>
                <p>
                    Ahora, conecta en serie el potenciómetro de 100k ohmios con la resistencia de 220 ohmios. Esto formará la red de control para ajustar la intensidad de la luz. Sigue estos pasos:
                    <ul className="list-disc ml-6">
                        <li>Conecta un extremo del potenciómetro al punto de conexión central de la resistencia de 220 ohmios.</li>
                        <li>Conecta el otro extremo del potenciómetro a la fuente de alimentación.</li>
                        <li>Conecta el extremo libre de la resistencia de 220 ohmios al punto de conexión del Triac y el Diac.</li>
                    </ul>
                </p>
            </li>

            <li>
                <strong>Conexión de Capacitores:</strong>
                <p>
                    Conecta en paralelo el capacitor de 0.1 μF y el capacitor de 0.01 μF. Estos capacitores ayudarán a filtrar el ruido y a mejorar la estabilidad del circuito:
                    <ul className="list-disc ml-6">
                        <li>Conecta un extremo del capacitor de 0.1 μF al punto de conexión central del potenciómetro y la resistencia.</li>
                        <li>Conecta el otro extremo del capacitor de 0.1 μF al punto de conexión del Triac y el Diac.</li>
                        <li>Conecta el capacitor de 0.01 μF en paralelo al Triac y el Diac.</li>
                    </ul>
                </p>
            </li>

            <li>
                <strong>Conexión de la Resistencia de 100 ohmios y el Inductor:</strong>
                <p>
                    Conecta en serie la resistencia de 100 ohmios, 1W, y el inductor de 10 mH, 1A. Esta combinación limitará la corriente y mejorará la estabilidad del circuito:
                    <ul className="list-disc ml-6">
                        <li>Conecta un extremo de la resistencia de 100 ohmios al punto de conexión del Triac y el Diac.</li>
                        <li>Conecta el otro extremo de la resistencia de 100 ohmios al punto de conexión del inductor.</li>
                        <li>Conecta el otro extremo del inductor al punto de conexión de la fuente de alimentación.</li>
                    </ul>
                </p>
            </li>

            <li>
                <strong>Conexión de la Fuente de Alimentación AC:</strong>
                <p>
                    Conecta la fuente de alimentación AC al circuito. Asegúrate de seguir las polaridades correctas y de tomar precauciones al trabajar con corriente eléctrica:
                    <ul className="list-disc ml-6">
                        <li>Conecta el cable de fase de la fuente de alimentación al punto de conexión del inductor.</li>
                        <li>Conecta el cable neutro de la fuente de alimentación al punto de conexión del Triac y el Diac.</li>
                    </ul>
                </p>
            </li>

            <li>
                <strong>Conexión de la Lámpara o Carga Resistiva:</strong>
                <p>
                    Conecta la lámpara o la carga resistiva al circuito. Esto representará la carga que será controlada por el dimmer:
                    <ul className="list-disc ml-6">
                        <li>Conecta un extremo de la carga al punto de conexión del Triac y el Diac.</li>
                        <li>Conecta el otro extremo de la carga al punto de conexión del inductor.</li>
                    </ul>
                </p>
            </li>

            <li>
                <strong>Ajuste del Potenciómetro:</strong>
                <p>
                    Ahora, ajusta el potenciómetro para variar la resistencia y, por ende, la intensidad de la luz. Observa cómo la lámpara responde a los cambios en el potenciómetro.
                </p>
            </li>
        </ol>
        <p className="text-gray-500 md:text-lg lg:text-xl font-mono font-[500]">
            Recuerda realizar estas conexiones con cuidado y considerar la seguridad en todo momento. Siempre es recomendable verificar el circuito con un multímetro y realizar pruebas antes de la instalación final.
        </p>
    </div>
</div>
    );
}
        
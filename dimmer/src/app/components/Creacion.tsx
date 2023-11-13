export default function Creacion() {
    return (
        <div className="p-8 w-[90%]" id="creacion">
            <div className="bg-gray-300 p-4 rounded-lg md:flex md:items-center md:justify-center shadow-xl">
                <div>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-sans mb-4 text-gray-600">
                        Creación
                    </h1>
                    <ul className="mb-4 text-gray-500 md:text-lg lg:text-xl font-mono font-[500]">
                        <p>
                            Existen muchísimos tipos de dimmers, en este caso elegimos este.
                        </p>
                        <p>
                            <strong>Materiales:</strong>
                        </p>
                        <li>
                            - Triac (por ejemplo, un BT136) <br />
                            - Diac (por ejemplo, un DB3)
                            <br />
                            - Potenciómetro de 100k ohmios
                            <br />
                            - Resistencia de 220 ohmios
                            <br />
                            - Capacitor de 0.1 μF (microfaradios)
                            <br />
                            - Capacitor de 0.01 μF
                            <br />
                            - Resistencia de 100 ohmios, 1W
                            <br />
                            - Inductor de 10 mH (milihenrios), 1A
                            <br />
                            - Fuente de alimentación AC
                            <br />- Lámpara o carga resistiva
                        </li>
                    </ul>
                </div>
                <img
                    src="/esquema.png"
                    alt="Esquema"
                    className="rounded-xl w-max h-auto"
                />
            </div>
        </div>
    );
}
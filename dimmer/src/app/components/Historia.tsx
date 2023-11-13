"use client"
export default function Historia() {
    return (
      <div className="p-8 w-[90%]" id="historia">
        <div className="bg-gray-300 p-4 rounded-lg shadow-xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-sans mb-4 text-gray-600">
            Historia del Dimmer
          </h1>
          <div className="mb-4">
            <p className="text-gray-500 md:text-lg lg:text-xl font-mono font-[500]">
                La historia del desarrollo de los dimmers se remonta al siglo 19 con los primeros experimentos de iluminación eléctrica de Thomas Edison. En la década de 1890, se introdujeron los primeros reguladores de intensidad basados en resistencias variables. A lo largo del siglo 20, los dispositivos evolucionaron, incorporando tecnologías como el control por reactancia y, finalmente, dimmers electrónicos basados en semiconductores, como el tiristor (SCR), en las décadas de 1950 y 1960.
            </p>
            <p className="text-gray-500 md:text-lg lg:text-xl font-mono font-[500]">
                La tecnología moderna, incluyendo la modulación por ancho de pulso (PWM) y la integración de microcontroladores, ha permitido un control más preciso de la intensidad de la luz. La evolución continúa con desafíos adicionales debido a la adopción generalizada de bombillas LED. La historia del dimmer refleja la constante búsqueda de una iluminación flexible y eficiente a lo largo de los avances tecnológicos en la electricidad y la electrónica.
            </p>
          </div>
        </div>
      </div>
    );
  }

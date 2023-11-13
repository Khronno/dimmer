import Creacion from "./components/Creacion"
import Procedimiento from "./components/Procedimiento"
import Historia from "./components/Historia"
import Inicio from "./components/Inicio"
import Objetivo from "./components/Objetivo"
import QueEs from "./components/QueEs"
import Seguridad from "./components/Seguridad"
import Conclusion from "./components/Conclusiones"



export default function Home() {
  return (
    <main className="grid grid-cols-1 place-items-center">
      <Inicio />
      <QueEs />
      <Historia />
      <Objetivo />
      <Creacion />
      <Procedimiento />
      <Seguridad />
      <Conclusion />
    </main>
  )
}

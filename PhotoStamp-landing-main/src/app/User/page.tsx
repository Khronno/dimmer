import NavBar from "@/components/NavBar";
const navItems = [
    { label: "Inicio", route: "#" },
    { label: "Pedidos", route: "#pedidos" },
    { label: "Procesos", route: "#procesos" },
    { label: "Envio", route: "#envio" }
];
export default function UserDash(){
    return(
        <>
            <NavBar navItems={navItems}/>
            <h1>User Page</h1>
        </>
    );
}
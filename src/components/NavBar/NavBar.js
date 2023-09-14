import CartWidget from "../CartWidget/CartWidget"
const NavBAR = () =>{
    return(
        <nav>
            <h1>Bienvenidos a CompraGamer</h1>
            <div>
                <button>Monitores</button>
                <button>Procesadores</button>
                <button>Placas de video</button>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default NavBAR
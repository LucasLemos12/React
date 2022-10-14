import ItemListContainer from "./ItemListContainer"

const Menu = ({opciones}) => {
    
    return (
        <ul>
            {
                opciones.map((opt, index) => <ItemListContainer key={index} opcion={opt}/>)
            }       
        </ul>
    )
}

export default Menu


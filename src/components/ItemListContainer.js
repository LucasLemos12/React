import { useEffect, useState } from "react";

const ItemListContainer = ({opcion}) => {
        const [items, setItems] = useState ([])
    
    useEffect(()=>{
        const traerProductos = () =>{
            return new Promise ((res, rej ) =>(
                setTimeout(() => {
                    res(opcion);
                }, 2000)
            ));
        };
        traerProductos()
        .then((res)=>{
            setItems(res)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, []);

    return (

        <li><a href="./">{opcion}</a></li>
    )
}

export default ItemListContainer;

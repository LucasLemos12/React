import React, { component, useState, useEffect } from "react";

const Brand = (props) => {

    let [titleInterno, setTitleInterno] = useState("SportY default")   //=> hooks
    // componentDidMount
    useEffect(() => { 
        // console.log("cambio cada que renderizo")
    })

    // componentDidMount
    useEffect(() => { 
        console.log("1 montaje")
        // console.log("se monto el componente de funcion")

        // componentWillUnMount
        return () => {
            // console.log("se desmonto el componente de funcion")
        }
    }, [])

    // componentDidUpdate para cambios de tittle
    useEffect(() => { 
        console.log("2 el prop titleinterno fue actualizado")
        // console.log("se actualiza el componente de funcion cuando tittle cambia de valor/estado")
    },[titleInterno])

    // componentDidUpdate para cambios de props
    useEffect(() => { 
        console.log("2 el props children fue actualizado")
        setTimeout(() => {
            setTitleInterno("SportY | tienda deportiva");
        }, 2000)
    
    },[props])

    return (
        <h1>{titleInterno || props.children}</h1>
    )
}   

export default Brand
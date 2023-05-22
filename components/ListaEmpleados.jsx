import { useEffect, useState } from "react"

const ListaEmpleados = (props) => {
    const [empleadosData, setEmpleadosData] = useState([]);
    const empleadosUrl = "";
    useEffect(()=>{
        fetch(empleadosUrl)
        .then(response=>response.json())
        .then((response)=>{
            setEmpleadosData(
                response.data.map(r=>
                    {
                        status: r.status;
                        nombre: r.nombre;
                        idempleado: r.idempleado;
                    }
                )
            )
        })
    },[])

    return (
    <>
        <h1>Lista de Empleados</h1>
    </>
    )
}

export default ListaEmpleados;
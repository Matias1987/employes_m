/*crear tarea-empleado*/

import { useEffect, useState } from "react";

const AsignarTareaEmpleado = (props) => {

    const [empleadosLoading, setEmpleadosLoading] = useState(true);
    const [tareasLoading, setTareasLoading] = useState(true);
    const [empleadosData, setEmpleadosData] = useState([]);
    const [tareasData, setTareasData] = useState([]);
    const urlEmpleados = ``;
    const urlTareas = ``;
    
    useEffect(()=>{
        
        fetch(urlEmpleados)
        .then(response=>response.json())
        .then((response)=>{
            setEmpleadosData(response.data.map(r=>({key: r.idempleado; label: r.nombre;})))
            setEmpleadosLoading(false);
        });
        
        fetch(urlTareas)
        .then(response=>response.json())
        .then((response)=>{
            setTareasData(response.data.map(r=>({key: r.idtarea; label: r.nombre;})))
            setTareasLoading(false)
        });
    },[])
    
        return (
            <>
                <h1>Asignaci&oacute;n de Tareas</h1>
                <Form>
                    <Form.Item label={"Empleado"} name={"empleado"} required={true}>
                        <Select data={empleadosData} loading={empleadosLoading} />
                    </Form.Item>
                    <Form.Item label={"Tarea"} name={"tarea"} required={true}>
                        <Select data={tareasData} loading={tareasLoading} />
                    </Form.Item>
                    <Form.Item>
                        <Button>Aceptar</Button>
                    </Form.Item>
                </Form>
            </>
        
        )
    
    }
    
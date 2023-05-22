/*asistencia - entrada*/

const MarcarEntrada = (props) => {
	/*EL EMPLEADO ES PASADO COMO PARAMETRO ! */
	const onFinish = (values)=>{
		
		if(typeof props.idempleado === 'undefined'){
			//ERROR!
			console.log("ERROR, empleado not especified")
			
			return;
		}
		
		const _data = {
			dia: values.dia;
			mes: values.mes;
			anio: values.anio;
			idempleado: props.idempleado;
		};
		//save data!
	}
	
	return (<>
		<Form onFinish={onFinish}>
			<Form.Item label={"Dia"} name={"dia"} ><Input /></Form.Item>
			<Form.Item label={"Mes"} name={"mes"} ><Input /></Form.Item>
			<Form.Item label={"Año"} name={"anio"} ><Input /></Form.Item>
			<Form.Item><Button>Marcar Entrada</Button></Form.Item>
		</Form>
	</>)

}
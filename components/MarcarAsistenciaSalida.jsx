/*asistencia - salida*/
const MarcarSalida = (props) => {
	/*EL EMPLEADO ES PASADO COMO PARAMETRO ! */
	const onFinish = (values)=>{
		
		if(typeof props.idempleado === 'undefined'){
			//ERROR!
			console.log("ERROR, empleado not especified")
			
			return;
		}
		
		const _data = {
			comentarios: values.comentarios == null ? "" : values.comentarios;
			idempleado: props.idempleado;
		}
	}
	return(
	<Form onFinish={onFinish}>
		<Form.Item label={"Comentarios"} name={"comentarios"} required={true}>
			<Input />
		</Form.Item>
		<Form.Item><Button>Marcar Salida</Button></Form.Item>
	</Form>
	)
}
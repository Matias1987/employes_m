/**cargar empleado */
const EmpleadoForm = (props) => {
	return (
		<>
			<Form>
				<Form.Item name="nombre" label="Nombre" required={true}>
					<Input />
				</Form.Item>
				<Form.Item name="dni" label="DNI" required={true}>
					<Input />
				</Form.Item>
				<Form.Item>
					<Button>Guardar</Button>
				</Form.Item>
			</Form>
		</>
	)
	
}

export default EmpleadoForm;
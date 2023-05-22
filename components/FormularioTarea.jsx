/*cargar tarea*/

const TareaForm = (props) => {
	return (
		<>
			<Form>
				<Form.Item name="nombre" label="Nombre" required={true}>
					<Input />
				</Form.Item>
				<Form.Item name="comentarios" label="Comentarios" required={true}>
					<Input />
				</Form.Item>
				<Form.Item>
					<Button>Guardar</Button>
				</Form.Item>
			</Form>
		</>
	)
}

export default TareaForm;
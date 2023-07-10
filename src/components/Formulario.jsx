import { Form, Row, Col, Button } from 'react-bootstrap'

const Formulario = () => {
    return(
        <Form>
            <Row>
                <Col
                    md={6}
                >
                    <Form.Group
                        className='mb-3'
                    >
                        <Form.Label
                            htmlFor='nombre'
                        >
                            ¿Qué imagen busca?
                        </Form.Label>
                        <Form.Control
                            id='nombre'
                            type='text'
                            placeholder='Ej: Paisaje, Skate, Ciudad, etc...'
                            name='nombre'
                        />
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    )
}

export { Formulario }
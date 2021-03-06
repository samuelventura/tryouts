import React from 'react'
import Form from 'react-bootstrap/Form';

function Test() {
    return (
        <Form>
            <Form.Check
                type="switch"
                id="custom-switch"
                label="Check this switch"
            />
            <Form.Check
                disabled
                type="switch"
                label="disabled switch"
                id="disabled-custom-switch"
            />
        </Form>
    )
}

export default Test

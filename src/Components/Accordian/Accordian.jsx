import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
const Accordian = ({ data }) => {
    return (
        <Accordion defaultActiveKey="0" >
            <Accordion.Item eventKey="0">
                <Accordion.Header>{data.question}</Accordion.Header>
                <Accordion.Body>
                    {data.answer}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

    )
}

export default Accordian
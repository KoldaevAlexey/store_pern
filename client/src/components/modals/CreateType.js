import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CreateType = ({show, onHide}) => {

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <h4>Добавление типа</h4>
                <Form>
                    <Form.Control placeholder={'Введите название типа'}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-success'}>Добавить тип</Button>
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;
import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CreateBrand = ({show, onHide}) => {

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <h4>Добавление брэнда</h4>
                <Form>
                    <Form.Control placeholder={'Введите название брэнда'}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-success'}>Добавить брэнд</Button>
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;
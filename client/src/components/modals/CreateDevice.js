import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context);
    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const deleteInfo = (number) => {
        setInfo(info.filter((item) => item.number !== number));
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <h4>Добавление девайса</h4>
                <Form className={'d-flex flex-column'}>
                    <div className={'d-flex'}>
                        <Dropdown className={'mx-2 mt-2'}>
                            <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.types.map((type) =>
                                    <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className={'mx-2 mt-2'}>
                            <Dropdown.Toggle>Выберите брэнд</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.brands.map((brand) =>
                                    <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div
                    >
                        <Form.Control
                            className={"mt-3"}
                            placeholder={"введите название устройства"}
                        />
                        <Form.Control
                            className={"mt-3"}
                            placeholder={"введите стоимость устройства"}
                            type={'number'}
                        />
                        <Form.Control
                            className={"mt-3"}
                            type={'file'}
                        />
                    </div>
                    <hr/>
                    <Button
                        variant={'outline-dark'}
                        onClick={() => addInfo()}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map((i) =>
                        <Row
                            className={'mt-4'}
                            key={i.number}
                        >
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    placeholder={'Введите название устройства'}
                                >
                                </Form.Control>
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    placeholder={'Введите описание устройства'}
                                >
                                </Form.Control>
                            </Col>
                            <Col md={4}>
                                <Button
                                    variant={'outline-danger'}
                                    onClick={() => deleteInfo(i.number)}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-success'}>Добавить девайс</Button>
                <Button variant={'outline-danger'} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;
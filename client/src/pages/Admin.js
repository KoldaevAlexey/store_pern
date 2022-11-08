import React, {useState} from "react";
import {Button, Row} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {
    const [typeShow, setTypeShow] = useState(false);
    const [brandShow, setBrandShow] = useState(false);
    const [deviceShow, setDeviceShow] = useState(false);

    return (
        <Row className={'mt-4 d-flex justify-content-center align-items-center flex-column'}>

            <Button
                onClick={() => setTypeShow(true)}
                variant={'outline-dark'}
                className={'mt-4'}
                style={{width: 250}}
            >
                Добавить новый тип
            </Button>

            <Button
                onClick={() => setBrandShow(true)}
                variant={'outline-dark'}
                className={'mt-4'}
                style={{width: 250}}
            >
                Добавить новый брэнд
            </Button>

            <Button
                onClick={() => setDeviceShow(true)}
                variant={'outline-dark'}
                className={'mt-4'}
                style={{width: 250}}
            >
                Добавить новый девайс
            </Button>

            <CreateType show={typeShow} onHide={() => setTypeShow(false)}/>
            <CreateBrand show={brandShow} onHide={() => setBrandShow(false)}/>
            <CreateDevice show={deviceShow} onHide={() => setDeviceShow(false)}/>
        </Row>
    )
};

export default Admin;

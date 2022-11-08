import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import star from "../assets/star.png"
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate();

    return (
        <Col
            style={{cursor: 'pointer'}}
            className={'mx-2'}
            onClick={() => navigate(DEVICE_ROUTE + `/${device.id}`)}>

            <Card style={{width: 150}} className={'mx-1'}>
                <Image width={150} height={150} src={device.img}/>
            </Card>

            <div className={'d-flex justify-content-between mt-1'}>

                <div style={{color: 'grey'}}>Samsung...</div>
                <div className={'d-flex align-items-center'}>
                    <div>{device.rating}</div>
                    <Image height={15} src={star}/>
                </div>

            </div>
            <div>
                {device.name}
            </div>
        </Col>
    );
};

export default DeviceItem;
import React, {useContext} from 'react';
import {Context} from "../index";
import {Col} from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = () => {
    const {device} = useContext(Context)

    return (
        <Col className={'d-flex m-4'}>
            {device.devices.map((device) =>
                <DeviceItem key={device.id} device={device}/>
            )}
        </Col>
    );
};

export default DeviceList;
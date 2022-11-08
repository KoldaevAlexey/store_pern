import React, {useContext} from 'react';
import {Card, Col} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const BrandBar = observer(() => {
    const {device} = useContext(Context);

    return (
        <Col className="d-flex">
            {device.brands.map(({id, name}) =>
                <Card
                    className={'p-3'}
                    style={{cursor: 'pointer'}}
                    key={id}
                    onClick={() => device.setActiveBrand(id)}
                    border={device.activeBrand === id ? "danger" : "light"}
                >
                    {name}
                </Card>
            )}
        </Col>
    );
})

export default BrandBar;
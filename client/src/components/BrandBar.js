import React, {useContext} from 'react';
import {Card, Row} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const BrandBar = observer(() => {
    const {device} = useContext(Context);

    return (
        <Row className={"d-flex justify-content-between mt-2"}>
            {device.brands.map(({id, name}) =>
                <Card
                    className={'p-3'}
                    style={{cursor: 'pointer'}}
                    key={id}
                    onClick={() => device.setActiveBrand(id)}
                    border={device.activeBrand === id ? "danger" : "light"}
                >{name}</Card>
            )}
        </Row>
    );
})

export default BrandBar;
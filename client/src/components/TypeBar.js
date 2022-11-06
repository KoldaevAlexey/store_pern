import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const TypeBar = observer(() => {
   const {device} = useContext(Context);

    return (
        <ListGroup className={'mt-4'}>
            {device.types.map(({id, name}) =>
                <ListGroup.Item
                    style={{cursor: "pointer"}}
                    active={device.activeType === id}
                    key={id}
                    onClick={() => device.setActiveType(id)}
                >{name}</ListGroup.Item>
            )}
        </ListGroup>
    );
})

export default TypeBar;

import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const NavigationBar = observer(() => {
    const {user} = useContext(Context);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="ml-auto">
                    {user.isAuth ? <><Button variant={'outline-light'}>Админ панель</Button>
                              <Button variant={'outline-light'} className={'mx-2'}>Выйти</Button></>
                    :
                        <Button variant={'outline-light'}>Авторизация</Button>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
});

export default NavigationBar;
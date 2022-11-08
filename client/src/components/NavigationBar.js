import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";

const NavigationBar = observer(() => {
    const {user} = useContext(Context);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to={SHOP_ROUTE}>
                    <Navbar.Brand>Магазин</Navbar.Brand>
                </Link>
                <Nav className="ml-auto">
                    {user.isAuth ?
                        <>
                            <Link to={ADMIN_ROUTE}>
                                <Button
                                    variant={'outline-light'}>Админ панель
                                </Button>
                            </Link>
                            <Link to={LOGIN_ROUTE}>
                                <Button
                                    variant={'outline-light'} className={'mx-2'}>Выйти
                                </Button>
                            </Link>
                        </>

                        :
                        <Button
                            variant={'outline-light'}>Авторизация
                        </Button>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
});

export default NavigationBar;
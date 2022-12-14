import React, {useContext} from "react";
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <Container
            className={'d-flex justify-content-center align-items-center'}
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className={"p-5"}>
                <h2 className={"m-auto"} >{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <Form className={"d-flex flex-column"}>
                        <Form.Control
                            className={"mt-3"}
                            placeholder={"Введите ваш email..."}
                        />
                        <Form.Control
                            className={"mt-3"}
                            placeholder={"Введите ваш пароль..."}
                        />
                    <Row className={"d-flex justify-content-between mt-3 pl-3 pr-3"} >
                        {isLogin ?
                            <div>
                                Нет аккаунта? <Link to={REGISTRATION_ROUTE}>Зарегистрируйтесь</Link>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <Link to={LOGIN_ROUTE}>Войдите</Link>
                            </div>
                        }
                        <Button variant={'outline-success'} className={'mt-4'}>
                            {isLogin ? 'Войти' : "Регистрация"}
                        </Button>
                    </Row>
                </Form>
            </Card>

        </Container>
    )
};

export default Auth;

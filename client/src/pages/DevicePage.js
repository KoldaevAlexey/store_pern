import React from "react";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import star from "../assets/bigStar.png"

const DevicePage = () => {
    const device = {
        id: 1,
        name: 'Iphone 13',
        price: 60000,
        rating: 5,
        img: 'https://my-apple-store.ru/wa-data/public/shop/products/78/17/11778/images/17254/17254.970.jpg'
    }
    const descr = [
        {id: 1, title: 'RAM', description: '5gb'},
        {id: 2, title: 'Камера', description: '12mp'},
        {id: 3, title: 'Процессор', description: 'Ryzen'},
        {id: 4, title: 'Кол-во ядер', description: '2'},
        {id: 5, title: 'Аккумулятор', description: '5000mAh'},
    ]


    return <Container>
        <Row>
            <Col md={4}>
                <Image src={device.img} width={300} height={300}/>
            </Col>
            <Col md={4}>
                <Row className="d-flex flex-column align-items-center">
                    <h2 className={'text-center'}>{device.name}</h2>
                    <div
                        className="d-flex align-items-center justify-content-center"
                        style={{
                            background: `url(${star}) no-repeat center center`,
                            width: 240,
                            height: 240,
                            backgroundSize: "cover",
                            fontSize: 64
                        }}
                    >
                        {device.rating}
                    </div>
                </Row>
            </Col>
            <Col md={4}>
                <Card className={'d-flex flex-column justify-content-around align-items-center'}
                      style={{height: 300, width: 300}}>
                    <h3 style={{marginBottom: 120}}>
                        {device.price}
                    </h3>
                    <Button style={{width: "80%"}} variant={'warning'}>
                        Добавить в корзину
                    </Button>
                </Card>
            </Col>
        </Row>
        <Col className={'mt-4'} md={12}>
            <h2>Характеристики</h2>
            {descr.map((info, idx) =>
                <Row style={{fontSize: 18, background: idx % 2 ? 'transparent' : 'lightgrey', padding: 5}}
                     key={info.id}>{info.title} : {info.description}</Row>
            )}
        </Col>
    </Container>;
};

export default DevicePage;

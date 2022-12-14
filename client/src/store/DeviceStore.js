import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Смартфоны"},
            {id: 3, name: "Ноутбуки"},
            {id: 4, name: "Телевизоры"}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Asus'},
        ]
        this._devices = [
            {
                id: 1,
                name: 'Iphone 13',
                price: 60000,
                rating: 5,
                img: 'https://my-apple-store.ru/wa-data/public/shop/products/78/17/11778/images/17254/17254.970.jpg'
            },
            {
                id: 2,
                name: 'Iphone 14',
                price: 65000,
                rating: 5,
                img: 'https://my-apple-store.ru/wa-data/public/shop/products/78/17/11778/images/17254/17254.970.jpg'
            },
            {
                id: 3,
                name: 'Iphone 15',
                price: 66000,
                rating: 5,
                img: 'https://my-apple-store.ru/wa-data/public/shop/products/78/17/11778/images/17254/17254.970.jpg'
            },
            {
                id: 4,
                name: 'Iphone 16',
                price: 67000,
                rating: 5,
                img: 'https://my-apple-store.ru/wa-data/public/shop/products/78/17/11778/images/17254/17254.970.jpg'
            },
            {
                id: 5,
                name: 'Iphone 17',
                price: 68000,
                rating: 5,
                img: 'https://my-apple-store.ru/wa-data/public/shop/products/78/17/11778/images/17254/17254.970.jpg'
            },
        ]

        this._activeType = 1;
        this._activeBrand = 1;
        makeAutoObservable(this)
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get activeType() {
        return this._activeType;
    }

    get activeBrand() {
        return this._activeBrand;
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setActiveType(typeId) {
        this._activeType = typeId;
    }

    setActiveBrand(brandId) {
        this._activeBrand = brandId;
    }
}
import React, { Component } from "react";
import Cart from '../Cart/index.js'
import {Col, Row} from "react-bootstrap"
import styles from './style.module.scss'
import ProductsList from "../ProductList";
import ProductDesc from "../ProductDesc";


class PanelScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            desId: false,
            product: null,
            products: [],
        }
    };
    componentDidMount() {
        const products = localStorage.getItem('products');
        if(products!==null && products!== undefined) {
            this.setState({products: JSON.parse(products)}, () => {
                console.log(JSON.parse(products));
            });
        }
    }
    saveStateToLocalStorage = () => {
        localStorage.setItem('products', JSON.stringify(this.state.products));
    };
    clearLocalStorage = () => {
        localStorage.clear();
    };
    onAddToCart = (product) => {
        this.setState({products: [...this.state.products, product]}, () => {
            this.saveStateToLocalStorage();
        });
    };
    onClearCart = () => {
        const newProduct = this.state.product;
        if(newProduct !== null){
            newProduct.added = false;
        }
        this.setState({products: [], product: newProduct}, () => {
            this.clearLocalStorage();
        });
    };
    onCloseDes = (boolean) => {
        this.setState({desId: boolean});
    };
    checkIfInCart = (product, productsInCart) => {
        for(let i = 0; i < productsInCart.length; i++){
            if(product.name === productsInCart[i].name){
                return true;
            }
        }
        return false;
    };
    onDesClick = (boolean, product) => {
        if(!this.state.product) {
            this.setState({desId: boolean, product: product})
        } else {
            if (this.checkIfInCart(product, this.state.products)) {
                product.added = true;
                this.setState({desId: boolean, product: product})
            }
            else{

                this.setState({desId: boolean, product: product})
            }
        }
    };
    renderProducts = () => {
        if(this.state.desId === false){
            return (
                <Col xs={9} sm={6} md={8} lg={9} className={styles.colInRow}>
                    <ProductsList
                        onDesClick = {this.onDesClick}
                    />
                </Col>
            )
        }
        else {
            return (
                <Col xs={10} sm={7} md={8} lg={9} className={styles.fluidCol}>
                    <ProductDesc
                        onCloseDes = {this.onCloseDes}
                        onAddToCart = {this.onAddToCart}
                        product = {this.state.product}
                        products = {this.state.products}
                    />
                </Col>
            )
        }
    };
    render () {
        return (
            <div className={styles.container}>
                <Row className={"justify-content-md-center"}>
                    <Col xs={10} sm={5} md={4} lg={3} className={styles.colInRow}>
                        <Cart
                            products = {this.state.products}
                            onClearCart = {this.onClearCart}
                        />
                    </Col>
                    {this.renderProducts()}
                </Row>
            </div>
        );
    }
}

export default PanelScreen;
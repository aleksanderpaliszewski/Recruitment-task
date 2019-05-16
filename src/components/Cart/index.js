import React, {Component} from 'react';
import styles from './style.module.scss'
import CartItem from "../CartItem";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import contactPng from "../../assets/icons/contact.png";
import cartPng from "../../assets/icons/cart.png";
import PropTypes from 'prop-types';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: props.products
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({products: nextProps.products});
    }
    countSizeOfCart = () => {
        if(this.state.products !== null && this.state.products !== []){
            const cartSize = this.state.products.length;
            if (cartSize > 0){ return ( "("+cartSize+")"); }
            else{ return (""); }
        }
    };
    clearCart = () => {
        this.props.onClearCart();
    };
    takeValFromStr = (products, productsLength) =>{
        let sumDollar = 0;
        let sumPound = 0;
        let productPriceDollar = "";
        let productPricePound = "";
        for (let i = 0; i < productsLength; i++) {
            productPriceDollar =  products[i].price.trim().split("/")[0];
            productPriceDollar = productPriceDollar.replace(/\D/g,'');
            productPricePound =  products[i].price.trim().split("/")[1];
            productPricePound = productPricePound.replace(/\D/g,'');
            sumDollar +=  parseInt(productPriceDollar, 10);
            sumPound +=  parseInt(productPricePound, 10);
        }
        return [sumDollar, sumPound]
    };
    countValueOfCart = () => {
        const products = this.state.products;
        if(this.state.products !== null && this.state.products !== []) {
            const productsLength = products.length;
            if (productsLength > 0) {
                const sum = this.takeValFromStr(products, productsLength);
                return ("Total = " + sum[0] + "$ / " + sum[1] + "£");
            } else {
                return ("");
            }
        }
    };
    renderCart = () => {
        if(this.state.products !== null && this.state.products !== []) {
            const products = this.state.products;
            if (products.length > 0) {
                return products.map(({name, price, imgUrl, size}) => (
                    <CartItem
                        key={name}
                        name={name}
                        imgUrl={imgUrl}
                        price={price}
                        size={size}
                    />
                ));
            } else {
                return (
                    <div className={styles.cartBox}>
                        <span>Cart is empty</span>
                    </div>
                )
            }
        }
    };
    renderTotalButton = () => {
        if(this.state.products !== null && this.state.products !== []) {

            const products = this.state.products;

            if (products.length > 0) {
                return <Button className={styles.totalButton} onClick={this.clearCart}>Clear</Button>
            }
        }
    };
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.cart}>
                    <Row>
                        <img src={contactPng} alt="ContactLogo" className={styles.contactLogo}/>
                        <h6><strong>Contact</strong></h6>
                    </Row>
                    <p className={styles.contactText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris quis nunc eros. Maecenas vehicula nunc sed mi
                        condimentum, eu iaculis libero sodales.
                    </p>
                    <Row>
                        <img src={cartPng} alt="CartLogo" className={styles.contactLogo}/>
                        <h6><strong>Cart {this.countSizeOfCart()}</strong></h6>
                    </Row>
                    <div className={styles.cartBox2}>
                        {this.renderCart()}
                    </div>
                    <h6 className={styles.total}><strong>{this.countValueOfCart()}</strong></h6>
                    {this.renderTotalButton()}
                </div>
            </div>
        );
    }
}

Cart.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object)
};

export default Cart;
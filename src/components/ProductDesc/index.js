import React, { Component } from "react";
import {Col, Row, Button} from "react-bootstrap"
import styles from './style.module.scss'
import { MDBCloseIcon } from "mdbreact"
import PropTypes from "prop-types";


class ProductDesc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.product.sizeArray[0]
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.renderAddToCart()
    }
    handleClick = () => {
        this.props.onCloseDes(false)
    };
    handleAddToCart = () => {
        this.props.product.added = true;
        this.props.product.size = this.state.value;
        this.props.onAddToCart(this.props.product)
    };
    handleChange(event) {
        this.setState({value: event.target.value});
    };
    renderSizes = () => {
        const sizes = this.props.product.sizeArray;
        return sizes.map((size) => (
            <option value={size} key={Math.floor(Math.random()*1000)}>{size}</option>
        ));
    };
    checkIfAddedBefore = () => {
        if(this.props.products !== undefined && this.props.products !== []) {
            const products = this.props.products;
            const product = this.props.product;
            for (let i = 0; i < products.length; i++) {
                if (products[i].name === product.name && products[i].added) {
                    return true;
                }
            }
        }
        return false;
    };
    renderAddToCart = () => {
        const addedBefore = this.checkIfAddedBefore();
        if(!this.props.product.added && !addedBefore){
            return <Button className={styles.addButton} onClick={this.handleAddToCart}>Add to cart</Button>
        }
        else{
            return <Button className={styles.addedButton} disabled >Added</Button>
        }
    };
    render () {
        return (
            <Row className={styles.container}>
                <Col xs={12} sm={12} md={12} lg={7} xl={7} className={styles.fluidImg}>
                    <img className={styles.image} src={this.props.product.imgUrl}  alt={'product'}/>
                </Col>
                <Col xs={12} sm={12} md={12} lg={5} xl={5} >
                    <MDBCloseIcon className={styles.closeButton} onClick={this.handleClick}/>
                    <div className={styles.product}>
                        <h5><strong>{this.props.product.name}</strong></h5>
                        <h6><strong>Category: {this.props.product.category}</strong></h6>
                        <strong>Size: </strong>
                        <select className={styles.sizeSelect} value={this.state.value}  onChange={this.handleChange}>
                            {this.renderSizes()}
                        </select>
                        {this.renderAddToCart()}
                    </div>
                </Col>
            </Row>
        );
    }
}

ProductDesc.propTypes = {
    product: PropTypes.object,
    products: PropTypes.arrayOf(PropTypes.object)
};

export default ProductDesc;
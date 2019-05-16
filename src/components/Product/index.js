import React, {Component} from 'react';
import styles from './style.module.scss'
import {Image} from 'react-bootstrap'
import PropTypes from 'prop-types';
import Button from "react-bootstrap/Button";

class Product extends Component {
    handleClick = () => {
        const { name, price, imgUrl, url, category, sizeArray } = this.props;
        const product = {
            name: name,
            price: price,
            imgUrl: imgUrl,
            url: url,
            category: category,
            sizeArray: sizeArray,
            size: null,
            added: false
        };
        this.props.onDesClick(true, product)
    };
    render() {
        return (
            <div className={styles.container}>
                <Image className={styles.image} src={this.props.imgUrl} fluid/>
                <div className={styles.product}>
                    <h6><strong>{this.props.name}</strong></h6>
                    <p>Price: {this.props.price}</p>
                </div>
                <div className={styles.description} onClick={this.handleClick}><Button>Description</Button></div>
            </div>
        );
    }
}

Product.propTypes = {
    id: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    sizeArray: PropTypes.arrayOf(PropTypes.string)
};

export default Product;


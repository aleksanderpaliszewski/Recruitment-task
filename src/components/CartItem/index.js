import React, {Component} from 'react';
import styles from './style.module.scss'
import PropTypes from 'prop-types';

class CartItem extends Component {
    render() {
        return (
            <p className={styles.cartItem}>
                <span className={styles.price}>{this.props.price.trim()}</span>
                <span className={styles.size}>{this.props.size}</span>
                <span>{this.props.name.trim()}</span>

            </p>
        );
    }
}

CartItem.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
};

export default CartItem;


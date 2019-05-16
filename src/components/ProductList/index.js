import React, { Component } from "react";
import {Col, Row} from "react-bootstrap"
import Product from "../Product";
import { css } from '@emotion/core';
import styles from './style.module.scss'
import { ClipLoader } from 'react-spinners';
import axios from "axios";
import PropTypes from "prop-types";

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 8,
            loading: true,
            products: []
        };
    }
    componentDidMount() {
        // Dodałem osblugę błędu w razie nie byłoby internetu :)
        axios.get("https://safe-beach-33580.herokuapp.com/clothes")
            .then(res => this.setState({ products: res.data.slice(0, 8) }))
            .catch(error => {
                console.log(error);
                let data = require('../../products/products.json');
                data = data.slice(0, 8);
                this.setState({
                    products: data
                }, () => {
                    this.setState({loading: false});
                });
            })
            .then(() => this.setState({ loading: false }))
    }
    renderProducts = () => {
        const products = this.state.products;
        return products.map(({ name, url, price, category, sizeArray }) => (
            <Col xs={8} sm={8} md={5} lg={4} xl={3} className={styles.productCol}  key={name}>
                <Product
                    id={name}
                    imgUrl={url}
                    name={name}
                    price={price}
                    category={category}
                    sizeArray={sizeArray}
                    onDesClick={this.props.onDesClick}
                >
                </Product>
            </Col>
        ));
    };
    render() {
        if(this.state.loading){
            return (
                <div className={styles.loading}>
                    <ClipLoader
                        css={override}
                        sizeUnit={"px"}
                        size={50}
                        color={'#123abc'}
                        loading={this.state.loading}
                    />
                </div>
            )
        }
        return <Row>{this.renderProducts()}</Row>
    }
}

ProductsList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.Object)
};

export default ProductsList;

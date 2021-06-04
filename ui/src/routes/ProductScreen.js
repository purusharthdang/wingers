import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';

export default function ProductScreen(props){
const [qty, setQty] =useState(1);
const dispatch = useDispatch();
const productId = props.match.params.id;
const productDetail = useSelector( (state) => state.productDetail);
const {loading, error, product} = productDetail;

useEffect(()=> {
    dispatch(detailProduct(productId));
}, [dispatch, productId]);  

const addToCart = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
}

    return(
        <div>
        {
        loading? (<LoadingBox></LoadingBox>)
        :error?(<MessageBox>{error}</MessageBox>)
        : (
       <div className="row center">
           <div>
            <Link to="/">Back to Home</Link>
            <div className="row top">
            <div className="col-2">
                <img className="large" src={product.image} alt={product.name}></img>
            </div>
                <div className="col1">
                <ul>
                    <li>
                        <h1>
                            {product.name}
                        </h1>
                        <h2>
                            <Rating
                                rating={product.rating}
                                numReviews={product.numReviews}>
                            </Rating>
                        </h2>
                    </li>
                    <li>
                        Price : Rs {product.price}
                    </li>
                </ul>
                </div>
                <div className="col1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div> Rs {product.price} </div>
                                </div>
                            </li>
                            <li>
                            <div className="row">
                                    <div>Status</div>
                                    <div> 
                                    {product.countInStock > 0
                                    ? <span className="success"> In Stock</span>
                                    :<span className="error">   Unavailable</span>} 
                                    </div>
                                </div>
                                </li>
                                {
                                product.countInStock > 0 && (
                                <>
                                <div className= 'row'> Qty
                                    <select value={qty} onChange = {e => setQty(e.target.value)}>
                                    {
                                        [...Array(product.countInStock).keys()].map(
                                            (x) =>
                                            (
                                                <option key={x+1} value= {x+1}> {x+1} </option>
                                            )
                                        )
                                    },
                                    </select>
                                </div>

                                <li>
                                    <button onClick={addToCart} className="primary block">Add to cart</button>
                                </li>
                                </>
                                    )
                                }
                                
                        </ul> 
                    </div>
                </div>
            </div>
        </div>
       </div>
    )}
    </div>
    )}
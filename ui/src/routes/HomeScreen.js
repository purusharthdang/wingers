import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../components/Product';
import { listProduct } from '../actions/productActions';
import { useEffect } from 'react';
export default function HomeScreen(){
    
    const dispatch = useDispatch();
    const productList = useSelector((state)=> state.productList);
    const {loading, error, product} = productList;

    useEffect(()=>{
        dispatch(listProduct())
    },[dispatch]);
    return (
        <div>
             {
             loading? (<LoadingBox></LoadingBox>)
             :error?(<MessageBox>{error}</MessageBox>)
             : 
            <div className="row center">
         {
             product.map((product) => (
             <Product key={product._id} product={product}> </Product>
             ))
         }
            </div>
        }
     </div>
    )
}

import { CardData } from '../CardData';
import { addToCart } from '../redux/App/features/cartSlice';
import { useDispatch } from 'react-redux';




function Home() {

    const productsList = CardData;
    if (!productsList) {
        return (
            <h1>No poducts in cartSlice</h1>
        )
    }

    return (

        <div className="product-list">
            {productsList.map((pd) => <Products products={pd} />

            )}
        </div>
    );
}
function Products({ products }) {



    const dispatch = useDispatch();
    const send = (e) => {
        dispatch(addToCart(e))
    }

    return (
        <div className="product-container">
            <img src={products.poster} alt="product-name"></img>
            <div className="product-spec">
                <h6 className="product-name">{products.name}-{products.id}</h6>
                <p> ⭐{products.rating}</p>
            </div>
            <div className="product-cmst">
                <h6 className="product-company">Company-{products.company}</h6>
                <h6 className="product-stock"> Stock-{products.stock}</h6>
            </div>

            <p className="product-summary">{products.summary}</p>
            <div className="product-spec">
                <h6 className="product-price"> {products.price}</h6>

                <button onClick={() => { send(products); console.log(products) }}>Add To Cart</button>

            </div>
        </div>
    );
}
export default Home;
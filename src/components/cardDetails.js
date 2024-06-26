import { useNavigate } from "react-router-dom";
import './cardDetails.css'


const CardDetails = ({ selectedItem, price, setPrice, productCount, setProductCount }) => {
    
    const navigate = useNavigate();
    const handleAddToCart = (selectedItem) => {

        const totalAmount = parseFloat(price) + parseFloat(selectedItem.price);
        setPrice(totalAmount.toFixed(0));
        setProductCount((prevCount) => prevCount + 1);
    };

    const backBtn = () => {
        navigate('/products');
    }

  

    return (
        <div className="card-container">
            <nav className="navbar">

                <h2>Create your Shopping List now !</h2>
                <div className="cart-box ">
                    <div className="cart-img">
                        <img src={require("../assets/images/shoppingCart.png")} alt="" className="cart-icon" />
                    </div>
                    <p className="cart-count" style={{}}>{productCount}</p>
                    <p className="cart-amount">=  <span>&#8377;</span>{price}</p>
                </div>
            </nav>
            <div className="backBtn" onClick={() => backBtn()}>

                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-square-fill" viewBox="0 0 16 16" >
                    <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1" />
                </svg>
            </div>
            <div className="card mb-3  w-75 h-75 product-detail"
            // style={{ maxWidth: '540px' }}
            >
                <div className="row g-0 d-flex p-2">
                    <div className="col-md-4 d-flex p-2">
                        <img src={selectedItem?.images[0]} className="img-fluid rounded" alt="..." />
                    </div>
                    <div className="col-md-8 d-flex p-2">
                        <div className="card-body">
                            <p className="card-text brand">{selectedItem?.brand} <span className="badge text-bg-secondary badge-rating">{selectedItem?.rating}</span></p>
                            <h4 className="card-title">{selectedItem?.title}</h4>
                            <p className="card-text">{selectedItem?.description}</p>
                            <p className="card-text">Special price</p>
                            <p className="card-text card-price">&#8377;{selectedItem?.price} <span className="card-text card-discount">{selectedItem?.discountPercentage}% off </span></p>
                            <p className="card-text"><small className="text-body-secondary">Cash on Delivery available</small></p>
                            <button className="card-btn " onClick={() => { handleAddToCart(selectedItem) }}>Add to cart</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardDetails;
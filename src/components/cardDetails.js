import { useNavigate } from "react-router-dom";



const CardDetails = ({ selectedItem, price, setPrice, setProductCount }) => {

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
        <>
            <div onClick={() => backBtn()}>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-square-fill" viewBox="0 0 16 16" >
                    <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1" />
                </svg>
            </div>
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={selectedItem?.images[0]} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">{selectedItem?.brand}</p>
                            <p className="card-text">{selectedItem?.rating}</p>
                            <h5 className="card-title">{selectedItem?.title}</h5>
                            <p className="card-text">{selectedItem?.description}</p>
                            <p className="card-text">{selectedItem?.price}</p>
                            <p className="card-text">{selectedItem?.discountPercentage}</p>
                            <p className="card-text"><small className="text-body-secondary">Cash on Delivery available</small></p>
                        </div>
                    </div>
                </div>

                <button onClick={() => { handleAddToCart(selectedItem) }}>Add to cart</button>
            </div>
        </>
    )
}

export default CardDetails;
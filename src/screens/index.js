import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./login";
import { useState } from "react";
import LandingPage from "./landingPage";
import ProductPage from "./productPage";
import CardDetails from "../components/cardDetails";



const Screen = () => {
    // const [token, setToken] = useState()
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [price, setPrice] = useState(0)
    const [productCount, setProductCount] = useState(0)

    return (
        <Routes>

            {/* {token ? */}
            <Route path='/products' element={<ProductPage
                data={data}
                setData={setData}
                setSelectedItem={setSelectedItem}
                price={price}
                setPrice={setPrice}
                productCount={productCount}
                setProductCount={setProductCount} />} />
            {/* : null} */}

            <Route path='/products/detail' element={<CardDetails
                setData={setData}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                price={price}
                setPrice={setPrice}
                productCount={productCount}
                setProductCount={setProductCount} />} />
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<Login 
            // setToken={setToken} 
            />} />
            <Route path="*" element={<Navigate to="/products" />} />
        </Routes>
    )
}

export default Screen;
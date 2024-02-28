
import { useNavigate } from 'react-router-dom';
import './landingPage.css';

const LandingPage = ({ setBtnName }) => {
  const navigate = useNavigate()

  const handleShopping = () => {
    navigate("/products")
  }

  return (
    <>
    <header className="heading">
                <h1>BudgetCart.com</h1>
            </header>
      <div id="carouselExampleSlidesOnly" className="carousel slide " data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require("../assets/images/fashion1.jpeg")} className=" carousel-img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={require("../assets/images/fashion2.jpg")} className=" carousel-img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={require("../assets/images/fashion3.jpg")} className="carousel-img" alt="..." />
          </div>
        </div>
      </div>

      <button className='btn-shop' onClick={() => handleShopping()}>Shop Now</button>
    </>
  )
}

export default LandingPage;
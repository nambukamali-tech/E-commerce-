import './App.css';
import dressImg from './graphic-woman-dress-trendy-design-white-background.jpg';
import dressImg2 from './fashion-woman-with-clothes.jpg';

function App() {
  return (
    <div>

      <div className="navbar">
        <p className="logo">PURCHASERY</p>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Womens</a></li>
          <li><a href="#">Mens</a></li>
          <li><a href="#">Kids</a></li>
        </ul>
      </div>

      
      <div className="hero">
        <h2>Welcome to Purchasery!!</h2>
        <p>Trendy • Stylish • Premium Fashion</p>
      </div>

      
      <div className="product-section">

        <div className="card">
          <img className="product-img" src={dressImg} alt="Dress" />
          <h3>Floral Summer Dress</h3>
          <p>Dress Code: 121</p>
          <p>Category: Women</p>
          <p>Size: Medium</p>
          <button className="btn">PURCHASE</button>
        </div>

        <div className="card">
          <img className="product-img" src={dressImg2} alt="Dress2" />
          <h3>Trendy Fashion Outfit</h3>
          <p>Dress Code: 145</p>
          <p>Category: Women</p>
          <p>Size: Large</p>
          <button className="btn">PURCHASE</button>
        </div>

      </div>

      <div className="footer">
        <p>© All Rights Reserved | Nambu Kamali</p>
      </div>

    </div>
  );
}

export default App;

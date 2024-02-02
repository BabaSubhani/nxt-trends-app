import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-items-container">
    <div className="nav-logo-and-logout-container">
      <div className="logo-img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
          alt="website logo"
          className="sm-logo-img"
        />
      </div>
      <div className="sm-logout-img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="sm-logout-img"
        />

        <ul className="lg-nav-link-container">
          <li className="nav-item">
            <Link to="/" className="link-item">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="link-item">
              products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="link-item">
              cart
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="link-item">
              <button type="button">Logout</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="sm-nav-links-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png "
        alt="nav home"
        className="icon-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="icon-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
        alt="nav cart"
        className="icon-img"
      />
    </div>
  </nav>
)

export default Header

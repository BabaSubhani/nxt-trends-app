import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="nxt-app-container">
        <div className="nxt-trends-home-container">
          <Header />
          <div className="clothes-top-container">
            <div className="lg-clothes-text-container">
              <h1 className="clothes-heading">Clothes That Get YOU Noticed</h1>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                alt="clothes that get you noticed"
                className="clothes-noticed-img"
              />
              <p className="clothes-noticed-description">
                Fashion is part of the daily air and it does not quite help that
                it changes all the time. Clothes have always been a marker of
                the era and we are in a revolution. Your fashion makes you been
                seen and heard that way you are. So, celebrate the seasons new
                and exciting fashion in your own way.
              </p>
              <button type="button" className="shop-now-btn">
                Shop Now
              </button>
            </div>
            <div className="lg-clothes-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                alt="clothes that get you noticed"
                className="lg-clothes-noticed-img"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home

import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    nameError: false,
    passwordError: false,
    displayError: false,
  }

  handleUsernameChange = event => {
    this.setState({username: event.target.value})
    if (event.target.value.trim() !== '') {
      this.setState({nameError: false})
    } else {
      this.setState({nameError: true})
    }
  }

  handlePasswordChange = event => {
    this.setState({password: event.target.value})
    if (event.target.value.trim() !== '') {
      this.setState({passwordError: false})
    } else {
      this.setState({passwordError: true})
    }
  }

  handleSubmit = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const details = {username, password}

    if (username.trim() === '' && password.trim() === '') {
      this.setState({
        nameError: true,
        passwordError: true,
      })
    } else if (username.trim() === '') {
      this.setState({
        nameError: true,
      })
    } else if (password.trim() === '') {
      this.setState({
        passwordError: true,
      })
    } else if (username.trim() !== '' && password.trim() !== '') {
      const api = 'https://apis.ccbp.in/login'
      const options = {
        method: 'post',
        body: JSON.stringify(details),
      }

      try {
        const response = await fetch(api, options)
        if (response.ok) {
          this.onSubmitSuccess()
        } else {
          this.setState({displayError: true})
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {
      username,
      password,
      nameError,
      passwordError,
      displayError,
    } = this.state

    return (
      <div className="login-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
          alt="website logo"
          className="login-trends-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-website-img"
        />

        <form onSubmit={this.handleSubmit} className="form-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
            alt="website logo"
            className="lg-login-trends-logo"
          />
          <div className="form-group">
            <label htmlFor="username" className="user-name">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              className="user-input"
              placeholder="Username"
              onChange={this.handleUsernameChange}
            />
            {nameError && <p className="required-text">*Required</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="user-name">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              className="user-input"
              onChange={this.handlePasswordChange}
            />
            {passwordError && <p className="required-text">*Required</p>}
          </div>

          <button type="submit" className="submit-btn">
            Login
          </button>
          {displayError && (
            <p className="not-found-error">*Username is not found</p>
          )}
        </form>
      </div>
    )
  }
}

export default LoginForm

import React, { Component } from 'react';
import '../styles/App.css';
import {Header} from './Header'
import {Main} from './Main'
import { TOKEN_KEY } from '../constants';
// import {Link} from 'react-router-dom';

class App extends Component {
    state = {
        isLoggedIn : !!localStorage.getItem(TOKEN_KEY)
    }

    handleLogin = (response) => {
        localStorage.setItem(TOKEN_KEY, response);
        this.setState({
            isLoggedIn : true,
        })
    }

    handleLogout = () => {
        localStorage.removeItem(TOKEN_KEY);
        this.setState({ isLoggedIn: false });
    }
  render() {
    return (
      <div className="App">
          <Header isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout}/>
          <Main isLoggedIn={this.state.isLoggedIn} handleLogin={this.handleLogin}/>

          {/*<Link to="/login">LOGIN</Link>*/}
      </div>
    );
  }
}

export default App;

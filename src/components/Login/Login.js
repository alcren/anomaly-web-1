import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import LoginForm from './LoginForm';

class Login extends React.Component {
  logoStyle = {
    width: "128px",
    height: "128px"
  }

  render() {
    return (
      <section className="hero is-success is-fullheight">
        <div className="hero-body">
            <div className="container has-text-centered">
                <div className="column is-4 is-offset-4">
                    <h3 className="title has-text-info">Surveillance Hub</h3>
                    <p className="subtitle has-text-grey is-size-6">Please login to proceed.</p>
                    <div className="box">
                      <figure className="avatar">
                          <img alt="" src={logo} style={this.logoStyle}/>
                      </figure>
                      <LoginForm />
                    </div>
                </div>

                <p className="has-text-grey">
                  <Link to="/signup">Sign Up</Link>
                </p>
            </div>
        </div>
    </section>
    )
  }
}

export default Login;
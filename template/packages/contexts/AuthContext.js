import React, {Component, createContext} from 'react';
import axios from 'axios';

import Storage from 'utils/storage';

const AuthContext = createContext();

const AuthConsumer = AuthContext.Consumer;

class AuthProvider extends Component {
  state = {
    ready: false,
    isAuthenticated: false,
    user: {},
  };

  async componentDidMount() {
    try {
      const token = await Storage.getItem('@HelloWorld:token');
      if (token !== null) {
        this.token(token);
      } else {
        this.logout();
      }
    } catch (e) {
      this.logout();
    }
  }

  register = credentials => this.login(credentials, 'register');

  login = (credentials, endpoint = 'login') => {
    return axios.post(`auth/${endpoint}`, credentials).then(async res => {
      const token = response.headers.authorization;
      await Storage.setItem('@HelloWorld:token', token);
      this.token(token);
    });
  };

  token = async token => {
    this.setState({
      ready: false,
    });
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      let user = await Storage.getItem('@HelloWorld:user');
      if (user === null) {
        const response = await axios.get('auth/user');
        user = response.data.data;
        await Storage.setItem('@HelloWorld:user', JSON.stringify(user));
      } else {
        user = JSON.parse(user);
      }
      await this.setState({
        ready: true,
        isAuthenticated: true,
        user,
      });
    } catch (e) {
      this.logout();
    }
  };

  logout = async () => {
    try {
      await Storage.clear();
      axios.defaults.headers.common.Authorization = null;
      this.setState({
        ready: true,
        isAuthenticated: false,
        user: {},
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          register: this.register,
          login: this.login,
          logout: this.logout,
        }}>
        {this.state.ready ? this.props.children : null}
      </AuthContext.Provider>
    );
  }
}

export {AuthContext, AuthConsumer, AuthProvider};

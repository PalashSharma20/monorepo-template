import React, {Component, createContext} from 'react';

import Storage from 'utils/storage';

import Palette from 'config/palette';

const ThemeContext = createContext();

const ThemeConsumer = ThemeContext.Consumer;

class ThemeProvider extends Component {
  state = {
    theme: 'light',
    ready: false,
  };

  async componentDidMount() {
    try {
      let theme = await Storage.getItem('@HelloWorld:theme');
      if (theme === null) {
        theme = 'light';
      }
      this.setState({theme, ready: true});
    } catch (e) {
      console.log(e);
    }
  }

  toggleTheme = async theme => {
    try {
      await Storage.setItem('@HelloWorld:theme', theme);
      this.setState({theme});
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          palette: {...Palette.common, ...Palette[this.state.theme]},
          toggleTheme: this.toggleTheme,
        }}>
        {this.state.ready ? this.props.children : null}
      </ThemeContext.Provider>
    );
  }
}

export {ThemeContext, ThemeConsumer, ThemeProvider};

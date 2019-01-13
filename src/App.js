import React, { Component } from 'react';
import i18n from './i18n'

class App extends Component {
  render() {
    const t = i18n.getFixedT()
    return (
        <div className="App">
      {t('home.title')}
      </div>
    );
  }
}

export default App;

import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../modules/header'
import Home from '../modules/Home'
import i18n from '../i18n'
import * as actions from './actions'

class Routes extends React.Component {
  constructor(props) {
    super(props)
    this.t = i18n.getFixedT()
  }

  componentDidMount () {
    i18n.on('languageChanged', (lng) => {
      this.props.changeLanguage(lng)
      document.title = this.t('app.desc')
    })
  }
  render () {
    return (
      <Router>
        <div style={styles.container}>
          <Header></Header>
          <Route exact path='/' component={Home}></Route>
        </div>
      </Router>
    )
  }
}

export default connect(null, actions)(Routes)

const styles = {
  container: {
    width: '100%',
    height: '100%'
  }
}

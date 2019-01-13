import React, { Component } from 'react'
import i18n from '../../i18n'
import { connect } from 'react-redux'
import style from './style.css'

class Header extends Component {
  render() {
    return (
      <nav className={style.navbar}>
        {i18n.getFixedT()('home.title')}
      </nav>
    )
  }
}

export default connect(state => ({
  Language: state.Language
}), null)(Header)

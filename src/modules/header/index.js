import React, { Component } from 'react'
import i18n from '../../i18n'
import { connect } from 'react-redux'
import style from './style/style.module.css'
import logo from './style/logo.png'
import cx from 'classnames'

class Header extends Component {
  render () {
    const active = 'home'
    return (
      <nav className={style.navbar}>
        <a className={style['img-wrapper']} href="/"><img src={logo} alt="logo" className={style.logo} /></a>
        <a className={cx(style.home,{[style.active]: active === 'home'})} href="/"><span>{i18n.getFixedT()('home.title')}</span></a>
        <a className={cx(style.download,{[style.active]: active === 'download'})} href="/"><span>{i18n.getFixedT()('home.download')}</span></a>
        <input className={cx(style.input)} placeholder={i18n.getFixedT()('home.search')} autoComplete="off" type="text"/>
        <button className={cx(style.button)}>{i18n.getFixedT()('home.write')}</button>
        <button className={cx(style.button, style.sing)}>{i18n.getFixedT()('home.sign')}</button>
        <button className={cx(style.button, style.login)}>{i18n.getFixedT()('home.login')}</button>
        <button className={cx(style.button, style.setting)}>{i18n.getFixedT()('home.setting')}</button>
      </nav>
    )
  }
}

export default connect(state => ({
  Language: state.Language
}), null)(Header)

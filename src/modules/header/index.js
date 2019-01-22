import React, { Component } from 'react'
import i18n from '../../i18n'
import { connect } from 'react-redux'
import style from './style/style.module.css'
import logo from './style/logo.png'
import cx from 'classnames'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputFocus: false
    }
  }
  setInputFocus (value) {
    this.setState({
      inputFocus: value
    })
  }
  render () {
    const active = 'home'
    const { tips = [] } = this.props
    return (
      <nav className={style.navbar}>
        <a className={style['img-wrapper']} href="/"><img src={logo} alt="logo" className={style.logo} /></a>
        <a className={cx(style.home, { [style.active]: active === 'home' })} href="/"><span>{i18n.getFixedT()('home.title')}</span></a>
        <a className={cx(style.download, { [style.active]: active === 'download' })} href="/"><span>{i18n.getFixedT()('home.download')}</span></a>
        <div className={cx(style.search)}>
          <input
            className={cx(style.input)}
            onFocus={() => this.setInputFocus(true)}
            onBlur={() => this.setInputFocus(false)}
            placeholder={i18n.getFixedT()('home.search')}
            autoComplete="off"
            type="text" />
          <div className={cx(style['icon-search'], { [style['icon-search-focus']]: this.state.inputFocus })}>
            <i className={cx('iconfont')}>&#xe642;</i>
          </div>
          <div className={cx(style['search-tip'],{[style['search-tip-focus']]: this.state.inputFocus})}>
            <div className={cx(style['tip-content-wrapper'])}>
              <div className={cx(style['tip-header'])}></div>
              <ul className={cx(style.content)}>
                {
                  tips.map(item => {
                    return (
                      <li className={cx(style.tip)}>
                        {item}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
        <button className={cx(style.button, style.write)}>{i18n.getFixedT()('home.write')}
          <i className={cx('iconfont', style['write-icon'])}>&#xe616;</i>
        </button>
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

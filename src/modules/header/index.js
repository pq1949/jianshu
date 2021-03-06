/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import i18n from '../../i18n'
import { connect } from 'react-redux'
import style from './style/style.module.css'
import logo from './style/logo.png'
import cx from 'classnames'
import * as actions from './actions'
import { PAGE_SIZE } from './constant'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputFocus: false,
      trendingTotal: [],
      pageTrending: [],
      currentPage: 0,
      turn: 0,
      top: false
    }
    this.t = i18n.getFixedT()
  }

  componentDidMount () {
    window.addEventListener('scroll', this.displayTop)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.displayTop)
  }

  displayTop = () => {
    let doc = document.body.scrollTop ? document.body : document.documentElement
    if(doc.scrollTop > doc.clientHeight && !this.state.top) {
      this.setState({
        top: true
      })
    } else if(doc.scrollTop < doc.clientHeight && this.state.top) {
      this.setState({
        top: false
      })
    }
  }

  componentWillReceiveProps (nextProps) {
    const { currentPage } = this.state
    const total = [...nextProps.trending]
    this.setState({
      trendingTotal: total,
      pageTrending: total.slice(currentPage, currentPage + PAGE_SIZE),
      currentPage: 0
    })
  }
  setInputFocus (value) {
    const { trendingTotal } = this.state
    !trendingTotal.length && this.props.getTrending(+new Date())
    this.setState({
      inputFocus: value,
      currentPage: 0
    })
  }

  change = () => {
    const { trendingTotal, currentPage, turn } = this.state
    let page = (currentPage + 1) * PAGE_SIZE >= trendingTotal.length ? 0 : currentPage + 1
    this.setState({
      pageTrending: trendingTotal.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE),
      currentPage: page,
      turn: turn + 1
    })
  }
  scrollTop = () => {
    let doc = document.body.scrollTop ? document.body : document.documentElement
    Math.easeout(doc.scrollTop, 0, 4, value => {
      doc.scrollTop = value
    })
  }

  render () {
    const active = 'home'
    const { t, state: { pageTrending, inputFocus, turn, top } } = this
    return (
      <nav className={style.navbar}>
        <a className={style['img-wrapper']} href="/"><img src={logo} alt="logo" className={style.logo} /></a>
        <a className={cx(style.home, { [style.active]: active === 'home' })} href="/"><span>{t('header.title')}</span></a>
        <a className={cx(style.download, { [style.active]: active === 'download' })} href="/"><span>{t('header.download')}</span></a>
        <div className={cx(style.search)}>
          <input
            className={cx(style.input)}
            onFocus={() => this.setInputFocus(true)}
            onBlur={() => this.setInputFocus(false)}
            placeholder={t('header.search')}
            autoComplete="off"
            type="text" />
          <div className={cx(style['icon-search'], { [style['icon-search-focus']]: inputFocus })}>
            <i className={cx('iconfont')}>&#xe642;</i>
          </div>
          <div className={cx(style['search-tip'], { [style['search-tip-focus']]: inputFocus })}>
            <div className={cx(style['tip-content-wrapper'])}>
              <div className={cx(style['tip-header'])}>
                <span className={style.hotSearch}>{t('header.hotSearch')}</span>
                <span className={style.change} onClick={this.change}><i className={cx('iconfont', style.changeIcon)} style={{ transform: `rotate(${turn}turn)` }}>&#xe636;</i>{t('header.change')}</span>
              </div>
              <ul className={cx(style.content)}>
                {
                  pageTrending.map(item => {
                    return (
                      <li key={item} className={cx(style.tip)}>
                        <a href="javascript:void(0)">{item}</a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
        <button className={cx(style.button, style.write)}>{i18n.getFixedT()('header.write')}
          <i className={cx('iconfont', style['write-icon'])}>&#xe616;</i>
        </button>
        <button className={cx(style.button, style.sing)}>{i18n.getFixedT()('header.sign')}</button>
        <button className={cx(style.button, style.login)}>{i18n.getFixedT()('header.login')}</button>
        <button className={cx(style.button, style.setting)}>{i18n.getFixedT()('header.setting')}</button>
        <div className={cx(style.top, { [style['top-display']]: top })} onClick={this.scrollTop}><i className={cx('iconfont', style['top-icon'])}>&#xe60b;</i></div>
      </nav>
    )
  }
}

export default connect(state => ({
  Language: state.Language,
  trending: state.trending
}), actions)(Header)

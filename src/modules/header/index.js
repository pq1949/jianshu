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
      pageTrending:[],
      currentPage: 0,
      turn: 0
    }
    this.t = i18n.getFixedT()
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
  render () {
    const active = 'home'
    const {t, state: {pageTrending, inputFocus, turn}} = this
    return (
      <nav className={style.navbar}>
        <a className={style['img-wrapper']} href="/"><img src={logo} alt="logo" className={style.logo} /></a>
        <a className={cx(style.home, { [style.active]: active === 'home' })} href="/"><span>{t('home.title')}</span></a>
        <a className={cx(style.download, { [style.active]: active === 'download' })} href="/"><span>{t('home.download')}</span></a>
        <div className={cx(style.search)}>
          <input
            className={cx(style.input)}
            onFocus={() => this.setInputFocus(true)}
            onBlur={() => this.setInputFocus(false)}
            placeholder={t('home.search')}
            autoComplete="off"
            type="text" />
          <div className={cx(style['icon-search'], { [style['icon-search-focus']]: inputFocus })}>
            <i className={cx('iconfont')}>&#xe642;</i>
          </div>
          <div className={cx(style['search-tip'], { [style['search-tip-focus']]: inputFocus })}>
            <div className={cx(style['tip-content-wrapper'])}>
              <div className={cx(style['tip-header'])}>
                <span className={style.hotSearch}>{t('home.hotSearch')}</span>
                <span className={style.change} onClick={this.change}><i className={cx('iconfont',style.changeIcon)} style={{transform: `rotate(${turn}turn)`}}>&#xe636;</i>{t('home.change')}</span>
              </div>
              <ul className={cx(style.content)}>
                {
                  pageTrending.map(item => {
                    return (
                      <li key={item} className={cx(style.tip)}>
                        <a href="/#">{item}</a>
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
  Language: state.Language,
  trending: state.trending
}), actions)(Header)

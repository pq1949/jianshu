/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import cx from "classnames"
import style from './style/style.module.css'
import Carousel from '../../components/carousel'
import SplitLine from '../../components/splitLine'
import ArticleItem from '../../components/articleItem'
import i18n from '../../i18n'
import * as actions from './actions'
import a from './style/footer/1.png'
import b from './style/footer/2.png'
import c from './style/footer/3.png'
import board1 from './style/board/1.png'
import board2 from './style/board/2.png'
import board3 from './style/board/3.png'
import board4 from './style/board/4.png'
import board5 from './style/board/5.png'
import qrcode from './style/board/qrcode.png'
import author from './author.json'

class Home extends Component {

  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      board: false,
      turn: 0
    }
    this.t = i18n.getFixedT()
    this.boardsImg = [board1, board2, board3, board4, board5]
    this.author = author
  }

  componentDidMount () {
    this.props.getCarouselInfo()
    this.props.getArticleAbstract()
  }
  more = () => {
    this.setState({
      loading: true
    })
    setTimeout(() => {
      this.props.getArticleAbstract()
      this.setState({
        loading: false
      })
    }, 500)
  }

  change = () => {
    const { turn } = this.state
    this.setState({
      turn: turn + 1
    })
  }

  render () {
    const { props: { carouselInfo = [], abstractInfo = [] }, t } = this
    return (
      <div className={style['home-container']}>
        <div className={style.main}>
          <div className={style['carousel-wrapper']}>
            <Carousel height={270} width="100%" data={carouselInfo} />
          </div>
          <SplitLine />
          <ul>
            {
              abstractInfo.map((item, index) => {
                return (
                  <ArticleItem
                    key={index}
                    {...item}
                  />
                )
              })
            }
          </ul>
          <div className={style['read-more']} onClick={this.more}>
            {
              this.state.loading ? t('home.loading') : t('home.readMore')
            }
          </div>
          <footer className={style.footer}>
            <a href="javascript:void(0)">{t('home.about')}</a><em> . </em>
            <a href="javascript:void(0)">{t('home.contact')}</a><em> . </em>
            <a href="javascript:void(0)">{t('home.join')}</a><em> . </em>
            <a href="javascript:void(0)">{t('home.publish')}</a><em> . </em>
            <a href="javascript:void(0)">{t('home.logo')}</a><em> . </em>
            <a href="javascript:void(0)">{t('home.partner')}</a>
            <div className={style.icp}>
              <span>©2012-2019 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 /</span>
              <img src={a} alt="" />
              <span>沪公网安备31010402002252号 / </span>
              <img src={b} alt="" />
              <span>举报电话：021-34770013 / </span>
              <img src={c} alt="" />
            </div>
          </footer>
        </div>
        <div className={style.side}>
          <div className={style.board}>
            {
              this.boardsImg.map((item, index) => {
                return (
                  <a href="javascript:void(0)" key={index}><img height={50} src={item} alt="" /></a>
                )
              })
            }
          </div>
          <div className={cx(style.download, { [style.notShow]: !this.state.board })} onMouseEnter={() => { this.setState({ board: true }) }} onMouseLeave={() => { this.setState({ board: false }) }}>
            <img height={60} src={qrcode} alt="" />
            <div className={style.info}>
              <div className={style.title}>下载简书手机App <i className="iconfont" style={{ transform: 'rotate(90deg) scale(0.7)' }}>&#xe60b;</i></div>
              <div className={style.desc}>随时随地发现和创作内容</div>
            </div>
            <img className={cx(style.largeImg, { [style.notShowLargeImg]: !this.state.board })} src={qrcode} alt="" />
          </div>
          <div className={style.recommended}>
            <div className={style.title}>
              <span className={style.author}>{t('home.recomTitle')}</span>
              <span className={style.change} onClick={this.change}><i className={cx('iconfont', style.changeIcon)} style={{ transform: `rotate(${this.state.turn}turn)` }}>&#xe636;</i>{t('home.change')}</span>
            </div>
            {
              this.author.map(item => {
                return (
                  <div className={style['auth-item']}>
                    <div className={style.avatar}><img src={item.avatar_source} alt={item.nickname}/></div>
                    <div className={style.desc}>
                      <div className={style.name}>{item.nickname}</div>
                      <div className={style.statistics}>写了{(item.total_wordage / 1000).toFixed(1)}k字 · {(item.total_likes_count/1000).toFixed(1)}k喜欢</div>
                    </div>
                    <div className={style.follow}>+ 关注</div>
                  </div>
                )
              })
            }
            <div className={style['view-all']}>查看全部 ></div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  carouselInfo: state.carouselInfo,
  abstractInfo: state.abstractInfo
}), actions)(Home)

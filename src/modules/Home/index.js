import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from './style/style.module.css'
import Carousel from '../../components/carousel'
import SplitLine from '../../components/splitLine'
import ArticleItem from '../../components/articleItem'
import i18n from '../../i18n'

import * as actions from './actions'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
    this.t = i18n.getFixedT()
  }

  componentDidMount () {
    this.props.getCarouselInfo()
    this.props.getArticleAbstract()
  }
  more = () => {
    this.setState({
      loading: true
    })
    setTimeout(()=>{
      this.props.getArticleAbstract()
      this.setState({
        loading: false
      })
    }, 1000)
  }
  render () {
    const { props: {carouselInfo = [], abstractInfo = []}, t } = this
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
            <a href="/#">{t('home.about')}</a><em> . </em>
            <a href="/#">{t('home.contact')}</a><em> . </em>
            <a href="/#">{t('home.join')}</a><em> . </em>
            <a href="/#">{t('home.publish')}</a><em> . </em>
            <a href="/#">{t('home.logo')}</a><em> . </em>
            <a href="/#">{t('home.partner')}</a>
            <div className={style.icp}>©2012-2019 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 / </div>
          </footer>
        </div>
        <div className={style.side}>aside</div>
      </div>
    )
  }
}

export default connect(state => ({
  carouselInfo: state.carouselInfo,
  abstractInfo: state.abstractInfo
}), actions)(Home)

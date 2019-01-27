import React, { Component } from 'react'
import style from './style/style.module.css'

export default class Carousel extends Component {
    render() {
      const { height, width, data } = this.props
      return (
        <div className={style['carousel-wrapper']} style={{height, width}}>
          {data.length && <img src={data[0].src} alt={data[0].alt}/>}
        </div>
      )
    }
}

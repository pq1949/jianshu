import React from 'react'
import style from './style/style.module.css'
import cx from 'classnames'

export default props => {
  const {title, content, tag, reply, like, imgSrc, imgAlt, href} = props
  return (
    <li className={style['list-container']}>
      <div className={style['content-wrapper']}>
        <a href={href} className={style.title}>{title}</a>
        <div className={style.content}>{content}</div>
        <div className={style.meta}>
          <span className={style.tag}>{tag}</span>
          <span className={style.reply}>
            <i className={cx('iconfont', style['reply-icon'])}>&#xe6d6;</i>
            {reply}
          </span>
          <span className={style.like}>
          <i className={cx('iconfont', style['like-icon'])}>&#xe641;</i>
          {like}
          </span>
        </div>
      </div>
      <div className={style['img-container']}>
          <img src={imgSrc} alt={imgAlt}/>
      </div>
    </li>
  )
}

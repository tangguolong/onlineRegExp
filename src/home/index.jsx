import React from 'react'
import styles from './index.module.scss'
import DragCom from '../component/dragPage'
const HomePage=()=>{
  return (
    <div className={styles.contain}>
      <div className={styles.h}>
        <div className={styles.h_t}>
          <div  className={styles.h_t_title}>
            <div className={styles.h_t_title_d}>在线正则<span>(左右分屏 可滑动)</span></div>
         
          </div>
        </div>
      </div>
      <div className={styles.m}>
        <DragCom/>
      </div>
    </div>
  )
}
export default HomePage
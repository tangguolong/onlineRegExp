import React from 'react'
import styles from './index.module.scss'
import './regexp.svg'
import data from './data'
import { PhotoProvider, PhotoConsumer } from 'react-photo-view';
import 'react-photo-view/dist/index.css';
const RegexpMd = () => {
    return (
        <div className={styles.md}>
            <PhotoProvider>
                <PhotoConsumer  src={data} intro={data}>
                    <img src={data} alt=""  className={styles.mdImage} />
                </PhotoConsumer>
            </PhotoProvider>
        </div>

    )
}
export default RegexpMd
import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { leftMenuData } from './data'
import { Input } from '_antd@4.14.1@antd'
import CopyToClipboard from 'react-copy-to-clipboard'
import cx from 'classnames'
import PreviewCom from '../previewMarkDom/index'
const OnlineRegex = (props) => {
    const [menuD, setMenuD] = useState([])
    const [menuDAll, setMenuDAll] = useState([])
    const [searchMenuD, setSearchMenuD] = useState([])
    const [clickCopyBtn, setClickCopyBtn] = useState({
        label: false,
        index: 0
    })
    const [menuDActiveName, setMenuDActiveName] = useState('身份证')
    const [timer, setTimer] = useState(null)
    const [searchVal, setSearchVal] = useState("")
    const [searchTab, setSearchTab] = useState(1)
    useEffect(() => {
        dealMenuData()
        return () => {
            clearTimeout(timer)
        }
    }, [])
    const dealMenuData = () => {
        let data = leftMenuData
        let dataCopy = []
        data.map((item) => {
            item.list.map((obj, index) => {
                item.list[index]['inputValue'] = ''
                item.list[index]['testLabel'] = ''
            })
        })
        data.map((item, index) => {
            item.list.map(obj => dataCopy.push(obj))
        })
        setMenuDAll(dataCopy)
        setMenuD(data)
    }
    /**
     * 搜索过滤
     */
    const search = (value) => {
        value? setMenuDActiveName(""):setMenuDActiveName("身份证")
        setSearchVal(value)
        setSearchMenuD(menuDAll.filter(item => {
            if (item.name.includes(value)) {
                return item
            }
        }))
        console.log(menuDAll, menuDAll.filter(item => item.name.includes(value)))

    }
    /**
     * 恢复为元数据
     */
    const clearMenuData = () => {
        let data = leftMenuData
        let dataCopy = []
        data.map((item) => {
            item.list.map((obj, index) => {
                item.list[index]['inputValue'] = ''
                item.list[index]['testLabel'] = ''
            })
        })
        data.map((item, index) => {
            item.list.map(obj => dataCopy.push(obj))
        })
        setMenuDAll(dataCopy)
        setMenuD(data)
    }
    const changeTab = (num) => {
        setSearchTab(num)
        clearMenuData()
    }
    return (
        <div className={styles.online}>
            <div className={styles.search_btn}>
                <div className={cx(styles.search_btn_tapL, searchTab === 1 ? styles.search_btn_activeTab : null)} onClick={() => { changeTab(1) }}>正则记录</div>
                <div className={cx(styles.search_btn_tapR, searchTab === 2 ? styles.search_btn_activeTab : null)} onClick={() => { changeTab(2) }}>正则知识</div>
            </div>
            {
                searchTab === 1 ? (
                    <div className={styles.content} style={{height:props.height-140}}>
                        <div className={styles.content_left}>
                            {
                                menuD.map((item, index) => {
                                    return (
                                        <div className={cx(styles.p, menuDActiveName === item.name ? styles.p_active : null)} key={index}>
                                            <div className={styles.p_h} onClick={() => {
                                                setSearchVal("")
                                                setMenuDActiveName(item.name)
                                                clearMenuData()
                                            }}>{item.name}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={cx(styles.row_c, styles.content_right)} >
                            <div className={styles.search_input}>
                                <Input placeholder="搜索关键词 按enter键(回车)搜索" onChange={(e) => search(e.target.value)} value={searchVal} ></Input>
                            </div>
                            <div className={styles.rowContainer}>
                                {
                                    searchVal ? (
                                        searchMenuD.map((obj, indx) => {
                                            return (
                                                <div className={styles.row} key={indx}>
                                                    <div className={styles.row_c} key={indx}>
                                                        <h3 className={styles.row_c_h}>{obj.name}</h3>

                                                        <CopyToClipboard text={new RegExp(obj.way).toString()} onClick={() => { }}>
                                                            <div className={styles.row_c_way} onClick={() => {
                                                                setClickCopyBtn({
                                                                    label: true,
                                                                    index: indx
                                                                })
                                                                let timer = setTimeout(() => {
                                                                    setClickCopyBtn({
                                                                        label: false,
                                                                        index: indx
                                                                    })
                                                                }, 1000);
                                                                setTimer(timer)
                                                            }}>

                                                                {
                                                                    clickCopyBtn.label && clickCopyBtn.index == indx ? <span className={cx(styles.copy_tip, styles.copy_tip_active)} >复制成功</span> : <span className={styles.copy_tip}>点击复制</span>
                                                                }
                                                                <div className={styles.row_c_way_name}>{new RegExp(obj.way).toString()}</div>
                                                            </div>
                                                        </CopyToClipboard>


                                                        <Input
                                                            placeholder="输入校验文本"
                                                            value={obj.inputValue}
                                                            allowClear
                                                            onChange={(e) => {
                                                                console.log(searchMenuD, 'searchMenuD')
                                                                let data = JSON.parse(JSON.stringify(searchMenuD))
                                                                data[indx].inputValue = e.target.value
                                                                data[indx].testLabel = obj.way.test(e.target.value).toString()
                                                                searchMenuD.map((itemL, index) => {
                                                                    if (indx == index) {
                                                                        data[indx].way = itemL.way
                                                                    }
                                                                })
                                                                setSearchMenuD(data)

                                                            }}></Input>
                                                        {
                                                            obj.testLabel && <div className={styles.row_c_way}>{obj.testLabel}</div>
                                                        }
                                                    </div>
                                                </div>

                                            )
                                        })

                                    ) : (
                                        menuD.map((item, index) => {
                                            return (
                                                menuDActiveName === item.name && <div className={styles.row} key={index}>
                                                    {
                                                         item.list.map((obj, indx) => {
                                                            return (
                                                                <div className={styles.row_c} key={indx}>
                                                                    <h3 className={styles.row_c_h}>{obj.name}</h3>

                                                                    <CopyToClipboard text={new RegExp(obj.way).toString()} onClick={() => { }}>
                                                                        <div className={styles.row_c_way} onClick={() => {
                                                                            setClickCopyBtn({
                                                                                label: true,
                                                                                index: indx
                                                                            })
                                                                            let timer = setTimeout(() => {
                                                                                setClickCopyBtn({
                                                                                    label: false,
                                                                                    index: indx
                                                                                })
                                                                            }, 1000);
                                                                            setTimer(timer)
                                                                        }}>

                                                                            {
                                                                                clickCopyBtn.label && clickCopyBtn.index == indx ? <span className={cx(styles.copy_tip, styles.copy_tip_active)} >复制成功</span> : <span className={styles.copy_tip}>点击复制</span>
                                                                            }
                                                                            <div className={styles.row_c_way_name}>{new RegExp(obj.way).toString()}</div>
                                                                        </div>
                                                                    </CopyToClipboard>


                                                                    <Input
                                                                        placeholder="输入校验文本"
                                                                        value={obj.inputValue}
                                                                        allowClear
                                                                        onChange={(e) => {
                                                                            let data = JSON.parse(JSON.stringify(menuD))
                                                                            data[index].list[indx].inputValue = e.target.value
                                                                            data[index].list[indx].testLabel = obj.way.test(e.target.value).toString()
                                                                            leftMenuData.map((itemL, index) => {
                                                                                itemL.list.map((objL, indx) => {
                                                                                    data[index].list[indx].way = objL.way
                                                                                })
                                                                            })
                                                                            setMenuD(data)

                                                                        }}></Input>
                                                                    {
                                                                        obj.testLabel && <div className={styles.row_c_way}>{obj.testLabel}</div>
                                                                    }
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        })
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={styles.content} style={{height:props.height-140}}>
                        <PreviewCom/>
                    </div>
                )
            }

        </div>
    )
}
export default OnlineRegex
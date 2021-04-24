import React, { useEffect, useRef, useState } from 'react'
import { Input } from 'antd';
import OnlineRegex from '../onlineRegex'
import './index.scss'
const { TextArea } = Input;
const DragPage = () => {
    const [inputStr, setInputStr] = useState('')
    const [inputTest, setInputTest] = useState('')
    const [inputTestResult, setInputTestResult] = useState('')
    const [inputMatch, setInputMatch] = useState('')
    const [inputMatchResult, setInputMatchResult] = useState('')
    const [inputReplace, setInputReplace] = useState('')
    const [inputReplaceFn, setInputReplaceFn] = useState('')
    const [inputReplaceResult, setInputReplaceResult] = useState('')
    const [param, setParam] = useState([])
    const [height, setHeight] = useState(500)
    useEffect(() => {
        setHeight(window.document.documentElement.clientHeight)
    }, [height])
    return (

        <div className="column">
            <div className="column-left" style={{ height: height-90 }}>
                <div className="resize-bar"></div>
                <div className="resize-line"></div>
                <div className="resize-save">

                    <div className="content">
                        <div className="t">
                            <TextArea value={inputStr} placeholder="输入需要匹配的字符串" onChange={(e) => { setInputStr(e.target.value) }} ></TextArea>
                        </div>

                        <div className="f">
                            <div className="f_title">正则表达式</div>
                            <div className="f_main">
                                <Input placeholder="完整的表达式如:/\w/g" value={inputTest} onChange={(e) => { setInputTest(e.target.value) }} ></Input>
                            </div>
                            <div className="f_btn" onClick={() => {
                                let arr = inputTest.split('/')
                                console.log((new RegExp(arr[1], arr[2])).test(inputStr))
                                setInputTestResult((new RegExp(arr[1], arr[2])).test(inputStr).toString())
                            }}>测试test</div>
                        </div>
                        <div className="m"> {inputTestResult}  </div>
                        <div className="f">
                            <div className="f_title">正则表达式</div>
                            <div className="f_main">
                                <Input placeholder="完整的表达式如:/\w/g" value={inputMatch} onChange={(e) => { setInputMatch(e.target.value) }} ></Input>
                            </div>
                            <div className="f_btn" onClick={() => {
                                let arr = inputMatch.split('/')
                                setInputMatchResult(inputStr.match(new RegExp(arr[1], arr[2])))
                            }}>测试match</div>
                        </div>
                        <div className="m">
                            {
                                inputMatchResult ?(
                                    inputMatchResult.map(item=>{
                                        return <span>{item}<br/></span>
                                    })
                                ) : '匹配为空'
                            }
                        </div>
                        <div className="f">
                            <div className="f_title">获取替换文本正则</div>
                            <div className="f_main">
                                <Input placeholder="输入替换正则" value={inputReplace} onChange={(e) => {
                                    setInputReplace(e.target.value)
                                    try {
                                        let arr = e.target.value.split('/')
                                        inputStr.replace(new RegExp(arr[1], arr[2]), (v1, v2, v3) => {
                                            console.log(v1, v2, v3)
                                            setParam([v1, v2, v3])
                                        })
                                    } catch (error) {

                                    }
                                }} ></Input>
                            </div>
                            <div className="f_btn" onClick={() => {
                                let arr = inputReplace.split('/')
                                setInputReplaceResult(inputStr.replace(new RegExp(arr[1], arr[2]), (value, indx, origin) => {
                                    return eval(inputReplaceFn.split('returnResult')[0] + ';let returnResult="";returnResult' + inputReplaceFn.split('returnResult')[1])
                                }))
                            }}>测试replace</div>

                        </div>
                        <div className="f">
                            <div className="f_title">替换函数</div>
                            <div className="f_main">
                                <div className="f_main_tip">
                                    <div>1.入参名已有，通过param数组读取</div>
                                    <div>入参名展示：(...param)=>{`{}`}  </div>
                                    <div>入参值展示(实时)：</div>
                                    <div>{`(${param.join(',')})=>{//函数内容体}`}</div>
                                    <div>2.编写函数内容体即可，最后需要将匹配值赋予returnResult变量，如：</div>
                                    <div>let dealResult=param[0]</div>
                                    <div>returnResult=dealResult</div>
                                </div>
                                <TextArea placeholder="文本或者函数内部内容" onChange={(e) => {
                                    setInputReplaceFn(e.target.value)
                                }}></TextArea>
                            </div>
                        </div>
                        <div className="m m_r">
                            {
                                inputReplaceResult ? inputReplaceResult : '匹配为空'
                            }
                        </div>

                    </div>

                </div>
            </div>
            <div className="column_right" style={{ height: height }}>
                <OnlineRegex height={height} />
            </div>
        </div>

    )
}
export default DragPage
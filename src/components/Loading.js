import React from 'react'
import style from '.././styles/Loading.module.css'
function Loading() {
    return (
        <div className={style.loadingWrapper}>
            <div className={style.dot}></div>
        </div>
    )
}

export default Loading

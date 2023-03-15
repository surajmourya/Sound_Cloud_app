import React from 'react'
import style from '.././styles/Card.module.css'
function Card({ data }) {

    const millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return(minutes < 10 ? '0' : '')+ minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }


    return (
        <div className={style.cardWrapper}>
            <img src={data.artworkUrl} className={style.poster} alt="relevel"/>
            <div className={style.details}>
                <div className={style.name}>
                    <h5>{data.user.username}</h5>
                    <h4>{data.title}</h4>
                </div>
                <div className={style.extraDetails}>
                    <div className={style.time}>{millisToMinutesAndSeconds(data.duration)}</div>
                    <div className={style.views}>{data.playback_count}</div>
                </div>
            </div>
        </div>
    )
}

export default Card
import React from "react";
import { BsBriefcaseFill } from 'react-icons/bs'
import { ImTrophy } from 'react-icons/im'
import style from '../ArchivementCard/ArchivementCard.module.css'


function ArchivementCard({ id, section, company, tarea, resumen, cDate, fDate }) {

    return (
        <div key={id} className={style.card}>
            <div className={style.ArchivementIcon}>{section === "job" ? <BsBriefcaseFill /> : <ImTrophy />}</div>
            <h1>{company}</h1>
            <h3>{tarea}</h3>
            <p>{resumen}</p>
            <div>
                <p>{cDate}</p>
                <p>{fDate}</p>
            </div>

        </div>
    )
}

export default ArchivementCard;
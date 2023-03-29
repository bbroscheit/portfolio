import React from "react";
import { BsBriefcaseFill } from 'react-icons/bs'
import { ImTrophy } from 'react-icons/im'
import style from '../ArchivementCard/ArchivementCard.module.css'


function ArchivementCard({ id, section, company, tarea, resumen, cDate, fDate }) {

    return (
        <div key={id} className={style.card}>
            <div className={style.ArchivementIcon}>{section === "job" ? <BsBriefcaseFill /> : <ImTrophy />}</div>
            <h1 className={style.ArchivementTitle}>{company}</h1>
            <h3 className={style.ArchivementSubitle}>{tarea}</h3>
            <p className={style.ArchivementParagraph}>{resumen}</p>
            <div className={style.date}>
                <h5><em>Fecha de inicio:</em> {cDate}</h5>
                <h5><em>Fecha de final:</em> {fDate}</h5>
            </div>

        </div>
    )
}

export default ArchivementCard;
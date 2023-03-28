import React from "react"
import ArchivementCard from '../Archivement/ArchivementCard/ArchivementCard.jsx'
import {AiFillStar} from 'react-icons/ai'
import style from '../Archivement/Archivement.module.css'

const jobArchivement = [{
    id:1,
    section: "job",
    company : "Basani SA",
    tarea: "asistente de tesoreria",
    resumen:"hago muchas cosas",
    cDate:"01-09-2009",
    fDate:"at Present"
},{
    id:2,
    section: "job",
    company : "SoyHenry Bootcamp",
    tarea: "asistente de enseñanza",
    resumen:"hago muchas cosas",
    cDate:"11-12-2022",
    fDate:"01-03-2023"  
},{
    id:3,
    section: "Archivement",
    company : "SoyHenry Bootcamp ",
    tarea: "FullStack Developer",
    resumen:"hago muchas cosas",
    cDate:"20-02-2022",
    fDate:"30-11-2022"  
},{
    id:4,
    section: "Archivement",
    company : "Jimena Cardenas",
    tarea: "Scrum Master",
    resumen:"hago muchas cosas",
    cDate:"04-02-2023",
    fDate:"26-03-2023"  
}
]

function Archivement(){
    return(
        <div>
        <AiFillStar />
        <h1>Jobs & Archivement</h1>
            <div className={style.cardArchivementContainer}>
                {jobArchivement && jobArchivement.map(e => <ArchivementCard 
                    id={e.id} section={e.section}
                    company = {e.company}
                    tarea= {e.tarea}
                    resumen={e.resumen}
                    cDate={e.cDate}
                    fDate={e.fDate} />)}
            </div>
        </div>
    )
}

export default Archivement;
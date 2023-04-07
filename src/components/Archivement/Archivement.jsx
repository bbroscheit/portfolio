import React from "react"
import ArchivementCard from '../Archivement/ArchivementCard/ArchivementCard.jsx'
import Title from "../StylishComponents/Title/Title.jsx"
import style from '../Archivement/Archivement.module.css'

const jobArchivement = [{
    id:4,
    section: "Archivement",
    company : "Jimena Cardenas",
    tarea: "Scrum Master",
    resumen:"Luego de mas de un mes de charlas, conociendo muy buena gente y con una profesora excelente , estoy listo para decir que me converti en Scrum Master",
    cDate:"04-02-2023",
    fDate:"26-03-2023"  
},{
    id:3,
    section: "Archivement",
    company : "SoyHenry Bootcamp ",
    tarea: "FullStack Developer",
    resumen:"Casi 1 año de estudio, frustraciones, festejos, compañeros/amigos increíbles, cáfe y muchas lineas de código me pude convertir en Desarrollador FullStack",
    cDate:"20-02-2022",
    fDate:"30-11-2022" 
},{
    id:2,
    section: "job",
    company : "SoyHenry Bootcamp",
    tarea: "Asistente de Enseñanza",
    resumen:"Me asignaron la tarea de estar al frente de un grupo de futuros desarrolladores, acompañandolos durante toda la cursada para que puedan cumplir sus objetivos",
    cDate:"11-12-2022",
    fDate:"01-03-2023"
     
},{
    id:1,
    section: "job",
    company : "Basani SA",
    tarea: "Asistente de Tesoreria",
    resumen:"Hace 13 años que comencé en Basani, pasando por los sectores de Archivo, Contabilidad, Proveedores y Teosoreria. ",
    cDate:"01-09-2009",
    fDate:"at Present"
    
}
]

function Archivement(){
    return(
        <div className={style.mainContainer}>
            <Title title={"Jobs & Archivement"}/>
        
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
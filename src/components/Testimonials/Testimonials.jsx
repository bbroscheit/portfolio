import React from "react"
import TestimonialsCard from '../Testimonials/TestimoniaslCard/TestimonialsCard.jsx'
import Title from '../StylishComponents/Title/Title.jsx'
import style from '../Testimonials/Testimonials.module.css'

const testimonios = [{
    id: 1,
    name: "Alejandro Morales",
    avatar: "https://res.cloudinary.com/de2od3piw/image/upload/v1680195972/pics/1668268739380_uiyujq.jpg",
    quote: "Bernardo es una persona con muchas habilidades que aportan gran valor al equipo, siempre esta dispuesto a ayudar y crear soluciones a los problemas, un muy buen nivel de conocimientos y lo mas importante, con valores y perfil de liderazgo, buena organización al momento de tomar decisiones."
},
{
    id: 2,
    name: "Luis Acosta",
    avatar: "https://res.cloudinary.com/de2od3piw/image/upload/v1680195966/pics/1659626236488_lsxeu0.jpg",
    quote: "Bernardo es un gran profesional y sobre todo un gran compañero que sin dudas marca la diferencia en el equipo. Su empatía y su predisposición hacen de él un recurso valioso al momento de afrontar cualquier tipo de tarea. Lo más destacable sin dudas es su capacidad para tomar el mando cuando es necesario, poniéndose al frente y liderando al equipo para alcanzar los objetivos planteados."
}, {
    id: 3,
    name: "Rosibel Mendoza",
    avatar: "https://res.cloudinary.com/de2od3piw/image/upload/v1680195963/pics/1669074531205_yby42e.jpg",
    quote: "A lo largo del desarrollo del proyecto académico que compartimos Bernardo se caracterizó por su proactividad y su diligencia. Su deseo de aprender cosas nuevas lo guió a hacer aportes importantes, involucrando siempre a sus compañeros para ser multiplicador de saberes. Muy resposable y dedicado, tiene siempre las palabras justas para animar el equipo y llevar los objetivos at término."
}]

function Testimonials() {
    return (
        <div className={style.mainContainer} id="testimonials">
            <div className="mainContainerOpacity">
                <div className={style.secondContainer}>
                    <Title title={"Testimonials"} />
                    <div className={style.testimonialsContainer}>
                        {
                            testimonios && testimonios.map(e => <TestimonialsCard id={e.id} name={e.name} avatar={e.avatar} quote={e.quote} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;
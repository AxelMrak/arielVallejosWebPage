import React from 'react'

function TerapiasUnitPage({ title, section1, description1, section2, description2, img }) {
  return (
    <div>
        <img src={img} width='300'/>
        <h2>{title}</h2>
        <section>
           <h3>{section1}</h3>
           <p>{description1}</p> 
        </section>
        <button>Solicitar</button>
    </div>
  )
}

export default TerapiasUnitPage
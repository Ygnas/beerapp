import React from 'react'

export default function Beer( {beer} ) {
  return (
    <section>
        <div className="beerimage">
            <img src={beer.image} alt="pint of beer"/>
        </div>
        <div className="description">
            <article>
                <h3>{beer.name}</h3>
                <p>{beer.description}</p>
            </article>
        </div>
    </section>
  )
}

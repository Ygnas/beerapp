import React from 'react'

export default function Beer( {beer} ) {
  return (
    <section>
        <div class="beerimage">
            <img src={beer.image} alt="pint of beer"/>
        </div>
        <article>
            <h3>{beer.name}</h3>
            <p>{beer.description}</p>
        </article>
    </section>
  )
}

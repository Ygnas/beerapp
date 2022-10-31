import React from 'react'
import Beer from './Beer'

export default function BeerApp() {
  return (
    <>
        <header>
            <h1>The Random Beer App</h1>
            <button>Show Another Beer</button>
        </header>
        <Beer/>
    </>
  )
}

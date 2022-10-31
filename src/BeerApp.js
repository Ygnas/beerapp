import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Beer from './Beer'
import { beerData } from './beerData'
import Brewery from './Brewery';

export default function BeerApp() {
    const [beer, setBeer] = useState([]);
    const [brewery, setBrewery] = useState([]);

    // Called once
    useEffect(() => {
        randomBeer();
    }, [])

    // Called everytime brewery data changes.
    useEffect(() => {
        if (!brewery.breweryID) return
        const URL = "https://api.openbrewerydb.org/breweries/" + brewery.breweryID;
        axios.get(URL)
        .then((response) => {
            setBrewery(response.data)
        })
    }, [brewery])

    // Sets random brewery and beer 
    function randomBeer() {
        const randomBrewery = Math.floor(Math.random() * beerData.length);
        const brewery = beerData[randomBrewery];
        setBrewery(brewery);
        const randomBeer = Math.floor(Math.random() * brewery.beers.length);
        setBeer(brewery.beers[randomBeer]);
    }

    return (
        <>
            <header>
                <h1>The Random Beer App</h1>
                <button onClick={randomBeer}>Show Another Beer</button>
            </header>
            <Beer beer={beer}/>
            <Brewery brewery={brewery}/>
        </>
    )
}

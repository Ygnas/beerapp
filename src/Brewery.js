import React from 'react'
import ReactTooltip from 'react-tooltip'

export default function Brewery( {brewery} ) {
  return (
    <section>
        <p data-tip data-for="breweryTooltip">{brewery.name}</p>
        <ReactTooltip delayUpdate={1000} clickable="true" id="breweryTooltip" place="top" effect="solid">
            <p>Brewery Type: {brewery.brewery_type}</p>
            <p>City: {brewery.county_province}</p>
            <p>Country: {brewery.country}</p>
            <p>Phone: {brewery.phone}</p>
            <p>Website: {brewery.website_url}</p>
        </ReactTooltip>
    </section>
  )
}

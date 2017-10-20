import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
    <div style={{ color: `tomato` }}>
        <h1>Hello!</h1>
        <p>What a world.</p>
        <img src="http://lorempixel.com/400/200/" alt="random" />
        <br/>
        <Link to="/page-2/">Link</Link>
        <br/>
        <Link to="/counter/">Counter</Link>
    </div>
)

export default IndexPage

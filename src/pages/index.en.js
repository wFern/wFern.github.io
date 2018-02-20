import React from 'react'
import Link from 'gatsby-link'
import { Grid, Image } from 'semantic-ui-react'
import PersonalPic from '../assets/img/personal-pic.jpg'

const IndexPage = () => (
    <div>
        <Grid columns={2} verticalAlign='middle' centered>
            <Grid.Row>
                <Grid.Column>
                    <h1>About</h1>
                    <p>Hello</p>
                    <p>My name is Andrey and I'm a mostly web developer</p>
                    <p>Also, I'm interested in music, cycling, and some other stuff</p>
                </Grid.Column>
                <Grid.Column>
                    <Image src={PersonalPic} size='small' circular/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
)

export default IndexPage

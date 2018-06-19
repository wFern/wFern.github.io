import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Icon, Grid, Container } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
import './index.scss'

const Header = () => (
  <header
    style={{
        padding: '1.45rem 1.0875rem'
    }}
  >
      <Container>
          <Grid centered divided='vertically'>
              <Grid.Row columns={2}>
                  <Grid.Column>
                      <Link
                          to="/ru/"
                          style={{
                              color: '#3f325a',
                              textDecoration: 'none',
                              fontSize: '2em',
                              fontWeight: 'bold'
                          }}
                      >
                          wFern
                      </Link>
                  </Grid.Column>
                  <Grid.Column textAlign={'right'}>
                      <Link to="/ru/">RU</Link>
                      &nbsp;/&nbsp;
                      <a href="/en/">EN</a>
                  </Grid.Column>
              </Grid.Row>
          </Grid>
      </Container>
  </header>
)

const Footer = () => (
    <footer
        style={{
            padding: '1em 1rem'
        }}
    >
        <Container>
            <Grid centered divided='vertically'>
                <Grid.Row>
                    <a href="https://www.facebook.com/andrey.wrd.frn" target="_blank">
                        <Icon circular link name='facebook square'/>
                    </a>
                    <a href="https://500px.com/witheredfern" target="_blank">
                        <Icon circular link name='500px'/>
                    </a>
                    <a href="https://codepen.io/wFern/" target="_blank">
                        <Icon circular link name='codepen'/>
                    </a>
                    <a href="https://github.com/wFern" target="_blank">
                        <Icon circular link name='github'/>
                    </a>
                    <a href="https://bandcamp.com/w_fern/" target="_blank">
                        <Icon circular link name='bandcamp'/>
                    </a>
                    <a href="https://www.mixcloud.com/andrey-ivanov19/" target="_blank">
                        <Icon circular link name='mixcloud'/>
                    </a>
                    <a href="https://www.strava.com/athletes/brn_fern" target="_blank">
                        <Icon circular link className='strava'/>
                    </a>

                </Grid.Row>
            </Grid>
        </Container>
    </footer>
)

const TemplateWrapper = ({ children }) => (
  <div
    style={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
        backgroundColor: '#36669d',
        backgroundImage: 'linear-gradient(315deg, #f9f9f9 0%, #d3d3d3 74%)'
    }}
  >
    <Helmet
      title="wFern"
      meta={[
        { name: 'description', content: 'Personal website about programing, music, photo etc' },
        { name: 'keywords', content: 'wfern, programing, music, photo' },
      ]}
    />
    <Header />
        <div
            style={{
                padding: '1.45rem 1.0875rem',
                flex: 1,
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Container>
                {children()}
            </Container>
        </div>
    <Footer/>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

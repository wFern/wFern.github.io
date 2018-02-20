import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Icon, Grid } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

const Header = () => (
  <header
    style={{
      borderBottom: '2px solid #c5c3b5',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/ru/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          wFern
        </Link>
      </h1>
    </div>
  </header>
)

const Footer = () => (
    <footer
        style={{
            borderTop: '2px solid #c5c3b5',
            marginTop: '1.45rem',
            padding: '1em 1rem'
        }}
    >
        <Grid centered divided='vertically'>
            <Grid.Row columns={2}>
                <Grid.Column textAlign={'right'}>
                    <Link to="/ru/">RU</Link>
                    &nbsp;/&nbsp;
                    <a href="/en/">EN</a>
                </Grid.Column>
                <Grid.Column>
                    <a href="https://www.facebook.com/andrey.wrd.frn" target="_blank">
                        <Icon circular link name='facebook square'/>
                    </a>
                    <a href="https://vk.com/cinereus" target="_blank">
                        <Icon circular link name='vk'/>
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
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </footer>
)

const TemplateWrapper = ({ children }) => (
  <div
    style={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column'
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
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
          flex: 1
      }}
    >
      {children()}
    </div>
    <Footer/>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

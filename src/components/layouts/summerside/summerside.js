import React from 'react'
import Helmet from 'react-helmet'
import 'semantic-ui-css/semantic.min.css'
import '../index/index.module.scss'
import classes from './summersideLayout.module.scss'
import PropTypes from "prop-types"
import { getCurrentLangKey } from "ptz-i18n";
import shareImg from '../../../assets/img/pages/summerside/share.png'

const languages = require('../../../data/languages');

const Summerside = ({ children, location }) => {

  const url = location.pathname;
  const {langs, defaultLangKey} = languages;
  const langsKeys = Object.keys(langs);
  const langKey = getCurrentLangKey(langsKeys, defaultLangKey, url);

  return (
    <div className={classes.wrapper}>
      <Helmet
        title="Summerside. Велопутешествие"
        meta={[
          {name: 'description', content: 'Summerside. Двухэтапное велопутешествие по Европе. 2000 км, 24 дня езды, много впечатлений.'},
          {name: 'keywords', content: 'salad_nights, велотур, велопутешествие, европа, велотрип'},
          {property:'og:title', content: 'Двухэтапное велопутешествие по Европе'},
          {property:'og:description', content: '2000 км, 24 дня езды, много впечатлений.'},
          {property:'og:type', content: 'article'},
          {property:'og:url', content: `https://saladnights.site${url}`},
          {property:'og:image', content: shareImg},
          {property:'og:image:secure_url', content: shareImg}
        ]}
      >
        <html lang={langKey} />
      </Helmet>
      {children}
    </div>
  )
};

export default Summerside;

Summerside.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object
};
import React from 'react'
import Helmet from 'react-helmet'
import 'semantic-ui-css/semantic.min.css'
import '../index/index.module.scss'
import classes from './summersideLayout.module.scss'
import PropTypes from "prop-types"
import { getCurrentLangKey } from "ptz-i18n";

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
          {name: 'description', content: 'Summerside. Двухэтапное велопутешествие по Европе. 2000 км, 24 дня езды, бесконечное количество впечатлений.'},
          {name: 'keywords', content: 'salad_nights, велотур, велопутешествие, европа, велотрип'},
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
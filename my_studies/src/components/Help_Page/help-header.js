import React from 'react'

import PropTypes from 'prop-types'

import './help-header.css'

const HelpHeader = (props) => {
  return (
    <div className={`help-header-header ${props.rootClassName} `}>
      <div className="help-header-searchbar">
        <span className="help-header-text">
          <span className="">Αναζήτηση</span>
        </span>
        <img
          src={props.search_src}
          alt={props.search_alt}
          className="help-header-search"
        />
      </div>
      <img
        src={props.home_src}
        alt={props.home_alt}
        className="help-header-home"
      />
    </div>
  )
}

HelpHeader.defaultProps = {
  home_src: '/external/home6258-kko.svg',
  home_alt: 'home6258',
  search_src: '/external/search6257-ft4o.svg',
  search_alt: 'search6257',
  rootClassName: '',
}

HelpHeader.propTypes = {
  home_src: PropTypes.string,
  home_alt: PropTypes.string,
  search_src: PropTypes.string,
  search_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default HelpHeader

import React from 'react'

import PropTypes from 'prop-types'

import './help-start-body.css'

const HelpStartBody = (props) => {
  return (
    <div className={`help-start-body-body ${props.rootClassName} `}>
      <div className="help-start-body-studentsbutton">
        <img
          src={props.Rectangle5_src}
          alt={props.Rectangle5_alt}
          className="help-start-body-rectangle5"
        />
        <span className="help-start-body-text">
          <span className=""> Για Φοιτητές</span>
        </span>
        <img
          src={props.user_src}
          alt={props.user_alt}
          className="help-start-body-user"
        />
      </div>
      <div className="help-start-body-teachersbutton">
        <img
          src={props.Rectangle5_src1}
          alt={props.Rectangle5_alt1}
          className="help-start-body-rectangle51"
        />
        <span className="help-start-body-text2">
          <span className=""> Για Εκπαιδευτικούς</span>
        </span>
        <img
          src={props.academiccap_src}
          alt={props.academiccap_alt}
          className="help-start-body-academiccap"
        />
      </div>
      <div className="help-start-body-administrationbutton">
        <img
          src={props.Rectangle5_src2}
          alt={props.Rectangle5_alt2}
          className="help-start-body-rectangle52"
        />
        <span className="help-start-body-text4">
          <span className=""> Για την Γραμματεία</span>
        </span>
        <img
          src={props.library_src}
          alt={props.library_alt}
          className="help-start-body-library"
        />
      </div>
    </div>
  )
}

HelpStartBody.defaultProps = {
  Rectangle5_src: '/external/rectangle56258-rz7e-200h.png',
  Rectangle5_alt: 'Rectangle56258',
  user_src: '/external/user6258-e8ya.svg',
  user_alt: 'user6258',
  Rectangle5_src1: '/external/rectangle56258-2iv-200h.png',
  Rectangle5_alt1: 'Rectangle56258',
  academiccap_src: '/external/academiccap6258-vhqf.svg',
  academiccap_alt: 'academiccap6258',
  Rectangle5_src2: '/external/rectangle56259-7ssv-200h.png',
  Rectangle5_alt2: 'Rectangle56259',
  library_src: '/external/library6259-x1gh.svg',
  library_alt: 'library6259',
  rootClassName: '',
}

HelpStartBody.propTypes = {
  Rectangle5_src: PropTypes.string,
  Rectangle5_alt: PropTypes.string,
  user_src: PropTypes.string,
  user_alt: PropTypes.string,
  Rectangle5_src1: PropTypes.string,
  Rectangle5_alt1: PropTypes.string,
  academiccap_src: PropTypes.string,
  academiccap_alt: PropTypes.string,
  Rectangle5_src2: PropTypes.string,
  Rectangle5_alt2: PropTypes.string,
  library_src: PropTypes.string,
  library_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default HelpStartBody

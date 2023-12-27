import React from 'react'

import PropTypes from 'prop-types'

import './help-sidebar.css'

const HelpSidebar = (props) => {
  return (
    <div className={`help-sidebar-sidebar ${props.rootClassName} `}>
      <div className="help-sidebar-frame1">
        <span className="help-sidebar-text">
          <span className=""> Για Φοιτητές</span>
        </span>
      </div>
      <div className="help-sidebar-frame2">
        <span className="help-sidebar-text2">
          <span className=""> Για Εκπαιδευτικούς</span>
        </span>
      </div>
      <div className="help-sidebar-frame3">
        <span className="help-sidebar-text4">
          <span className=""> Για την Γραμματεία</span>
        </span>
      </div>
      <img
        src={props.Rectangle7_src}
        alt={props.Rectangle7_alt}
        className="help-sidebar-rectangle7"
      />
      <img
        src={props.Rectangle8_src}
        alt={props.Rectangle8_alt}
        className="help-sidebar-rectangle8"
      />
      <div className="help-sidebar-returnbutton">
        <img
          src={props.Rectangle9_src}
          alt={props.Rectangle9_alt}
          className="help-sidebar-rectangle9"
        />
        <img
          src={props.Ellipse1_src}
          alt={props.Ellipse1_alt}
          className="help-sidebar-ellipse1"
        />
        <img
          src={props.reply_src}
          alt={props.reply_alt}
          className="help-sidebar-reply"
        />
        <span className="help-sidebar-text6">
          <span className=""> Επιστροφή</span>
        </span>
      </div>
    </div>
  )
}

HelpSidebar.defaultProps = {
  Rectangle7_src: '/external/rectangle76257-zpgy-200h.png',
  Rectangle7_alt: 'Rectangle76257',
  Rectangle8_src: '/external/rectangle86257-lcg-200h.png',
  Rectangle8_alt: 'Rectangle86257',
  Rectangle9_src: '/external/rectangle96261-akhv-200h.png',
  Rectangle9_alt: 'Rectangle96261',
  Ellipse1_src: '/external/ellipse16261-vbe8-200h.png',
  Ellipse1_alt: 'Ellipse16261',
  reply_src: '/external/reply6261-0h6e.svg',
  reply_alt: 'reply6261',
  Path_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/73ba71bd-4cae-4b42-bcac-d19a2e5d47ff/c107cb1f-da5d-409e-955f-63799e402945?org_if_sml=1297&force_format=original',
  Path_alt: 'PathI625',
  Path_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/73ba71bd-4cae-4b42-bcac-d19a2e5d47ff/a96e251f-8069-4891-8fab-dc0f2a29f194?org_if_sml=1468&force_format=original',
  Path_alt1: 'PathI625',
  rootClassName: '',
}

HelpSidebar.propTypes = {
  Rectangle7_src: PropTypes.string,
  Rectangle7_alt: PropTypes.string,
  Rectangle8_src: PropTypes.string,
  Rectangle8_alt: PropTypes.string,
  Rectangle9_src: PropTypes.string,
  Rectangle9_alt: PropTypes.string,
  Ellipse1_src: PropTypes.string,
  Ellipse1_alt: PropTypes.string,
  reply_src: PropTypes.string,
  reply_alt: PropTypes.string,
  Path_src: PropTypes.string,
  Path_alt: PropTypes.string,
  Path_src1: PropTypes.string,
  Path_alt1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default HelpSidebar

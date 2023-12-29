import React from 'react'

// import { Helmet } from 'react-helmet'

import HelpSidebar from "./help-sidebar";
import HelpHeader from "./help-header";
import HelpStartBody from "./help-start-body";
import './help-home.css'

const HelpHome2 = (props) => {
  return (
    <div className="help-home-container">
      {/*<Helmet>*/}
      {/*  <title>Quarterly United Whale</title>*/}
      {/*  <meta property="og:title" content="Quarterly United Whale" />*/}
      {/*</Helmet>*/}
      <div className="help-home-helphome">
        <HelpSidebar rootClassName="help-sidebar-root-class-name"></HelpSidebar>
        <HelpHeader rootClassName="help-header-root-class-name"></HelpHeader>
        <HelpStartBody rootClassName="help-start-body-root-class-name"></HelpStartBody>
      </div>
    </div>
  )
}

export default HelpHome2

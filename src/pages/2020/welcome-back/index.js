import React from 'react'
import { DFPSlotsProvider, AdSlot } from 'react-dfp'
import s from 'styled-components'
import { Helmet } from 'react-helmet'

import SEO from "../../../components/seo"
import NavBar from '../../../components/2020/welcome-back/Nav'
import WordWithLine from '../../../components/2020/welcome-back/WordWithLine'
import UTB from '../../../components/2020/welcome-back/UTB'
import Street from '../../../components/2020/welcome-back/Street'
import Sports from '../../../components/2020/welcome-back/Sports'

import { ROBOTO_REGULAR } from '../../../utils/font'

const Credit = s.div`
  background: #000000;
  color: #FFFFFF;
  ${ROBOTO_REGULAR}
  padding: 1rem;
  font-size: 80%;
  margin-top: 2rem;
  text-align: center;
`

const DesktopAd = s.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  padding: 0;

  @media(max-width: 849px) {
    display: none!important;
  }
`

const MobileAd = s.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  padding: 0;

  @media(min-width: 850px) {
    display: none!important;
  }
`

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Helmet>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Welcome Back | The Daily Pennsylvanian</title>
      <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
    </Helmet>

    <NavBar />

    <WordWithLine word="NEWS" />

    <DesktopAd>  
      <DFPSlotsProvider dfpNetworkId="12234093">
        <AdSlot adUnit="DP.com-Leaderboard" sizes={[[728, 90]]} />
      </DFPSlotsProvider>
    </DesktopAd>
    <MobileAd>  
      <DFPSlotsProvider dfpNetworkId="12234093">
        <AdSlot adUnit="DP.com-mobile-leaderboard" sizes={[[320, 50]]} />
      </DFPSlotsProvider>
    </MobileAd>

    <WordWithLine word="OPINION" />

    <Street />

    <DesktopAd>  
      <DFPSlotsProvider dfpNetworkId="12234093">
        <AdSlot adUnit="DP.com-Leaderboard" sizes={[[728, 90]]} />
      </DFPSlotsProvider>
    </DesktopAd>
    <MobileAd>  
      <DFPSlotsProvider dfpNetworkId="12234093">
        <AdSlot adUnit="DP.com-mobile-leaderboard" sizes={[[320, 50]]} />
      </DFPSlotsProvider>
    </MobileAd>

    <WordWithLine word="SPORTS" />
    <Sports />

    <UTB />

    <Credit> Made with <span role="img"> 🎒</span> by The Daily Pennsylvanian © 2020. All rights reserved.  </Credit>
  </>
)

export default IndexPage

export const dynamic = 'force-dynamic'

import AboutHeroSection from './AboutHeroSection'
import OurMission from './OurMission'
import OurValues from './OurValues'
import WhatWeDo from './WhatWeDo'
import Achievements from './Achievements'
import LogoScroll from '../services/lead-generation/LogoScroll'
import GetStarted from './GetStarted'


export default function About() {
  return (
    <div className="min-h-screen">
      <AboutHeroSection />
      <OurMission />
      <WhatWeDo />
      <OurValues />
      <Achievements />
      <LogoScroll />
      {/* <StatsSection /> */}
      <GetStarted />
    </div>
  )
}

export const dynamic = 'force-dynamic'

import AboutHeroSection from './AboutHeroSection'
import OurMission from './OurMission'
import OurValues from './OurValues'
import WhatWeDo from './WhatWeDo'
import Achievements from './Achievements'
import StatsSection from './StatsSection'
import GetStarted from './GetStarted'

export default function About() {
  return (
    <div className="min-h-screen">
      <AboutHeroSection />
      <OurMission />
      <WhatWeDo />
      <OurValues />
      <Achievements />
      <StatsSection />
      <GetStarted />
    </div>
  )
}

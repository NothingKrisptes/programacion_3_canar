// src/pages/HomeRB.tsx

import RBHero       from '../components/rb/RBHero'
import RBCourseGrid from '../components/rb/RBCourseGrid'
import RBNewsletter from '../components/rb/RBNewsletter'

export default function HomeRB() {
  return (
    <>
      <RBHero />
      <RBCourseGrid />
      <RBNewsletter />
    </>
  )
}
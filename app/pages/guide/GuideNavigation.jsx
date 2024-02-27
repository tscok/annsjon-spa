import React from 'react'

import Aside from '../../components/Aside'
import AsideNav from '../../components/AsideNav'

import useText from '../../utils/useText'

const GuideNavigation = () => {
  const getText = useText()

  return (
    <Aside>
      <AsideNav
        items={[
          { label: 'Handöl', route: '/guide/handol' },
          { label: 'Högåsen', route: '/guide/hogasen' },
          { label: 'Storlien', route: '/guide/storlien' },
          { label: 'Storulvån', route: '/guide/storulvan' },
          { label: 'Ånn', route: '/guide/ann' },
        ]}
        title={getText('guides_title')}
      />
    </Aside>
  )
}

export default GuideNavigation

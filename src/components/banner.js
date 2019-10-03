import React from 'react'
import Img from 'gatsby-image'

import styles from './banner.module.css'

let classBanner = [
  'row',
  styles.bannerPadding,
]
classBanner = classBanner.join(' ')

export default ({ data }) => (
  <div className={classBanner}>
    <div className="col-md-4">
      <img src={data.backgroundImage.fluid.src} alt="Logo" style={{ maxWidth: 416, maxHeight: 416 }} />
    </div>
    <div className="col-md-8">
      <div className="p-3 bg-white">
        <div className={styles.titleBanner}>
          <span>{data.title}</span>
        </div>
        <p style={{ fontSize: 16 }}
          dangerouslySetInnerHTML={{
            __html: data.body.childMarkdownRemark.html,
          }}
        />
      </div>
    </div>
  </div>
)

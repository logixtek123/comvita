import React from 'react'
import Img from 'gatsby-image'

import styles from './banner-introducing.module.css'

export default ({ data }) => (
  <div className={styles.bannerPadding}>
    <div className={styles.titleBanner}>
      <span>{data.title}</span>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className={styles.titleBanner}>
          <p style={{ fontSize: 22, color: '#c59e57', fontWeight: 600, margin: (10, 0)}}
            dangerouslySetInnerHTML={{
              __html: data.body.childMarkdownRemark.html,
            }}
          />
          <button style={{ background: '#c59e57', color: '#fff', border: (2, 'solid', '#c59e57') }} className="btn">Shop Manuka</button>
        </div>
      </div>
      <div className="col-md-8">
        <img src={data.backgroundImage.fluid.src} alt="Logo" style={{ maxWidth: 836, maxHeight: 382 }} />
      </div>
    </div>
  </div>
)

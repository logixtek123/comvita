import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import styles from './product.module.css'
import Layout from "../components/layout"
import ProductPreview from '../components/product-preview'
// import BackgroundHoneyImage from './../assets/background_honey.jpeg'

class ProductIndex extends React.Component {
  render() {
    const products = get(this, 'props.data.allContentfulProduct.edges')
    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fef9f0' }}>
          <div className={styles.hero}>
            <span className={styles.textSlogan}>
              Gourmet Honey
            </span>
          </div>
          <div className="wrapper text-center">
            <h2 className="section-headline">GOURMET HONEY</h2>
            <div className="row">
              {products.map(({ node }, index) => {
                return (
                  <ProductPreview product={node} key={index} />
                )
              })}
            </div>
          </div>

        </div>
      </Layout>
    )
  }
}

export default ProductIndex

export const pageQuery = graphql`
  query ProductIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProduct(sort: {fields: [title], order: ASC }) {
      edges {
        node {
          title
          newPrice
          oldPrice
          type
          image {
            fluid(resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

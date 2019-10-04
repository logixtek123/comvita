import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Banner from '../components/banner'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerIntroducing from '../components/banner-introducing'


class RootIndex extends React.Component {
  render() {
    const banners = get(this, 'props.data.allContentfulBanner.edges')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fef9f0' }}>
          {banners.map(({ node }, index) => {
            if (node.order === 1) {
              return <BannerIntroducing data={node} key={index} />
            }
            return (
              <Banner data={node} key={index} />
            )
          })}
        </div>
      </Layout >
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: {fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulBanner(sort: {fields: [order], order: ASC }) {
      edges {
        node {
          title
          description {
            childMarkdownRemark {
              html
            }
          }
          order
          body {
            childMarkdownRemark {
              html
            }
          }
          publishDate(formatString: "MMMM Do, YYYY")
          backgroundImage {
            fluid(resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}
`

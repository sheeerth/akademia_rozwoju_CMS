import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Newsletter from "../components/Newsletter";
import About from "../components/About";
import Offer, {offerPerson} from "../components/Offer";
import Content from "../components/Content";

export const IndexPageTemplate = ({
    offerContent
}) => {
    const [forWho, setForWho] = useState(0);
    const headingOffer = offerContent.offers.map((offer) => offer.heading);

    return (
        <div>
            <Newsletter/>
            <About/>
            <Offer setForWho={(data) => setForWho(data)} headings={headingOffer}/>
            <Content forWho={offerContent.offers[forWho].heading} description={offerContent.offers[forWho].text} course={offerContent.offers[forWho].course}/>
        </div>
    )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  offerContent: PropTypes.shape({
    offers: PropTypes.array,
  })
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        offerContent={frontmatter.offerContent}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        offerContent {
          offers {
            heading
            text
            course {
              name
              purpose
              description
            }
          }
        }
      }
    }
  }
`

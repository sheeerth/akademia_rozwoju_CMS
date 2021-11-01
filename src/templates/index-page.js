import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Newsletter from "../components/Newsletter";
import About from "../components/About";
import Offer from "../components/Offer";
import Content from "../components/Content";

export const IndexPageTemplate = ({
    offerContent
}) => {
    const [forWho, setForWho] = useState(0);
    const headingOffer = offerContent.offers.length > 1 ? offerContent.offers.map((offer) => offer.heading ?? null) : [];
    const offerBoxes = headingOffer.length > 0 ?
        <>
            <Offer setForWho={(data) => setForWho(data)} headings={headingOffer}/>
            <Content key={offerContent.offers[forWho].heading} forWho={offerContent.offers[forWho].heading} close={offerContent.offers[forWho].close} description={offerContent.offers[forWho].text} course={offerContent.offers[forWho].course}/>
        </> : null;

    return (
        <div>
            <Newsletter/>
            <About/>
            {offerBoxes}
        </div>
    )
}

IndexPageTemplate.propTypes = {
  offerContent: PropTypes.shape({
    offers: PropTypes.array,
  })
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
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
        offerContent {
          offers {
            heading
            text
            close
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

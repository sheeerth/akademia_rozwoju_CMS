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
    const headingOffer = offerContent.offers.map((offer) => offer.heading);

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

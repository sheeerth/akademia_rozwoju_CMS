import React from 'react'
import PropTypes from 'prop-types'
import Title from "../UI/Title";

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ forWho, content, className }) => (
    <section className="m-auto w-container p-8">
      <Title text={forWho} small/>
      <div className="w-box m-auto">
        <div className={className} dangerouslySetInnerHTML={{ __html: content }}/>
      </div>
    </section>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content

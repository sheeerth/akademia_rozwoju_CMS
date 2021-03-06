import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Title from "../UI/Title";

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Course = ({course}) => {
    const [collapse, setCollapse] = useState(false);

    return (
        <div className="bg-yellow my-4 md:w-box m-auto p-4 rounded-lg transition-height">
            <div className="flex justify-between">
                <span className="block font-bold">{course.name}</span>
                <svg onClick={() => setCollapse(true)} xmlns="http://www.w3.org/2000/svg" className={`animate-bounce h-6 w-6 cursor-pointer ${collapse ? 'hidden' : 'block'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <svg onClick={() => setCollapse(false)} xmlns="http://www.w3.org/2000/svg" className={`animate-bounce h-6 w-6 cursor-pointer ${collapse ? 'block' : 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </div>
            <div className={`${collapse ? 'block' : 'hidden'} flex flex-col justify-between`}>
                <p className="mt-4 mr-8">
                    {course.description}
                </p>
                <div className="bg-blue p-4 text-white rounded-lg mt-4 font-medium">
                    <p>
                        {course.purpose}
                    </p>
                </div>
            </div>
        </div>
    );
};

const Content = ({ forWho, course, className, description, close }) => {
    const CourseElements = course ? course.map(el => {
        return (
           <Course course={el}/>
        )
    }) : [];

    return (
        <section className="m-auto md:w-container p-8">
            <Title text={forWho} small/>
            <div className="md:w-box m-auto">
                <div className={`offer_content ${className}`} dangerouslySetInnerHTML={{ __html: description }}/>
            </div>
            {CourseElements}
            <div className="md:w-box m-auto">
                <div className={`offer_content ${className}`} dangerouslySetInnerHTML={{ __html: close }}/>
            </div>
        </section>
    )
}

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content

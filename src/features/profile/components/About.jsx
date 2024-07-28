import PropTypes from 'prop-types';

const About = ({about}) => {
  return (
    <p className="text-gray-600 lg:text-[16px] md:text-[16px] text-sm lg:leading-[1.5] md:leading-[1.5] leading-[2]">{about ?? "No bio has been added"}</p>
  )
}

export default About

About.propTypes = {
  about: PropTypes.string
}
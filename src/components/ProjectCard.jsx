import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <a href="https://main--cryptoappproject.netlify.app/">{title}</a>
          <br />
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

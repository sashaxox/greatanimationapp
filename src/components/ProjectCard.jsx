import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, href }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <a href={href}>{title}</a>
          <br />
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

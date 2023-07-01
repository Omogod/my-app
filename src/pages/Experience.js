import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2019"
          iconStyle={{ background: "#2e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Benin, Benin City, Edo State, Nigeria.
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Industrial Chemistry</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Junior Full Stack Engineer/Associate - Decagon
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Sango-tedo, Lagos, Nigeria.
          </h4>
          <p>Developed a music application used for streaming music by 80% of developers in decagon with a team of talented engineers.</p>
          <p>Executed Projects With NodeJs, React, ExpressJS, GraphQL, Typescript, MongoDB, PostgreSQL which improved my understanding of these technologies by 80%. </p>
          <p>Handled Database Management Systems with SQL like MySQL and PostgreSQL, or NoSQL databases like MongoDB which helped upscale and increase application efficiency by 70%.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Backend Engineer(Intern/full-time) - Evea Africa
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            remote, Lagos, Nigeria.
          </h4>
          <p>Generated APIs and business logic services for the server side using typescript, node.Js and expressJs which is expected to raise server efficiency by 70%</p>
          <p>Implemented unit and integration testing process which is anticipated to enhance code quality and prevent future server crashes by 80%. </p>
          <p>Documented APIs using swagger to enable easy implementation of the user interface and experience. </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Engineer(Intern/full-time) - Yole Computers
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Benin, Nigeria.
          </h4>
          <p>Frontend Web/SaaS Developer. </p>
          <p>Designed highly interactive and responsive user-interfaces for clients which raise site performance by  70%. React..js, Javascript, CSS, Material UI, TailwindCSS.. </p>
          <p>Documented APIs using PostMan. </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Freelance/Remote and onsite Graphic/Product Designer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Benin, Edo State, Nigeria.
          </h4>
          <p>Created rich visual contents for clients from Ghana, Nigeria, Belgium, and Europe. </p>
          <p>Used a range of tools for creating Optimized contents for clients.</p>
          <p>Controlled printing and products delivery process increasing customer satisfaction by 80%, leading to high revenue generation.</p>
        </VerticalTimelineElement>

        
      </VerticalTimeline>
    </div>
  );
}

export default Experience;

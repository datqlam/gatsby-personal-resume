import React from 'react';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; //Add this line Here

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            <ul className="fa-ul mb-0">
                <li>
                <i className="fa-li fa fa-angle-double-right"></i>
                Full-stack developer under Agile Scrum methodology with CI/CD practices
                </li>
                <li>
                <i className="fa-li fa fa-angle-double-right"></i>
                Obtained Certifications in Oracle Java and AWS Solution Architect Associate
                </li>
                <li>
                <i className="fa-li fa fa-angle-double-right"></i>
                Strong understanding in Data Structures Algorithms, Design Patterns and Object-Oriented Systems
                </li>
                <li>
                <i className="fa-li fa fa-angle-double-right"></i>
                Enthusiast in architecture design both on premise and cloud
                </li>
            </ul>
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Full-stack Developer</h3>
              <div className="subheading mb-0">Arctiquator Malaysia - Alliance Bank</div>
              <p  className="mb-0">
                  <b>Project:</b> Account Opening Website
              </p>
              <p>
                  <b>Technologies:</b> ReactJS, React/Redux, NodeJS, Java, Spring, IBM Kubernetes, & Docker
              </p>
              <p>
                <ul className="fa-ul mb-0">
                    <li>
                    <i className="fa-li fa fa-angle-double-right"></i>
                    Developed a new website for Alliance Bank allowing customers to register online for opening bank accounts
                    </li>
                    <li>
                    <i className="fa-li fa fa-angle-double-right"></i>
                    Developed microservices with Java, Spring, Docker, IBM Kubernetes
                    </li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Dec 2018 - July 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Back-end Developer</h3>
              <div className="subheading mb-0">Arctiquator Malaysia - Hitachi</div>
              <p  className="mb-0">
                  <b>Project:</b> eBworx MPOS (Mobile Points of Sales)
              </p>
              <p>
                  <b>Technologies:</b> Oracle DB, SQL, PL/SQL, Java, Spring, Hibernate
              </p>
              <p>
                <ul className="fa-ul mb-0">
                    <li>
                    <i className="fa-li fa fa-angle-double-right"></i>
                    Designed database, batch jobs and schedulers to optimize processes for product sales 
                    </li>
                    <li>
                    <i className="fa-li fa fa-angle-double-right"></i>
                    Improved performance of batch processes by 20% via SQL tuning
                    </li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Mar 2018 - Dec 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Engineer</h3>
              <div className="subheading mb-0">Elca Vietnam</div>
              <p  className="mb-0">
                  <b>Project:</b> Human Resources and Insurance Management 
              </p>
              <p>
                  <b>Technologies:</b> Java, Oracle ADF, Oracle Database, SQL, PL/SQL, SOAP services, Agile Scrum, Atlassian tools (Jira, Confluence, Bitbucket, Crucible, Bamboo for automated build and application deployment), Manual testing (Unit, System and Regression) and JUnit
              </p>
              <p>
                <ul className="fa-ul mb-0">
                    <li>
                    <i className="fa-li fa fa-angle-double-right"></i>
                    Involved in all phases of SDLC in Agile Scrum team with CI/CD practices with Atlassian tools  
                    </li>
                    <li>
                    <i className="fa-li fa fa-angle-double-right"></i>
                    Developed and tested core with manual testing (Unit, System and Regression) and JUnit
                    </li>
                    <li>
                    <i className="fa-li fa fa-angle-double-right"></i>
                    Upgraded framework’s version to speed up application performance and subsequently resolved its impact on modules and interfaces
                    </li>
                    <li>
                    <i className="fa-li fa fa-angle-double-right"></i>
                    Documented coding practices and knowledge base of the project to reduce training time and to optimize development processes
                    </li>
                </ul>
              </p>
              <p  className="mb-0">
                  <b>Project:</b> Worklogs Management 
              </p>
              <p>
                  <b>Technologies:</b> Oracle JET (JavaScript extension toolkit), Restful API with Node.js, Express
              </p>
              <p>
                <ul className="fa-ul mb-0">
                    <li>
                    <i className="fa-li fa fa-angle-double-right"></i>
                    Developed and tested the application to collect, manage and analyze working hours of Agile Scrum team members in each Sprint  
                    </li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Dec 2014 - Mar 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Engineer</h3>
              <div className="subheading mb-0">Capgemini Vietnam</div>
              <p  className="mb-0">
                  <b>Project:</b> Virtual Visual Management
              </p>
              <p>
                  <b>Technologies:</b> Java, Spring, Hibernate, PostgreSQL, JavaScript, jQuery, Ajax
              </p>
              <p>
                <ul className="fa-ul mb-0">
                    <li>
                    <i className="fa-li fa fa-angle-double-right"></i>
                    Developed Kanban boards for flow and visual management 
                    </li>
                    <li>
                    <i className="fa-li fa fa-angle-double-right"></i>
                    Developed back-end RESTful services and front-end algorithms to move and arrange sticky notes on Kanban boards
                    </li>
                    <li>
                    <i className="fa-li fa fa-angle-double-right"></i>
                    Designed and developed the database
                    </li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Aug 2013 - Dec 2014</span>
            </div>
          </div>
        </div>

        
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">University of Windsor</h3>
              <div className="subheading mb-3">Master of Applied Computing</div>
              <div>Shool of Computer Science</div>
              <p>GPA: 87</p>
              <p>Courses completed December 2020: Available for 4/8-month Intern from Sep 2020</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Sep 2019 - Dec 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">University of Nottingham - Malaysia Campus</h3>
              <div className="subheading mb-3">Bachelor of Computer Science</div>
              <div>Shool of Computer Science</div>
              <p>1st Class</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Sep 2009 - May 2013</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Technical Skills
          </div>
          <ul className="fa-ul mb-3">
            <li>
              <i className="fa-li fa fa-check"></i>
              Programming Languages: Java 7/8, Python, C
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              AWS Services - AWS Solution Architect Associate
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Operating Systems: Linux, Windows
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Database Technologies: Oracle DB, SQL, PL/SQL, DB tuning, MongoDB
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Web Technologies: HTML, CSS, SASS, Bootstrap, Javascript, ReactJS, React/Redux
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Development Frameworks: Spring, Spring MVC, Spring Boot, Hibernate, Django MTV, Django REST, Oracle ADF
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Webservices: RESTful, SOAP
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Testing: Manual (Unit, Integration, and Regression), JUnit, Jest
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Project Management Tools: Atlassian Jira, Confluence
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              CI/CD Tools: Atlassian Bitbucket, Crucible and Bamboo; Git, SVN, Jenkins
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Build Tools: ANT, Maven
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="projects"
      >
        <div className="w-100">
          <h2 className="mb-5">Additional Projects</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fab fa-searchengin"></i>
              Web Crawler & Search Engine:<b> ReactJS, Java Spring Boot</b>
            </li>
            <li>
              <i className="fa-li fas fa-chalkboard"></i>
              React: Creating and Hosting a Full-Stack Site: <b>ReactJs, NodeJS, Express, MongoDB</b>
            </li>
            <li>
              <i className="fa-li fas fa-ambulance"></i>
              Stroke Recognition: <b>Machine Learning with Python, Django Rest, React Native</b>
            </li>
            <li>
              <i className="fa-li fas fa-store"></i>
              Purchasing Website for Online Courses: <b>Python, Django MTV Architecture</b>
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="certifications"
      >
        <div className="w-100">
          <h2 className="mb-5">Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fab fa-aws"></i>
              AWS Solution Architect Associated - 2020
            </li>
            <li>
              <i className="fa-li fab fa-java"></i>
              Oracle Java Certified Associated - 2017
            </li>
            <li>
              <i className="fa-li fab fa-java"></i>
              Oracle Java Certified Professional - 2016
            </li>
          </ul>
        </div>
      </section>
    </div>
    <div>
        <ScrollUpButton style={{outline:'none'}} />
    </div>
  </Layout>
  
);

export default IndexPage;

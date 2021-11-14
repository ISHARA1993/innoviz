/** @format */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },

  rootTwo: {
    backgroundColor: "#3ec1d5",
  },
}));

const Careers = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div id='itRecurit'>
      <div className=' area-padding-9'>
        <div className='container'>
          <div className='col-md-12 col-sm-12 col-xs-12'>
            <div className='section-headline text-center'>
              <h2>Careers</h2>
            </div>
            <div className='careers-area'>
              <h2>Open Positions</h2>
            </div>
            {/* Start vacancy Feature */}
            <div style={{ paddingBottom: "10px" }}>
              <div className={classes.root}>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}>
                  <AccordionSummary
                    className={classes.rootTwo}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1bh-content'
                    id='panel1bh-header'>
                    <div style={{ paddingTop: "5px" }}>
                      <h4 style={{ color: "white", fontWeight: "bold" }}>
                        IFS System Administrator
                      </h4>
                      <h6 style={{ color: "white" }}>Location: Sri Lanka</h6>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography paragraph>
                      <div className='careers-area'>
                        <p>
                          The IFS System Administrator is a technical/functional
                          role that is responsible for the day-to-day
                          administration and maintenance of the IFS ERP system.
                          They will act as the first point of contact with any
                          issues, understanding both the front and back -end of
                          the system. They are responsible for diagnosing and
                          resolving system issues, maintaining the database,
                          managing active users, and general system performance.
                        </p>
                        <h4>Daily Activities include:</h4>
                        <ul>
                          <li>
                            Create new user profiles, assign access rights,
                            modify existing user accounts, and deactivate any
                            non-users
                          </li>
                          <li>
                            Maintain the security integrity of the IFS ERP
                            system
                          </li>
                          <li>
                            Participate in on-call support of the system,
                            troubleshooting user issues
                          </li>
                          <li>
                            Review upgrade package notes, testing requirements,
                            and deliver pertinent information to team members
                          </li>
                          <li>
                            Management of ticketing system, to diagnose and
                            resolve system issues
                          </li>
                          <li>
                            Creation and administration of reports, including
                            Crystal, Quick Reports, and/or IFS Report Designer
                          </li>
                          <li>
                            Engage in preventative maintenance for the database
                          </li>
                          <li>
                            Maintenance and understanding of networks and
                            servers
                          </li>
                        </ul>
                        <h4>Qualifications: </h4>

                        <ul>
                          <li>
                            Required Work Authorization: Must be authorized to
                            work in the United States
                          </li>
                          <li>
                            1+ year of experience as an IFS Systems
                            Administrator
                          </li>
                          <li>Experience with SQL servers </li>
                          <li>Experience with Oracle </li>
                          <li>
                            Experience with IFS version 8 or above preferred{" "}
                          </li>
                          <li>
                            Strong customer service skills, including
                            communication, training, and support
                          </li>
                          <li>
                            Previous industry experience in Manufacturing,
                            Distribution, Aerospace, Defence, or Automotive, is
                            preferred
                          </li>
                          <li>Bachelor’s degree is preferred </li>
                        </ul>

                        <h5>Send your CV to admin@innoviz.io</h5>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            {/* End vacancy Feature */}
            <div style={{ paddingBottom: "10px" }}>
              <div className={classes.root}>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}>
                  <AccordionSummary
                    className={classes.rootTwo}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel2bh-content'
                    id='panel2bh-header'>
                    <div style={{ paddingTop: "5px" }}>
                      <h4 style={{ color: "white", fontWeight: "bold" }}>
                        Software Engineer
                      </h4>
                      <h6 style={{ color: "white" }}>Location: Sri Lanka</h6>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography paragraph>
                      <div className='careers-area'>
                        <p>
                          Innoviz is a software outsourcing company that is
                          focused on enterprise application developments, IFS
                          Services and WSO2 services. Innoviz is seeking a
                          talented Software Engineer who is having good
                          understanding and experience in Software Engineering
                          and development/maintenance life cycles.
                        </p>
                        <h4>Software Engineer Job Responsibilities</h4>
                        <ul>
                          <li>
                            Develops information systems by designing,
                            developing, testing, and installing software
                            solutions
                          </li>
                          <li>Investigates problem areas</li>
                          <li>Follows the software development lifecycle</li>
                          <li>
                            Documents and demonstrates solutions by developing
                            documentation, flowcharts, layouts, diagrams,
                            charts, code comments and clear code
                          </li>
                          <li>
                            Improves operations by conducting systems analysis
                            and recommending changes in policies and procedures
                          </li>
                          <li>
                            Protects operations by keeping information
                            confidential
                          </li>
                          <li>
                            Accomplishes engineering and organization mission by
                            completing requested tasks by management, customers,
                            partners and peers
                          </li>
                        </ul>
                        {/* <h4>Qualifications: </h4>

                        <ul>
                          <li>
                            Required Work Authorization: Must be authorized to
                            work in the United States
                          </li>
                          <li>
                            1+ year of experience as an IFS Systems
                            Administrator
                          </li>
                          <li>Experience with SQL servers </li>
                          <li>Experience with Oracle </li>
                          <li>
                            Experience with IFS version 8 or above preferred
                          </li>
                          <li>
                            Strong customer service skills, including
                            communication, training, and support
                          </li>
                          <li>
                            Previous industry experience in Manufacturing,
                            Distribution, Aerospace, Defence, or Automotive, is
                            preferred
                          </li>
                          <li>Bachelor’s degree is preferred </li>
                        </ul> */}

                        <h5>Send your CV to admin@innoviz.io</h5>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;

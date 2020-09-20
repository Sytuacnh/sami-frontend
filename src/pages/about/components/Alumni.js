import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import compose from 'recompose/compose'
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
// pop over
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from "components/CustomButtons/Button.jsx";
// import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';


import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Muted from "components/Typography/Muted.jsx";

import TordaB from "../../../static/about/alumni/TordaB.jpg";
import AnnastinaT from "../../../static/about/alumni/AnnastinaT.jpg";
import RayB from "../../../static/about/alumni/RayB.jpg";
import BrandonR from "../../../static/about/alumni/BrandonR.jpg";
import JennaT from "../../../static/about/alumni/JennaT.jpg";


import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";

const styles = theme => ({
  typography: {
    margin: theme.spacing(5),
  },
  popOverFontSize: {
    fontSize: "16px"
  },
  paddingTopShrink: {
    paddingTop: "-50px"
  }
});

class Alumni extends PureComponent {

    render() {
        const {
            classes,
        }  = this.props;

        return (
            <div id="alumni" className={classes.team}>
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={
                      classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
                    }
                  >
                    <h2 className={classes.title}>Alumni Association</h2>
                    <h5 className={classes.description}>
                        The SaMi Alumni Association is composed of tutors who have graduated from high school. Their hard work and dedication will be remembered by us. SaMi alumni all go to the best colleges in our country and have a bright future ahead of them. 
                    </h5>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={TordaB} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Torda B.</h4>
                        <p className={classes.description}>Duke University Class 2024</p>
                        <PopupState variant="popover" popupId="demo-popup-popover">
                              {popupState => (
                                <div>
                                  <Button color="rose" size="sm" variant="contained" {...bindTrigger(popupState)}>
                                    About me
                                  </Button>
                                  <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                      vertical: 'bottom',
                                      horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                      vertical: 'top',
                                      horizontal: 'center',
                                    }}
                                  >
                                    <Typography className={classes.typography}>
                                        <p className={classNames(classes.description, classes.popOverFontSize)}>
                                            Torda is part of the Class of 2024 at Duke University. He has participated in various academic competitions, including MATHCOUNTS, AMC, UIL, and Science Bowl. Having been taught math at home, Torda gained an appreciation for it at a young age and understands how important mastering the subject is. Furthermore, he believes that SaMi is the perfect opportunity for students of all ages to not only learn but to also enjoy mathematics.
                                        </p>
                                    </Typography>
                                  </Popover>
                                </div>
                              )}
                            </PopupState>

                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={RayB} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Ray B.</h4>
                        <p className={classes.description}>University of Virginia Class 2024</p>
                        <PopupState variant="popover" popupId="demo-popup-popover">
                              {popupState => (
                                <div>
                                  <Button color="rose" size="sm" variant="contained" {...bindTrigger(popupState)}>
                                    About me
                                  </Button>
                                  <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                      vertical: 'bottom',
                                      horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                      vertical: 'top',
                                      horizontal: 'center',
                                    }}
                                  >
                                    <Typography className={classes.typography}>
                                        <p className={classNames(classes.description, classes.popOverFontSize)}>
                                            Ray is part of the Class of 2024 at the University of virginia. He started to participate math competitions during middle school years and have been qualified for AIME since 9th grade. Besides math, his favorite subjects include computer science and biology. He is also actively involved in programming competitions. He is in USACO Platinum division. However, peer tutoring on math and computer science is the most rewarding experience for him.
                                        </p>
                                    </Typography>
                                  </Popover>
                                </div>
                              )}
                            </PopupState>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={BrandonR} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Brandon R.</h4>
                        <p className={classes.description}>Rice University Class 2024</p>
                        <PopupState variant="popover" popupId="demo-popup-popover">
                              {popupState => (
                                <div>
                                  <Button color="rose" size="sm" variant="contained" {...bindTrigger(popupState)}>
                                    About me
                                  </Button>
                                  <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                      vertical: 'bottom',
                                      horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                      vertical: 'top',
                                      horizontal: 'center',
                                    }}
                                  >
                                    <Typography className={classes.typography}>
                                        <p className={classNames(classes.description, classes.popOverFontSize)}>
                                            Brandon is part of the Class of 2024 at Rice University. He is a dedicated student who works to complete what he starts. Brandon has taken math classes through Calculus BC, including Statistics. He also enjoys physics, engineering, and computer science. Brandon has tutored many subjects before, especially in various math subjects When he isn’t working on his education, Brandon enjoys various strategy and skill games such as the Civilization series and Magic: The Gathering. 
                                        </p>
                                    </Typography>
                                  </Popover>
                                </div>
                              )}
                            </PopupState>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={AnnastinaT} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Annastina T.</h4>
                        <p className={classes.description}>MIT Class 2024</p>
                        <PopupState variant="popover" popupId="demo-popup-popover">
                              {popupState => (
                                <div>
                                  <Button color="rose" size="sm" variant="contained" {...bindTrigger(popupState)}>
                                    About me
                                  </Button>
                                  <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                      vertical: 'bottom',
                                      horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                      vertical: 'top',
                                      horizontal: 'center',
                                    }}
                                  >
                                    <Typography className={classes.typography}>
                                        <p className={classNames(classes.description, classes.popOverFontSize)}>
                                            Annastina will be the Class of 2020 at MIT. She is excited to help you on your math journey!  She has taken math classes through AP Calculus BC, and is currently taking AP Statistics.  Her favorite science classes are physics and computer science.   Annastina has competed in Science Bowl, participates in CyberPartriots and has presented her science fair projects at various levels, including the Intel International Science & Engineering Fair.  In her extra time, she plays the piano and follows sports and their related statistics like a crazy fan girl!  Annastina enjoys helping others with any subject… math, language, or the sciences, and has two younger brothers who, willingly or not, are recipients of her tutoring!
                                        </p>
                                    </Typography>
                                  </Popover>
                                </div>
                              )}
                            </PopupState>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={3} md={3}>
                    <Card profile plain>
                      <CardAvatar profile plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={JennaT} alt="..." className={classes.img} />
                        </a>
                      </CardAvatar>
                      <CardBody>
                        <h4 className={classes.cardTitle}>Jenna T.</h4>
                        <p className={classes.description}>Swarthmore College Class 2024</p>
                        <PopupState variant="popover" popupId="demo-popup-popover">
                              {popupState => (
                                <div>
                                  <Button color="rose" size="sm" variant="contained" {...bindTrigger(popupState)}>
                                    About me
                                  </Button>
                                  <Popover
                                    {...bindPopover(popupState)}
                                    anchorOrigin={{
                                      vertical: 'bottom',
                                      horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                      vertical: 'top',
                                      horizontal: 'center',
                                    }}
                                  >
                                    <Typography className={classes.typography}>
                                        <p className={classNames(classes.description, classes.popOverFontSize)}>
                                            Jenna is part of the Class of 2024 at Swarthmore College. She graduated as Valedictorian from Basis San Antonio Shavano. Having tutored during student hours and independently outside of school, she has experience in a variety of subjects, including math, biology, chemistry, and Latin. When she’s not studying, you can find her making music, reading, or cuddling with her cat. In the fall, Jenna will be attending Swarthmore College as a QuestBridge Scholar and member of the Class of 2024, and plans to double-major in Psychology and Musical Theatre.
                                        </p>
                                    </Typography>
                                  </Popover>
                                </div>
                              )}
                            </PopupState>
                      </CardBody>
                    </Card>
                  </GridItem>

				  </GridContainer>
              </div>
            </div>
        );
    }

}

export default compose(
    withStyles(styles),
    withStyles(teamsStyle),
)(Alumni)
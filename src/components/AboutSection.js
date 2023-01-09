import React from "react";
import styled from "styled-components";
import Button from "./Button";
import PText from "./PText";
// import SectionTitle from "./SectionTitle";
//import AboutImg from '../assets/images/about-sec-img.png';
//import { Link } from "react-router-dom";
//import AboutImg from "../assets/images/about-page-img.png";
import AboutInfoItem from "../components/AboutInfoItem";
// import ContactBanner from "../components/ContactBanner";
import myCV from "../assets/data/cv/CV__Shvets.pdf";
//import myCV from './CV__Shvets.pdf'

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    // align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    // margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }

  .download__link {
    font-size: 2.2rem;
    background-color: var(--gray-1);
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: black;

    @media only screen and (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;

// const AboutSectionStyles = styled.div`
//   padding: 10rem 0;
//   .container {
//     display: flex;
//     align-items: center;
//     justify-content: flex-start;
//     text-align: left;
//   }
//   .aboutSection__left,
//   .aboutSection__right {
//     flex: 1;
//   }
//   .section-title {
//     text-align: left;
//   }
//   .para {
//     margin-top: 2rem;
//     margin-left: 0;
//   }
//   .aboutSection__buttons {
//     display: flex;
//     align-items: center;
//     justify-content: flex-start;
//     gap: 2rem;
//     margin-top: 2rem;
//   }
//   @media only screen and (max-width: 950px) {
//     .aboutSection__left {
//       flex: 4;
//     }
//     .aboutSection__right {
//       flex: 3;
//     }
//   }
//   @media only screen and (max-width: 768px) {
//     .container {
//       flex-direction: column;
//       text-align: center;
//     }
//     .aboutSection__left,
//     .aboutSection__right {
//       width: 100%;
//     }
//     .aboutSection__right {
//       margin-top: 3rem;
//     }
//     .section-title {
//       text-align: center;
//     }
//     .para {
//       margin: 0 auto;
//       margin-top: 2rem;
//     }
//     .aboutSection__buttons {
//       flex-direction: column;
//       gap: 0rem;
//       .button-wrapper,
//       a {
//         width: 100%;
//         text-align: center;
//       }
//     }
//   }
// `;

export default function AboutSection() {
  return (
    <>
      {/* <AboutSectionStyles>
        <div className="container">
          <div className="aboutSection__left">
            <SectionTitle
              subheading="Let me introduce myself"
              heading="About Me"
            />
            <PText>
              I am a Frontend developer. I create professional app with
              JavaScript and React.
            </PText>
            <div className="aboutSection__buttons">
              <Button btnText="Works" btnLink="/projects" />
              <Button btnText="CV" btnLink="/about" outline />
            </div>
          </div>
          <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
        </div>
      </AboutSectionStyles> */}
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Anton Shvets</span>
              </p>
              <h2 className="about__heading">A Web developer</h2>
              <div className="about__info">
                <PText>
                  I am a Frontend developer. I create professional app with
                  JavaScript and React.
                </PText>
              </div>
              {/* <Button btnText="Download CV" btnLink="#" /> */}
              <a
                href={myCV}
                download="CV__Shvets.pdf"
                className="download__link"
              >
                Download CV
              </a>
              <div className="aboutSection__buttons">
                <Button btnText="Works" btnLink="/projects" outline />
                {/* <Button btnText="CV" btnLink="/about" outline /> */}
              </div>
            </div>
            <div className="left">
              {/* <img src={AboutImg} alt="me" /> */}
              <div className="about__info__items">
                <div className="about__info__item">
                  <h1 className="about__info__heading">My Skills</h1>

                  <AboutInfoItem
                    title="FrontEnd"
                    items={[
                      "HTML",
                      "CSS",
                      "JavaScript",
                      "React",
                      "TypeScript",
                      "Redux",
                    ]}
                  />
                  <AboutInfoItem
                    title="BackEnd"
                    items={["PHP", "Node", "Express"]}
                  />
                  <AboutInfoItem
                    title="Design"
                    items={[ "Figma", "Photoshop", "After Effects"]}
                  />
                </div>
                <div className="about__info__item">
                  <h1 className="about__info__heading">Experiences</h1>
                  <AboutInfoItem
                    title="2020-2021"
                    items={["FullStack developer "]}
                  />
                  <AboutInfoItem
                    title="2021-"
                    items={["Frontend developer, React"]}
                  />
                </div>
                <div className="right">
                  <div className="about__info__item">
                    <h1 className="about__info__heading">Education</h1>

                    <AboutInfoItem
                      title="School"
                      items={["High School, Russia"]}
                    />
                    <AboutInfoItem
                      title="University"
                      items={["Moscow Polytechnic University"]}
                    />
                    <AboutInfoItem
                      title="Courses"
                      items={["Innopolis university"]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}

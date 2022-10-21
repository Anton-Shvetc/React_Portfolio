import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
import PText from "../components/PText";
import Button from "../components/Button";
//import AboutImg from "../assets/images/about-page-img.png";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";
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

export default function About() {
  return (
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
                Lorem
                <br /> <br />
                Lorem
                <br />
                <br />
                Lorem
              </PText>
            </div>
            {/* <Button btnText="Download CV" btnLink="#" /> */}
            <a href={myCV} download="CV__Shvets.pdf" className="download__link">
              Download CV
            </a>
          </div>
          <div className="left">
            {/* <img src={AboutImg} alt="me" /> */}
            <div className="about__info__items">
              <div className="about__info__item">
                <h1 className="about__info__heading">My Skills</h1>

                <AboutInfoItem
                  title="FrontEnd"
                  items={["HTML", "CSS", "JavaScript", "React"]}
                />
                <AboutInfoItem
                  title="BackEnd"
                  items={["Node", "Express", "PHP"]}
                />
                <AboutInfoItem
                  title="Design"
                  items={["Photoshop", "After Effects", "Figma"]}
                />
              </div>
              <div className="about__info__item">
                <h1 className="about__info__heading">Experiences</h1>

                {/* <AboutInfoItem
              title="2010-2012"
              items={["junior developer "]}
            /> */}
                <AboutInfoItem
                  title="2019-2021"
                  items={["FullStack developer "]}
                />
                <AboutInfoItem
                  title="2021-"
                  items={["Frontend developer, React"]}
                />
              </div>
              <div className="about__info__item">
                <h1 className="about__info__heading">Education</h1>

                <AboutInfoItem title="School" items={["High School, Russia"]} />
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
        {/* <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">Education</h1>

            <AboutInfoItem title="School" items={["High School, Russia"]} />
            <AboutInfoItem
              title="University"
              items={["Moscow Polytechnic University"]}
            />
            <AboutInfoItem title="Courses" items={["Innopolis university"]} />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>

            <AboutInfoItem
              title="FrontEnd"
              items={["HTML", "CSS", "JavaScript", "React"]}
            />
            <AboutInfoItem title="BackEnd" items={["Node", "Express", "PHP"]} />
            <AboutInfoItem
              title="Design"
              items={["Photoshop", "After Effects", "Figma"]}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">Experiences</h1>

            {/* <AboutInfoItem
              title="2010-2012"
              items={["junior developer "]}
            /> 
             <AboutInfoItem
              title="2019-2021"
              items={["FullStack developer "]}
            />
            <AboutInfoItem title="2021-" items={["Frontend developer, React"]} />
          </div>
        </div>  */}
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}

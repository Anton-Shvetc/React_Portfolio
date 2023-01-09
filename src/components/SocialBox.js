import React from "react";
import styled from "styled-components";
import { BsTwitter } from "react-icons/md";
import {
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
// import Icon, { Telegram } from "react-share-icons";
// import Icon, { Telegram } from "react-share-icons";
// import Instagram from "react-share-icons/lib/Instagram";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fa-brands, fa-telegram } from "@fortawesome/free-solid-svg-icons";

import {
  faCheckSquare,
  faCoffee,
  faTelegram,
} from "@fortawesome/fontawesome-free-solid";
import { TelegramIcon } from "../assets/icons/TelergamIcon";

const SocialStyles = styled.div`
  display: flex;

  flex-direction: column;
  gap: 2rem;
  position: fixed;
  top: 120px;
  right: 50px;
  width: 50px;
  z-index: 100;

  .hero__social {
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        // display: flex;
        height: 4rem;
        align-items: center;
        margin-bottom: 1rem;
        border: 1px solid white;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
          font-size: 1.6rem;
          letter-spacing: 5px;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;

    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function SocialBox() {
  return (
    <div className="container">
      <SocialStyles>
        <div className="hero__social__text">
          <ul>
            <li>
              <a
                href="https://github.com/Anton-Shvetc"
                target="_blank"
                rel="noreferrer"
              >
                <GithubOutlined />
              </a>
            </li>

            <li>
              <a
                href="https://t.me/AntonShvetc"
                target="_blank"
                rel="noreferrer"
              >
                <TelegramIcon />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/antonshvetc/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinOutlined />
              </a>
            </li>
          </ul>
        </div>
      </SocialStyles>
    </div>
  );
}

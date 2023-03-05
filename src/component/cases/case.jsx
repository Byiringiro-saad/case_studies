import React from "react";
import styled from "styled-components";

//images
import client from "../../assets/maxx.png";
import pla_1 from "../../assets/pla_1.png";
import pla_2 from "../../assets/pla_2.png";
import pla_3 from "../../assets/pla_3.png";

const Case = () => {
  return (
    <Container>
      <div className="head">
        <p>Digital strategy and implementation for a health tech startup</p>
      </div>
      <div className="about">
        <div className="client">
          <img src={client} alt="client" />
          <div className="more">
            <p>
              <span>Location:</span> India
            </p>
            <p>
              <span>Website:</span> www.maxxwellness.com
            </p>
          </div>
        </div>
        <div className="desc">
          <p>
            <span>Project background:</span> A health and wellness startup
            providing holistic wellness programs was looking for a partner to
            develop and implement digital strategy.
          </p>
        </div>
      </div>
      <div className="what">
        <div className="problem">
          <p className="title">Problem statement</p>
          <ul>
            <li>No digital infrastructure</li>
            <li>Zero presence in social media</li>
            <li>Aligning with brand strategy of family wellness</li>
            <li>Limited marketing budget</li>
          </ul>
        </div>
        <div className="solution">
          <p className="title">Solutions</p>
          <ul>
            <li>Developed a digital strategy plan for next 3 years</li>
            <li>
              Digital infrastructure setup (Website upgrade, chatbot
              implementation, Performance optimization, SEO audit and
              Optimization and Social media setup)
            </li>
            <li>Branding and awareness campaigns, Follower campaigns</li>
            <li>Lead generation, ORM, Minimal Viable Campaign</li>
            <li>Growth hacking and influencer marketing</li>
          </ul>
        </div>
      </div>
      <div className="what">
        <div className="problem">
          <p className="title">Challenges</p>
          <ul>
            <li>Pandemic impact</li>
            <li>Competitive environment</li>
            <li>Limited marketing budget</li>
          </ul>
        </div>
        <div className="platforms">
          <p className="title">Platforms and tools used</p>
          <ul>
            <li>
              <img src={pla_1} alt="one" />
            </li>
            <li>
              <img src={pla_2} alt="one" />
            </li>
            <li>
              <img src={pla_3} alt="one" />
            </li>
          </ul>
        </div>
      </div>
      <div className="results">
        <p className="title">Results</p>
        <div className="boxes">
          <div className="box">
            <p>Increase in overall visibility of brand online</p>
          </div>
          <div className="box">
            <p>
              Engagement with prospective audience on website and other digital
              channels
            </p>
          </div>
          <div className="box">
            <p>
              Acquired 1000+ new customers in First 6 months (20% more) as per
              the plan within planned budget
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  .head {
    width: 100%;
    height: auto;
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    p {
      font-size: 1.2em;
      font-weight: 600;
      color: var(--dark);
    }
  }

  .about {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid var(--gray);
    padding: 0 0 20px 0;

    .client {
      width: 100%;
      height: 100px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;

      img {
        margin: 0 20px 0 0;
      }

      .more {
        width: auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        p {
          line-height: 30px;
          color: var(--gray);

          span {
            color: var(--dark);
            font-weight: 700;
          }
        }
      }
    }

    .desc {
      width: 100%;
      margin: 10px 0 0 0;

      p {
        color: var(--gray);

        span {
          font-weight: 700;
          color: var(--dark);
        }
      }
    }
  }

  .what {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    padding: 30px 0 30px 0;
    border-bottom: 1px solid var(--gray);

    .problem {
      width: 45%;
      height: auto;
      display: flex;
      flex-direction: column;

      p.title {
        font-weight: 700;
        margin: 0 0 10px 0;
      }

      ul {
        width: 100%;
        height: auto;
        display: flex;
        margin: 0 0 0 20px;
        flex-direction: column;

        li {
          color: var(--gray);
        }
      }
    }

    .solution {
      width: 55%;
      height: auto;
      display: flex;
      flex-direction: column;

      p.title {
        font-weight: 700;
        margin: 0 0 10px 0;
      }

      ul {
        width: 100%;
        height: auto;
        display: flex;
        margin: 0 0 0 20px;
        flex-direction: column;

        li {
          color: var(--gray);
        }
      }
    }

    .platforms {
      width: 55%;
      height: auto;
      display: flex;
      flex-direction: column;

      p.title {
        font-weight: 700;
        margin: 0 0 10px 0;
      }

      ul {
        list-style: none;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
      }
    }
  }

  .results {
    width: 100%;
    height: auto;
    display: flex;
    padding: 30px 0 5px 0;
    flex-direction: column;

    p.title {
      font-weight: 700;
      margin: 0 0 10px 0;
    }

    .boxes {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .box {
        width: 32%;
        height: 100px;
        padding: 15px;
        background: #f2f2f2;

        p {
          color: var(--gray);
        }
      }
    }
  }
`;

export default Case;

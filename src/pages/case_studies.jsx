import React from "react";
import styled from "styled-components";

//images
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import five from "../assets/five.png";

const Case_Studies = () => {
  return (
    <Container>
      <div className="header">
        <p className="title">
          A quick snapshot of <span>work done</span> by us
        </p>
        <p className="para">
          We have worked on building and managing AI enterprise applications
          across multiple domains: financial services, banking, legal, sales,
          healthcare, media and entertainment, e-commerce and surveillance
        </p>
      </div>
      <div className="domains">
        <p className="title">
          We specialize in the following technical domains
        </p>
        <div className="content">
          <div className="box">
            <img src={one} alt="one" />
            <p>NLP</p>
          </div>
          <div className="box">
            <img src={two} alt="two" />
            <p>Computer Vision</p>
          </div>
          <div className="box">
            <img src={three} alt="three" />
            <p>Audio</p>
          </div>
          <div className="box">
            <img src={four} alt="four" />
            <p>Multimodal</p>
          </div>
          <div className="box">
            <img src={five} alt="five" />
            <p>Reinforcement Learning </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0 0 0;

  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }

  @media only screen and (max-width: 1200px) {
    width: 90%;
  }

  .header {
    width: 70%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 30px 0;

    p.title {
      font-size: 2em;
      font-weight: 800;
      color: var(--dark);
      margin: 20px 0;

      span {
        color: var(--blue);
      }
    }

    p.para {
      text-align: center;
      color: var(--gray);
    }
  }

  .domains {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;

    p.title {
      font-size: 1.1em;
      font-weight: 700;
      margin: 0 0 25px 0;
    }

    .content {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .box {
        p {
          color: var(--gray);
          margin: 5px 0 0 0;
        }
      }
    }
  }
`;

export default Case_Studies;

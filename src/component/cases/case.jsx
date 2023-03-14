import React from "react";
import styled from "styled-components";

const Case = (props) => {
  return (
    <Container>
      <div className="head">
        <p>{props?.case?.title}</p>
      </div>
      <div className="about">
        <div className="client">
          <img src={props?.case?.logo} alt="client" />
          <div className="more">
            <p>
              <span>Location:</span> {props?.case?.location}
            </p>
            <p>
              <span>Website:</span> {props?.case?.website}
            </p>
          </div>
        </div>
        <div className="desc">
          <p>
            <span>Project background:</span> {props?.case?.background}
          </p>
        </div>
      </div>
      <div className="what">
        <div className="problem">
          <p className="title">Problem statement</p>
          <ul>
            {props?.case?.problems?.map((item, _) => (
              <li key={_}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="solution">
          <p className="title">Solutions</p>
          <ul>
            {props?.case?.solutions?.map((item, _) => (
              <li key={_}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="what">
        <div className="problem">
          <p className="title">Challenges</p>
          <ul>
            {props?.case?.challenges?.map((item, _) => (
              <li key={_}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="platforms">
          <p className="title">Platforms and tools used</p>
          <ul>
            {props?.case?.platforms?.map((item, _) => (
              <li key={_}>
                <img src={item} alt="one" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="results">
        <p className="title">Results</p>
        <div className="boxes">
          {props?.case?.results?.map((item, _) => (
            <div key={_} className="box">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 500px;
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

      @media only screen and (max-width: 480px) {
        height: 150px;
        flex-direction: column;
        align-items: flex-start;
      }

      img {
        width: 120px;
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

    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }

    .problem {
      width: 45%;
      height: auto;
      display: flex;
      flex-direction: column;

      @media only screen and (max-width: 768px) {
        width: 100%;
        margin: 0 0 20px 0;
      }

      p.title {
        font-weight: 700;
        margin: 0 0 10px 0;
      }

      ul {
        width: 85%;
        height: auto;
        display: flex;
        margin: 0 0 0 20px;
        flex-direction: column;

        @media only screen and (max-width: 768px) {
          width: 100%;
        }

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

      @media only screen and (max-width: 768px) {
        width: 100%;
      }

      p.title {
        font-weight: 700;
        margin: 0 0 10px 0;
      }

      ul {
        width: 85%;
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
        width: 85%;
        list-style: none;
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

      @media only screen and (max-width: 768px) {
        flex-direction: column;
      }

      .box {
        width: 32%;
        min-height: 100px;
        padding: 15px;
        background: #f2f2f2;

        @media only screen and (max-width: 768px) {
          width: 90%;
          margin: 0 0 20px 0;
        }

        p {
          color: var(--gray);
        }
      }
    }
  }
`;

export default Case;

import styled from "styled-components";
import React, { useEffect } from "react";
import { collection, getDocs, getFirestore } from "@firebase/firestore";

//images
import one from "../assets/one.png";
import two from "../assets/two.png";
import four from "../assets/four.png";
import five from "../assets/five.png";
import three from "../assets/three.png";

//features
import app from "../features/firebase";

//components
import Cases from "../component/cases/cases";

const Case_Studies = () => {
  //configs
  const firestore = getFirestore(app);

  //local data
  const [types, setTypes] = React.useState([]);
  const [activeCase, setActiveCase] = React.useState(null);

  const handleActiveType = (type) => {
    setActiveCase(type);
  };

  useEffect(() => {
    getDocs(collection(firestore, "types")).then((data) => {
      let docs = data?.docs;
      let types = [];
      docs?.forEach((doc) => {
        types.push({ id: doc.id, name: doc?.data().name });
      });
      setTypes(types);
      setActiveCase(types[0]);
    });
  }, []);

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
            {/* <img src={one} alt="one" /> */}
            <p>NLP</p>
          </div>
          <div className="box">
            {/* <img src={two} alt="two" /> */}
            <p>Computer Vision</p>
          </div>
          <div className="box">
            {/* <img src={three} alt="three" /> */}
            <p>Audio</p>
          </div>
          <div className="box">
            {/* <img src={four} alt="four" /> */}
            <p>Multimodal</p>
          </div>
          <div className="box">
            {/* <img src={five} alt="five" /> */}
            <p>Reinforcement Learning </p>
          </div>
        </div>
      </div>
      <div className="cases">
        <ul className="nav">
          {types?.map((item, _) => (
            <li
              key={_}
              onClick={() => handleActiveType(item)}
              className={item?.id === activeCase?.id ? "active" : ""}
            >
              {item?.name}
            </li>
          ))}
        </ul>
        <div className="case">
          <Cases activeType={activeCase} />
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
    width: 100%;
    align-items: center;
  }

  .header {
    width: 70%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 30px 0;

    @media only screen and (max-width: 768px) {
      width: 85%;
    }

    @media only screen and (max-width: 480px) {
      width: 97%;
    }

    p.title {
      font-size: 2em;
      font-weight: 800;
      color: var(--dark);
      margin: 20px 0;
      text-align: center;

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
      font-size: 1.2em;
      font-weight: 700;
      margin: 0 0 25px 0;

      @media only screen and (max-width: 480px) {
        text-align: center;
      }
    }

    .content {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      @media only screen and (max-width: 1024px) {
        flex-wrap: wrap;
      }

      @media only screen and (max-width: 768px) {
        width: 80%;
      }

      @media only screen and (max-width: 480px) {
        width: 97%;
      }

      .box {
        @media only screen and (max-width: 1200px) {
          img {
            width: 170px;
          }
        }

        @media only screen and (max-width: 1024px) {
          margin: 0 0 10px 0;
        }

        p {
          color: var(--gray);
          margin: 5px 0 0 0;
        }
      }
    }
  }

  .cases {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 30px 0 50px 0;
    padding: 0 20px;

    @media only screen and (max-width: 1024px) {
      flex-direction: column;
    }

    .nav {
      width: 20%;
      height: auto;
      display: flex;
      flex-direction: column;

      @media only screen and (max-width: 1024px) {
        width: calc(100vw - 40px);
        height: 50px;
        flex-direction: row;
        overflow: scroll;
        white-space: nowrap;
        margin: 0 0 20px 0;
      }

      li {
        list-style: none;
        line-height: 50px;
        margin: 5px 0;
        padding: 0 0 0 5px;
        color: var(--dark);
        border-bottom: 1px dashed var(--gray);
        cursor: pointer;

        @media only screen and (max-width: 1024px) {
          width: auto;
          margin: 0;
          padding: 0;
          line-height: normal;
          display: inline-block;
          padding: 0 20px;
        }

        :hover {
          color: var(--blue);
        }
      }

      li.active {
        color: var(--blue);
        border-bottom: 1px solid var(--blue);
      }
    }

    .case {
      width: 78%;
      height: auto;

      @media only screen and (max-width: 1024px) {
        width: 100%;
      }
    }
  }
`;

export default Case_Studies;

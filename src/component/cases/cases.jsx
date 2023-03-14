import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, getDoc } from "firebase/firestore";

//icons
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

//features
import app from "../../features/firebase";

//components
import Case from "./case";

const Cases = ({ activeType }) => {
  //configs
  const firestore = getFirestore(app);

  //local data
  const [index, setIndex] = useState(0);
  const [cases, setCases] = useState([]);
  const activeCases = cases.filter(
    (item) => item.type.toLowerCase() === activeType
  );

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? activeCases?.length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= activeCases?.length ? 0 : newIndex);
  };

  useEffect(() => {
    getDocs(collection(firestore, "cases")).then((data) => {
      let docs = data?.docs;
      docs?.forEach((doc) => {
        getDoc(doc?.data().type).then((data) => {
          setCases((prev) => [
            ...prev,
            { ...doc?.data(), type: data?.data()?.name },
          ]);
        });
      });
    });
  }, []);

  return (
    <Container>
      <div className="top">
        <div className="direction" onClick={handlePrevious}>
          <BiChevronLeft />
        </div>
        <p className="title">{activeCases[index]?.company}</p>
        <div className="direction" onClick={handleNext}>
          <BiChevronRight />
        </div>
      </div>
      <div className="content">
        {activeCases.length === 0 ? (
          <div className="none">
            <p>...</p>
          </div>
        ) : (
          <Case case={activeCases[index]} data={activeCases[index]} />
        )}
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
  padding: 20px 0;
  background: var(--whitish);
  border-radius: 5px;

  .top {
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;

    p.title {
      font-weight: 800;
      text-transform: uppercase;
    }

    .direction {
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      background: var(--white);
      cursor: pointer;
    }
  }

  .content {
    width: 100%;
    height: auto;

    .none {
      width: 100%;
      height: 700px;
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        line-height: 100px;
        font-size: 1.2em;
        color: var(--dark);
      }
    }
  }
`;

export default Cases;

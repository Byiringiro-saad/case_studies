import styled from "styled-components";
import React, { useState } from "react";

//icons
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

//components
import Case from "./case";
import { useSelector } from "react-redux";

const Cases = ({ activeType }) => {
  //local data
  const [index, setIndex] = useState(0);

  //cases
  const cases = useSelector((state) => state.cases.cases);
  const activeCases = cases.filter((item) => item.type === activeType);

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? activeCases?.length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= activeCases?.length ? 0 : newIndex);
  };

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
          <>
            {activeCases.map((item, _) => {
              return (
                index === item?.id && <Case key={_} case={item} data={item} />
              );
            })}
          </>
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

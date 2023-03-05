import React from "react";
import styled from "styled-components";

//icons
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

//components
import Case from "./case";

const Cases = () => {
  return (
    <Container>
      <div className="top">
        <div className="direction">
          <BiChevronLeft />
        </div>
        <p className="title">MAXX</p>
        <div className="direction">
          <BiChevronRight />
        </div>
      </div>
      <div className="content">
        <Case />
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
  }
`;

export default Cases;

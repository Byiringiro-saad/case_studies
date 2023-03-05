import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <Container>
      <div className="logo">
        <p>
          ML<span>O</span>
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 70px;
  display: flex;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }

  @media only screen and (max-width: 1200px) {
    width: 90%;
  }

  .logo {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    p {
      font-size: 1.3rem;
      font-weight: 800;
      color: var(--dark);

      span {
        color: var(--blue);
      }
    }
  }
`;

export default Nav;

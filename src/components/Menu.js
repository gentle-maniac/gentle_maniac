import { useEffect, useState } from "react";
import styled from "styled-components";
import { device } from "../styles";
import { toFit } from "../utils";

export const Menu = ({ scrollTo }) => {
  const [scrollY, setScrollY] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const listener = toFit((e) => {
      const nextSrollY = e.target.scrollTop;
      setHide(nextSrollY > scrollY);
      setScrollY(nextSrollY);
    });

    const $parallax = document.querySelector(".parallax");
    $parallax.addEventListener("scroll", listener);
    return () => $parallax.removeEventListener("scroll", listener);
  }, [scrollY]);

  return (
    <Wrapper>
      {menuData.map(({ text, to }, i) => (
        <p key={i} className={hide ? "hide" : ""} onClick={() => scrollTo(to)}>
          {text}
        </p>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media ${device.mobile} {
    display: none;
  }
  position: absolute;
  top: 2rem;
  right: 1.5rem;
  z-index: 1000;

  & > p {
    color: white;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    text-align: right;

    &:hover {
      font-family: NanumSquareBold;
    }
  }

  .hide {
    transform: translateY(40px);
    opacity: 0;
    visibility: hidden;
  }
`;

const menuData = [
  {
    to: 0,
    text: "젠틀메니악",
  },
  {
    to: 2,
    text: "인사말",
  },
  {
    to: 3,
    text: "비전",
  },
  {
    to: 4.0,
    text: "인재상",
  },
  {
    to: 6.5,
    text: "복지",
  },
];

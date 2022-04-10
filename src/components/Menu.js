import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { Img } from "../assets";
import { device } from "../styles";

export const Menu = ({ scrollTo }) => {
  const [hide, setHide] = useState(false);

  const onClickMenu = (to) => {
    setHide(true);
    scrollTo(to);
  };

  return (
    <Wrapper>
      <div className="icon" onClick={() => setHide(!hide)}>
        <Image
          src={hide ? Img.메뉴아이콘 : Img.메뉴닫기아이콘}
          alt="메뉴"
          width={40}
          height={40}
        />
      </div>

      <div className={`container ${hide ? "hide" : ""}`}>
        {menuData.map(({ text, to }, i) => (
          <p key={i} onClick={() => onClickMenu(to)}>
            {text}
          </p>
        ))}
      </div>
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
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .icon {
    cursor: pointer;
  }

  .container {
    margin-top: 0.5rem;
    transition: all 200ms ease-in-out;
    user-select: none;
    text-align: end;
  }

  p {
    color: white;
    cursor: pointer;

    &:hover {
      font-family: NanumSquareBold;
    }
  }

  .hide {
    transform: translateX(40px);
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
    to: 7,
    text: "복지",
  },
  {
    to: 8.8,
    text: "메이킹",
  },
];

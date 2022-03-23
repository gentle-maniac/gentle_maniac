import Image from "next/image";
import { useRef } from "react";
import styled from "styled-components";
import { Trail } from "../../components";
import { device } from "../../styles";
import { useObserverOnce } from "../../utils";

export const TalentItem = ({ item, index }) => {
  const ref = useRef(null);

  const visible = useObserverOnce(ref);

  return (
    <Trail open={visible}>
      <Wrapper ref={ref}>
        <div className="icon">
          <Image src={item.icon} alt={`${index}-icon`} />
        </div>
        <div className="container">
          <h2 className="gold">0{index + 1}</h2>
          <Trail open={visible}>
            <h2>{item.title}</h2>
            <h2 className="gold">{item.subtitle}</h2>
            <p>{item.content}</p>
          </Trail>
        </div>
      </Wrapper>
    </Trail>
  );
};

const Wrapper = styled.div`
  display: flex;

  .icon {
    @media ${device.mobile} {
      display: none;
    }
    flex-shrink: 0;
    width: 400px;
    height: 400px;
  }

  .container {
    display: flex;
    direction: ltr;
    & > :last-child {
      @media ${device.mobile} {
        margin-left: 1.5rem;
      }
      margin-left: 3rem;
      & > :last-child {
        margin-top: 2rem;
      }
    }
  }
`;

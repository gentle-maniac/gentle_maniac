// @ts-nocheck
import styled from "styled-components";
import Image from "next/image";
import { useRef } from "react";
import { useSpring, animated } from "react-spring";
import { useObserver } from "../utils";
import { SectionLayout } from "../components";
import { device } from "../styles";
import { Img } from "../assets";

export const GreetingSection = () => {
  const titleRef = useRef(null);
  const visible = useObserver(titleRef);

  const titleStyle = useSpring({
    opacity: visible ? 1 : 0,
    x: visible ? 0 : -100,
  });

  return (
    <SectionLayout theme="black" justify="flex-start">
      <Wrapper className="gold">
        <animated.h1 ref={titleRef} style={titleStyle}>
          인사말
        </animated.h1>
        <div>
          {greetingData.map((item, index) => (
            <div>
              <GreetingItem key={index} item={item} index={index} />
              <br/>
            </div>
          ))}
        </div>
      </Wrapper>
    </SectionLayout>
  );
};


const Wrapper = styled.div`
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10%;
`;


// MARK: Greeting Item
const GreetingItem = ({ item, index }) => {
  return (
    <ItemWrapper>
      <div className="icon">
        <Image src={item.icon} alt={`${index}-icon`} />
      </div>
      
      <div>
        <h2>{item.title}</h2>
        <br/>
        <p>{item.content}</p>
      </div>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;

  .icon {
    @media ${device.mobile} {
      display: none;
    }
    flex-shrink: 0;
    width: 300px;
    margin-right: 24px;
  }

  p {
    font-size: 14pt;
    @media ${device.mobile} {
      font-size: 12pt;
    }
  }
`;



export const greetingData = [
  {
    icon: Img.대표님01,
    title: "복규동 대표",
    content: `일반 취향을 가진 일반인 분들과 특수 취향을 가진 특수한 모든 분들을 위해 인사 드립니다.\n게임은 또다른 세계를 만드는 즐거운 일이며 그 즐거운 일을 아직도 하고 있다는 것에 언제나 감사하고 있습니다.\n부디 저희가 만든 세계 안에서 일반적인 행복과 특수한 행복 모두를 얻으시길 간절히 바랍니다. 여러분! 젠틀매니악은 안전합니다!\np.s 일반인 여러분들도 너무 걱정하지 마십시오.`
  },
  {
    icon: Img.대표님02,
    title: "이태웅 대표",
    content:
      "게임업계에는 게임이 정말 좋아서 이 일을 시작한 사람이 많아요. 그런데 일하다 보면 내가 좋아하고 만들고 싶은 게임을 만들 기회는 정말 적어요.\n인생이란 게, 사회생활이란 게 내가 하고 싶은 것만 하고 살 수는 없더라고요.\n하지만 인생의 긴 여정에서 우리 회사에서 일한 시간이 내가 하고 싶은 일을 했던 시간, 덕업일치를 이룬 시간, 애쓰지 않아도 일이 잘되는 그런 시간이 되었으면 좋겠어요.\n자신의 인생에서 그런 시간을 가질 수 있다면 의미가 있다고 생각해요. 우리 구성원들이 그런 시간을 여기서 가질 수 있다면, 창업하길 잘했다고 큰 보람을 느낄 것 같아요.\n저희는 그런 회사를 만들기 위해서 계속 노력할거고요."
  }
];

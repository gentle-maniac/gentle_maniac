// @ts-nocheck
import styled from "styled-components";
import { SectionLayout } from "../components";
import { device } from "../styles";

export const GreetingSection = () => {
  return (
    <SectionLayout theme="black" justify="flex-start">
      <Wrapper className="gold">
        <h1>대표 인사말</h1>

        <h3>복규동 대표</h3>
        <br />
        <p>
          일반 취향을 가진 일반인 분들과 특수 취향을 가진 특수한 모든 분들을 위해 인사 드립니다.
        </p>
        <p>
          게임은 또다른 세계를 만드는 즐거운 일입니다. 
        </p>
        <p>
          그리고 그 즐거운 일을 아직도 하고 있다는 것에 언제나 감사하고 있습니다. 
        </p>
        <p>
          부디 저희가 만든 세계 안에서 일반적인 행복과 특수한 행복 모두를 얻으시길 간절히 바랍니다. 
          여러분! 젠틀매니악은 안전합니다!
        </p>
        <p>
          p.s 일반인 여러분들도 너무 걱정하지 마십시오.
        </p>


        <br /><br /><br />
        <h3>이태웅 대표</h3>
        <br />
        <p>게임업계에는 게임이 정말 좋아서 이 일을 시작한 사람이 많아요.</p>
        <p>
          그런데 일하다 보면 내가 좋아하고 만들고 싶은 게임을 만들 기회는 정말
          적어요.
        </p>
        <p>
          인생이란 게, 사회생활이란 게 내가 하고 싶은 것만 하고 살 수는
          없더라고요. 하지만 인생의 긴 여정에서 우리 회사에서 일한 시간이 내가
          하고 싶은 일을 했던 시간, 덕업일치를 이룬 시간, 애쓰지 않아도 일이
          잘되는 그런 시간이 되었으면 좋겠어요.
        </p>
        <p>
          자신의 인생에서 그런 시간을 가질 수 있다면 의미가 있다고 생각해요.
          우리 구성원들이 그런 시간을 여기서 가질 수 있다면, 창업하길 잘했다고
          큰 보람을 느낄 것 같아요. 저희는 그런 회사를 만들기 위해서 계속 노력할
          거고요.
        </p>

        
      </Wrapper>
    </SectionLayout>
  );
};

const Wrapper = styled.div`
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10%;

  h1 {
    @media ${device.mobile} {
      margin-bottom: 2.5rem;
      padding: 0 0.5rem 0.5rem;
    }

    display: inline-block;
    padding: 0 1rem 1rem;
    margin-bottom: 4rem;
    border-bottom: 2px solid;
  }
`;

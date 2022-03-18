import styled from "styled-components";
import { SectionLayout, Title } from "../components";

export const GreetingSection = () => {
  return (
    <SectionLayout theme="black">
      <Wrapper>
        <Title>대표님 인사말</Title>

        <Underline />

        <div>
          게임업계에는 게임이 정말 좋아서 이 일을 시작한 사람이 많거든요. 그런데
          일을 하다 보면 내가 좋아하고 만들고 싶은 게임을 만들 기회는 정말
          적어요. <br />
          인생이란게, 사회 생활이란게 내가 하고 싶은 것만 하고 살 수는
          없더라고요. 하지만 인생의 긴 여정에서 우리 회사에서 일한 시간 이 내가
          하고 싶은 일을 했던 시간, 덕업일치를 이룬 시간, 애쓰지 않아도 일이 잘
          되는 그런 시간이 되었으면 좋겠어요. 자신의 인생에서 그런 시간을 가질
          수 있다면 의미가 있다고 생각해요. 우리 구성원들이 그런 시간을 여기서
          가질 수 있다면, 창업하길 잘했다고 큰 보람을 느낄 것 같아요. <br />
          저는 그런 회사를 만들기 위해서 계속 노력할 거고요.
        </div>
      </Wrapper>
    </SectionLayout>
  );
};

const Wrapper = styled.div`
  margin-left: 10%;
`;

const Underline = styled.div`
  height: 2px;
  background-color: white;
  margin: 1rem 0rem;
`;

import styled from "styled-components";
import { SectionLayout } from "../components";

export const HomeSection = () => {
  return (
    <SectionLayout theme="primary">
      <Wrapper>
        <div>
          <h1>
            라스트오리진 핵심 개발진<span>으로 구성된</span>
          </h1>
          <h1>국내 최고의 서브컬처 게임 개발사</h1>
        </div>
        <Line />
      </Wrapper>

      <Wrapper>
        <Line />
        <p>
          라스트오리진개발총괄, 프로듀서, 아트디렉터, <br />
          프로그래밍총괄 등 라스트오리진 초기부터 <br />
          개발한 핵심 개발진으로 이루어진 팀
        </p>
      </Wrapper>
    </SectionLayout>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 2rem 0;

  & > * + * {
    margin-left: 1.5rem;
  }
`;

const Line = styled.div`
  height: 2px;
  background-color: white;
  flex: 1;
`;

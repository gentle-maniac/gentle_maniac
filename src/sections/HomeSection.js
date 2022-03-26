// @ts-nocheck
import { useRef } from "react";
import styled from "styled-components";
import { SectionLayout, Trail } from "../components";
import { device } from "../styles";
import { useObserver } from "../utils";

export const HomeSection = () => {
  const ref = useRef(null);
  const visible = useObserver(ref);

  return (
    <SectionLayout ref={ref} theme="primary">
      <Wrapper>
        <Trail open={visible}>
          <div>
            <h2>
              라스트오리진 핵심 개발진<p>으로 구성된</p>
            </h2>
          </div>
          <h1>
            국내 최고의 <span className="u">서브컬처</span> 게임 개발사
          </h1>
        </Trail>
      </Wrapper>

      <Wrapper>
        <div className="right">
          <Trail open={visible} delay={200}>
            <p>라스트오리진 개발 총괄</p>
            <p>프로듀서, 아트디렉터, 프로그래밍총괄 등</p>
            <p>라스트오리진 초기부터 개발한 핵심 개발진으로 이루어진 팀</p>
          </Trail>
        </div>
      </Wrapper>
    </SectionLayout>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 2rem 0;

  h1 {
    margin: 0;
  }
  h2 {
    p {
      display: inline-block;
    }
  }

  .row {
    display: flex;
    align-items: flex-end;
  }
  .right {
    @media ${device.mobile} {
      margin-left: auto;
    }
    margin-left: 40%;
  }

  & > * + * {
    margin-left: 1.5rem;
  }
`;

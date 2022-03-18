import styled from "styled-components";
import { SectionLayout, Title } from "../components";

export const TalentSection = () => {
  return (
    <SectionLayout theme="black">
      <Wrapper>
        <Title>젠틀매니악의 인재상</Title>

        <div>
          {talentData.map((v, i) => (
            <TalentItem key={i}>
              <div className="icon">
                <div />
              </div>
              <div className="container">
                <div className="indicator">0{i + 1}</div>
                <div>
                  <div className="title">{v.title}</div>
                  <div className="subtitle">{v.subtitle}</div>
                  <div className="content">{v.content}</div>
                </div>
              </div>
            </TalentItem>
          ))}
        </div>
      </Wrapper>
    </SectionLayout>
  );
};

const Wrapper = styled.div`
  padding-bottom: 10rem;

  & > :last-child {
    margin-top: 4rem;
  }
`;

const TalentItem = styled.div`
  display: flex;
  &:nth-child(odd) {
    direction: rtl;
  }

  & + * {
    margin-top: 4rem;
  }

  .icon {
    flex: 1;
    display: flex;
    justify-content: center;
    & > div {
      width: 200px;
      height: 200px;
      border-radius: 100%;
      background-color: gray;
    }
  }

  .container {
    flex: 1;
    display: flex;

    direction: ltr;

    & > :last-child {
      margin-left: 3rem;
    }
  }

  .indicator {
    font-size: 2rem;
    font-weight: 900;
  }
  .indicator,
  .subtitle {
    color: #d29b3a;
  }

  .title,
  .subtitle {
    font-size: 1.4rem;
    font-weight: 900;
  }
  .title {
    margin-top: 6px;
  }
  .content {
    margin-top: 2rem;
    font-size: 0.9rem;
  }
`;

const talentData = [
  {
    icon: "",
    title: "자율",
    subtitle: "autonomy",
    content:
      '스타트업에서 특히나 중요한 덕목은 "자율"입니다. "자율"은 "자유"와 "책임"으로 구성되며, 자신이 스스로 문제를 해결하기에 "자율"하는 사람에게는 특별히 어떤 "통제"가 필요 없기에 "자유"가 주어질 수 밖에 없습니다. 우리는 이런 분들과 함께 창의적이고 독특하면서 서브컬처 유저의 취향을 충실히 만족시켜 줄 게임을 만들고 싶습니다.',
  },
  {
    icon: "",
    title: "책임과 프로의식",
    subtitle: "responsibility &\n professional mind",
    content:
      "우리는 프로페셔널한 오타쿠를 원합니다. 프로는 본인의 일에 끝까지 책임을 집니다. 사람은 누구나 실패할 수 있습니다. 특히나 게임 개발은 무수히 많은 실패의 연속입니다. 다만 책임지는 사람은 실패를 통해서 한단계 더 성장하기에 언젠가는 성공할 수 있습니다.",
  },
  {
    icon: "",
    title: "협력",
    subtitle: "cooperation",
    content: `게임 개발은 골방에서 혼자 하는 작업이 아니라 수십명의 서로 다른 사람이 모여서 함께 결과물을 만들어 내는 고도로 복잡한 작업입니다.\n
      그렇기에 다름을 인정하고, 다른 사람의 실패에 대해서 관대하고, 나의 개인 성과보다 우리의 공동 성과를 더욱 중요시 하는 것이 중요합니다.\n
      게임 개발은 팀 스포츠와 비슷합니다. 개인이 그 경기에서 성적이 좋더라도 팀이 패배하면 의미가 없듯이, 원팀으로서 팀의 성공을 진심으로 바라고 행동할 수 있는 분과 함께 하길 바랍니다.
      `,
  },
  {
    icon: "",
    title: "성과",
    subtitle: "result",
    content:
      "그리하여 좋은 성과를 내어 좋은 분들과 오랫동안 함께하며, 좋은 회사를 만들고, 좋은 게임을 만들고 싶은 것이 우리의 꿈입니다.",
  },
];

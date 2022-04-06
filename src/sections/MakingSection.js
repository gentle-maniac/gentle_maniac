// @ts-nocheck
import Image from "next/image";
import styled from "styled-components";
import { Img } from "../assets";
import { SectionLayout } from "../components";

export const MakingSection = () => {
  return (
    <SectionLayout theme="black" justify="flex-start">
      <div>
        <h1 className="gold">MAKING</h1>
        <Row>
          <Image src={Img.캐릭터01} alt="making_001" />
          <Image src={Img.캐릭터02} alt="making_002" />
        </Row>

        <Image src={Img.n06} alt="making_01" />

        <Row>
          <Image src={Img.n02} alt="making_03" />
          <Image src={Img.n03} alt="making_04" />
          <div>
            <Image src={Img.n04} alt="making_05" />
          </div>
        </Row>
      </div>
    </SectionLayout>
  );
};

const Row = styled.div`
  display: flex;
  align-items: center;
  & > *:last-child {
    margin-left: 3rem;
  }
`;

// @ts-nocheck
import Image from "next/image";
import styled from "styled-components";
import { Img } from "../assets";
import { SectionLayout } from "../components";
import Carousel from "../components/Carousel";

export const MakingSection = () => {
  return (
    <SectionLayout theme="black" justify="flex-start">
      <div>
        <h1 className="gold">ArtWorks</h1>
        <Carousel images={artworks}/>

        {/* <Row>
          <Image src={Img.artwork1} alt="making_001" />
          <Image src={Img.캐릭터02} alt="making_002" />
        </Row>

        <Image src={Img.n06} alt="making_01" />

        <Row>
          <Image src={Img.n02} alt="making_03" />
          <Image src={Img.n03} alt="making_04" />
          <div>
            <Image src={Img.n04} alt="making_05" />
          </div>
        </Row> */}
      </div>
    </SectionLayout>
  );
};

const artworks = [ 
  Img.캐릭터01,
  Img.캐릭터02,
  Img.artwork1,
  Img.artwork2,
  Img.artwork3,
  Img.artwork4,
  Img.artwork5,
  Img.artwork6,
  Img.artwork7,
  Img.artwork8,
  Img.artwork9,
  Img.artwork10,
  Img.artwork11,
  Img.artwork12,
  Img.artwork13,
  Img.artwork14,
  Img.artwork15,
  Img.artwork16,
  Img.artwork17,
  Img.artwork18,
  Img.artwork19,
  Img.artwork20,
  Img.artwork21,
  Img.artwork22,
  Img.artwork23,
  Img.artwork24,
  Img.artwork25,
  Img.artwork26,
  Img.artwork27,
  Img.artwork28,
  Img.artwork29,
  Img.artwork30,
  Img.artwork31,
  Img.artwork32,
  Img.artwork33,
  Img.artwork34,
  Img.artwork35,
  Img.artwork36,
]



const Row = styled.div`
  display: flex;
  align-items: center;
  & > *:last-child {
    margin-left: 3rem;
  }
`;

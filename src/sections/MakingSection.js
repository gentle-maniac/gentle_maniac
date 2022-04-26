// @ts-nocheck
import Image from "next/image";
import styled from "styled-components";
import { Img } from "../assets";
import { SectionLayout } from "../components";
import SimpleImageSlider from "react-simple-image-slider";

export const MakingSection = () => {
  return (
    <SectionLayout theme="black" justify="flex-start">
      <div>
        <h1 className="gold">ArtWorks</h1>
        <SimpleImageSlider
          width={896}
          height={504}
          images={artworks}
          showBullets={true}
          showNavs={true}
        />
        <Row>
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
        </Row>
      </div>
    </SectionLayout>
  );
};

const artworks = [
  { url: Img.artwork1 },
  { url: Img.artwork2 },
]

const Row = styled.div`
  display: flex;
  align-items: center;
  & > *:last-child {
    margin-left: 3rem;
  }
`;

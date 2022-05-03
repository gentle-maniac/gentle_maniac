// @ts-nocheck
import Image from "next/image";
import styled from "styled-components";
import { Img } from "../assets";
import { SectionLayout } from "../components";
import Carousel from "../components/Carousel";
import { device } from "../styles";

export const MakingSection = () => {
  return (
    <SectionLayout theme="black" justify="flex-start">
      <h1 className="gold">ArtWorks</h1>
      <Wrapper>
        <div className="gallery-content">
          <div className="gallery">
            {artworks.filter((a,i,v) => 0 <= i && i <=3 ).map((item, index) => (
                <div onClick={() => { showImage(index) }} className="image-content"><Image src={item} alt="making" width={240} height={160} objectFit="cover"/></div>
              ))}
          </div>
          <div className="gallery">
            {artworks.filter((a,i,v) => 4 <= i && i <=7 ).map((item, index) => (
                <div onClick={() => { showImage(index) }} className="image-content"><Image src={item} alt="making" width={240} height={160} objectFit="cover"/></div>
              ))}
          </div>
          <div className="gallery">
            {artworks.filter((a,i,v) => 8 <= i && i <=11 ).map((item, index) => (
                <div onClick={() => { showImage(index) }} className="image-content"><Image src={item} alt="making" width={240} height={160} objectFit="cover"/></div>
              ))}
          </div>
          <div className="gallery">
            {artworks.filter((a,i,v) => 12 <= i && i <=15 ).map((item, index) => (
                <div onClick={() => { showImage(index) }} className="image-content"><Image src={item} alt="making" width={240} height={160} objectFit="cover"/></div>
              ))}
          </div>
          <div className="gallery">
            {artworks.filter((a,i,v) => 16 <= i && i <=19 ).map((item, index) => (
                <div onClick={() => { showImage(index) }} className="image-content"><Image src={item} alt="making" width={240} height={160} objectFit="cover"/></div>
              ))}
          </div>
          <div className="gallery">
            {artworks.filter((a,i,v) => 20 <= i && i <=23 ).map((item, index) => (
                <div onClick={() => { showImage(index) }} className="image-content"><Image src={item} alt="making" width={240} height={160} objectFit="cover"/></div>
              ))}
          </div>
          <div className="gallery">
            {artworks.filter((a,i,v) => 24 <= i && i <=27 ).map((item, index) => (
                <div onClick={() => { showImage(index) }} className="image-content"><Image src={item} alt="making" width={240} height={160} objectFit="cover"/></div>
              ))}
          </div>
          <div className="gallery">
            {artworks.filter((a,i,v) => 28 <= i && i <=31 ).map((item, index) => (
                <div onClick={() => { showImage(index) }} className="image-content"><Image src={item} alt="making" width={240} height={160} objectFit="cover"/></div>
              ))}
          </div>
          <div className="gallery">
            {artworks.filter((a,i,v) => 32 <= i && i <=35 ).map((item, index) => (
                <div onClick={() => { showImage(index) }} className="image-content"><Image src={item} alt="making" width={240} height={160} objectFit="cover"/></div>
              ))}
          </div>
          <div className="gallery">
            {artworks.filter((a,i,v) => 36 <= i && i <=36 ).map((item, index) => (
                <div onClick={() => { showImage(index) }} className="image-content"><Image src={item} alt="making" width={240} height={160} objectFit="cover"/></div>
              ))}
          </div>
        </div>
        <div className="gallery-slide">
          <Carousel images={artworks}/>
        </div>
      </Wrapper>
    </SectionLayout>
  );
};

const showImage = (idx) => {
  console.log(idx)
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .gallery-content {
    @media ${device.mobile} {
      display: none;
    }
  }
  .gallery-slide {
    display: none;
    @media ${device.mobile} {
      display: block;
    }
  }

  .gallery {
    display: flexbox;
    flex-direction: row;
  }

  .image-content {
    width: 240px;
    height: 160px;
  }

  
`

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
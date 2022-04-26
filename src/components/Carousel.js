import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */
export default function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <Wrapper className="relative">
        <Row>
            <AiOutlineLeft
                onClick={handlePrevSlide}
                className="arrow"
            />
            <Swipe
                onSwipeLeft={handleNextSlide}
                onSwipeRight={handlePrevSlide}
                className="img"
            >
                {images.map((image, index) => {
                if (index === currentSlide) {
                    return (
                    <Image
                        key={image.id}
                        src={image}
                        width={800}
                        height={400}
                        objectFit="contain"
                        className="img"
                    />
                    );
                }
                })}
            </Swipe>
            <AiOutlineRight
                onClick={handleNextSlide}
                className="arrow"
            />
        </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    .arrow {
        width: 32px;
        height: 32px;
    }
`

const Row = styled.div`
  display: flex;
  align-items: center;
  & > *:last-child {
    
  }
`;
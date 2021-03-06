import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

export const StyledCarousel = styled(Carousel)`
  img {
    width: 100%;
    height: auto;
    max-height: 40vh;
    object-fit: contain;
    overflow: hidden;
    object-position: center center;
  }

  ${(props) =>
    props.theme.mode === 'light' &&
    `
    .carousel-item {
      background-color: var(--primary);
    }
  `}
`;

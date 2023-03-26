import styled from "styled-components";

interface BannerImageProps {
   opacity: number;
}

const BannerImage = styled.img<BannerImageProps>` 
   opacity: ${({ opacity }) => opacity};
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
`;

export default BannerImage;
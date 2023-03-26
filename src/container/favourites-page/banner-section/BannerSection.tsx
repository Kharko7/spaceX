import { BannerBlock, Title } from './BannerSection.styles';
import BannerImg from 'assets/banner/BannerCropped.jpg';
import BannerImage from 'components/styles/BannerImage';

const BannerSection = () => {

  return (
    <BannerBlock>
      <BannerImage
        opacity={0.64}
        src={BannerImg}
        alt='Banner'
      />
      <Title>favourites</Title>
    </BannerBlock>
  );
};

export default BannerSection;
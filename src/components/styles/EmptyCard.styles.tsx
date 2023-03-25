import styled from "styled-components";

const EmptyCard = styled.div`
  flex: 1 1 33.333%;
  padding: 0 12px;
  position: relative;
  margin-bottom: 24px;

  ${({ theme }) => theme.media.extraLarge} {
    flex: 1 1 50%;
  }

  &::after {
    content: "";
    border: 1px solid #d3eaff;
    height: 100%;
    width: Calc(100% - 24px);
    position: absolute;
    top: 0;
    left: 12px;
    z-index: -1;
  }
`;

export default EmptyCard;
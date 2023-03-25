import styled from "styled-components";

const Container = styled.div`
  max-width: ${({ theme }) => theme.sizes.container + 30}px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  ${({ theme }) => theme.media.small} {
    padding: 0 7px;
  }
`;

export default Container;
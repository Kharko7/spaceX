import styled from "styled-components";

const Container = styled.div`
  max-width: ${({ theme }) => theme.sizes.container + 30}px;
  width: 100%;
  height: 80px;
  padding: 0 15px;
  margin: 0 auto;
`;

export default Container;
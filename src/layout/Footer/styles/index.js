import styled from 'styled-components/macro';

export const Container = styled.footer`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const textFeatures = `
  color: #757575;
  margin-bottom: 40px;
`;

export const Link = styled.a`
  color: #757575;
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 20px;
`;

export const Title = styled.h4`
  font-size: 16px;
  font-weight: normal;
  ${textFeatures}
`;

export const Text = styled.p`
  font-size: 13px;
  ${textFeatures}
`;

export const Break = styled.div`
  height: 0px;
  flex-basis: 100%;
`;

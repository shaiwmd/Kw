import styled from 'styled-components/macro';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  position: relative;

  &::before {
    content: '';
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-position: top left;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${({ src }) =>
      src ? `/media/screen/${src}.jpg` : '/media/screen/Start1.jpg'});
    z-index: -1;
  }

  &::after {
    content: '';
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: -1;
  }
`;

export const Nav = styled.div``;
export const Menu = styled.div``;
export const Item = styled.div``;

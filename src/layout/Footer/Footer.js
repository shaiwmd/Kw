import React from 'react';
import { WrappedComponent } from '../../components/common';
import { Container, Row, Col, Link, Title, Text, Break } from './styles';

const Footer = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

Footer.Row = WrappedComponent(Row);
Footer.Col = WrappedComponent(Col);
Footer.Link = WrappedComponent(Link);
Footer.Title = WrappedComponent(Title);
Footer.Text = WrappedComponent(Text);
Footer.Break = WrappedComponent(Break);

export default Footer;

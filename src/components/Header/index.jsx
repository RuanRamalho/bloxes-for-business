import React from 'react';
import { HeaderContent, HeaderTitle, HeaderIcons } from './styles';
import { ReactComponent as Bell } from '../../images/bell.svg';
import { ReactComponent as Help } from '../../images/help.svg';

const Header = () => (
  <HeaderContent>
    <HeaderTitle>
      <h1>Notícias</h1>
    </HeaderTitle>
    <HeaderIcons>
      <Bell />
      <Help />
      <img src="https://i.ibb.co/kcTLRq9/user-blank.png" alt="user-blank" />
    </HeaderIcons>
  </HeaderContent>
);

export default Header;

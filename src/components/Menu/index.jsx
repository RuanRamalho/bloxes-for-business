import React from 'react';
import {
  MenuContent,
  MenuList,
  LogoContent,
  HomeContent,
  EntrepreneurContent,
  CommunityContent,
  MenuButtonContent,
} from './styles';

import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as ArrowLeft } from '../../images/arrow-left.svg';
import { ReactComponent as Home } from '../../images/home.svg';
import { ReactComponent as Dashboard } from '../../images/dashboard.svg';
import { ReactComponent as Enterprise } from '../../images/enterprise.svg';
import { ReactComponent as Projects } from '../../images/projects.svg';
import { ReactComponent as Chat } from '../../images/chat.svg';
import { ReactComponent as Earnings } from '../../images/earnings.svg';
import { ReactComponent as Indications } from '../../images/indications.svg';
import { ReactComponent as Forum } from '../../images/forum.svg';
import { ReactComponent as Academy } from '../../images/academy.svg';
import { ReactComponent as Calendary } from '../../images/calendary.svg';
import { ReactComponent as News } from '../../images/news.svg';
import { ReactComponent as Services } from '../../images/services.svg';

const Menu = () => (
  <MenuContent>
    <LogoContent>
      <Logo />
      <ArrowLeft />
    </LogoContent>
    <HomeContent>
      <ul>
        <a href="#">
          <MenuList>
            <Home />
            Home
          </MenuList>
        </a>
      </ul>
    </HomeContent>
    <EntrepreneurContent>
      <ul>
        <h2>área do empreendedor</h2>
        <a href="#">
          <MenuList>
            <Dashboard />
            Dashboard
          </MenuList>
        </a>
        <a href="#">
          <MenuList>
            <Enterprise />
            Empresas
          </MenuList>
        </a>
        <a href="#">
          <MenuList>
            <Projects />
            Projetos
          </MenuList>
        </a>
        <a href="#">
          <MenuList>
            <Chat />
            Chat
          </MenuList>
        </a>
        <a href="#">
          <MenuList>
            <Earnings />
            Proventos
          </MenuList>
        </a>
        <a href="#">
          <MenuList>
            <Indications />
            Indicações
          </MenuList>
        </a>
      </ul>
    </EntrepreneurContent>
    <CommunityContent>
      <ul>
        <h2>comunidade</h2>
        <a href="#">
          <MenuList>
            <Forum /> Fórum
          </MenuList>
        </a>
        <a href="#">
          <MenuList>
            <Academy /> Academy
          </MenuList>
        </a>
        <a href="#">
          <MenuList>
            <Calendary /> Eventos
          </MenuList>
        </a>
        <a href="#">
          <MenuList active>
            <News /> Notícias
          </MenuList>
        </a>
        <a href="#">
          <MenuList>
            <Services /> Services
          </MenuList>
        </a>
      </ul>
    </CommunityContent>
    <MenuButtonContent>
      <button type="button">Submeter projeto</button>
    </MenuButtonContent>
  </MenuContent>
);

export default Menu;

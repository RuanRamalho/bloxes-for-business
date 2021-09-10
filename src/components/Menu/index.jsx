import React from 'react';
import {
  MenuContent,
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
          <li>
            <Home />
            Home
          </li>
        </a>
      </ul>
    </HomeContent>
    <EntrepreneurContent>
      <ul>
        <h2>área do empreendedor</h2>
        <a href="#">
          <li>
            <Dashboard />
            Dashboard
          </li>
        </a>
        <a href="#">
          <li>
            <Enterprise />
            Empresas
          </li>
        </a>
        <a href="#">
          <li>
            <Projects />
            Projetos
          </li>
        </a>
        <a href="#">
          <li>
            <Chat />
            Chat
          </li>
        </a>
        <a href="#">
          <li>
            <Earnings />
            Proventos
          </li>
        </a>
        <a href="#">
          <li>
            <Indications />
            Indicações
          </li>
        </a>
      </ul>
    </EntrepreneurContent>
    <CommunityContent>
      <ul>
        <h2>comunidade</h2>
        <a href="#">
          <li>
            <Forum /> Fórum
          </li>
        </a>
        <a href="#">
          <li>
            <Academy /> Academy
          </li>
        </a>
        <a href="#">
          <li>
            <Calendary /> Eventos
          </li>
        </a>
        <a href="#">
          <li>
            <News /> Notícias
          </li>
        </a>
        <a href="#">
          <li>
            <Services /> Services
          </li>
        </a>
      </ul>
    </CommunityContent>
    <MenuButtonContent>
      <button type="button">Submeter projeto</button>
    </MenuButtonContent>
  </MenuContent>
);

export default Menu;

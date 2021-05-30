import * as React from 'react';

interface HeaderProps {
  name: string;
}

const Header: React.SFC<HeaderProps> = ({ name }) => (
  <div className="header-component-container">
    <b>{name}</b>
  </div>
);

export default Header;

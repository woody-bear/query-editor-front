import * as React from 'react';

interface NavigationProps {
  name: string;
}

const Navigation: React.SFC<NavigationProps> = ({ name }) => (
  <div className="naviataion-component-container">
    <b>{name}</b>
  </div>
);

export default Navigation;

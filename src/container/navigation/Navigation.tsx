import * as React from 'react';

interface NavigationProps {
  name: string;
}

const Navigation: React.SFC<NavigationProps> = ({ name }) => (
  <div className="grid-root-container-item">
    <b>{name}</b>
  </div>
);

export default Navigation;

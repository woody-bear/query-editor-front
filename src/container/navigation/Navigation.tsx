import * as React from 'react';

interface NavigationProps {
  name: string;
}

const Navigation = ({ name }: NavigationProps) => (
  <div className="grid-root-container-item">
    <b>{name}</b>
  </div>
);

export default Navigation;

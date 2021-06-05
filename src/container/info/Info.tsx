import * as React from 'react';

interface InfoProps {
  name: string;
}

const Info = ({ name }: InfoProps) => (
  <div className="grid-root-container-item">
    <b>{name}</b>
  </div>
);

export default Info;

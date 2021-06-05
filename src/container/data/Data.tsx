import * as React from 'react';

interface DataProps {
  name: string;
}

const Data = ({ name }: DataProps) => (
  <div className="grid-root-container-item">
    <b>{name}</b>
  </div>
);

export default Data;

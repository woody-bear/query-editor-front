import * as React from 'react';

interface EditorProps {
  name: string;
}

const Editor: React.SFC<EditorProps> = ({ name }) => (
  <div className="grid-root-container-item">
    <b>{name}</b>
  </div>
);

export default Editor;

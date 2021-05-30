import * as React from 'react';

interface EditorProps {
  name: string;
}

const Editor: React.SFC<EditorProps> = ({ name }) => (
  <div className="grid-root-container-item">
    <div id="monaco" className="editor"></div>
  </div>
);

export default Editor;

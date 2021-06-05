import * as React from 'react';
import MonacoEditor from 'react-monaco-editor';

interface EditorProps {
  name: string;
}
// constructor(props) {
//   super(props);
//   this.state = {
//     code: '// type your code...',
//   }
// }
// editorDidMount(editor, monaco) {
//   console.log('editorDidMount', editor);
//   editor.focus();
// }
// onChange(newValue, e) {
//   console.log('onChange', newValue, e);
// }

const Editor = ({ name }: EditorProps) => (
  <div className="grid-root-container-item">
    <div id="monaco" className="editor"></div>
    <div> run </div>
    {/* <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        // value={code}
        // options={options}
        // onChange={::this.onChange}
        // editorDidMount={::this.editorDidMount}
      /> */}
  </div>
);

export default Editor;

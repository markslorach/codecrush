import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBox = () => {
    const codeString = `function add(a, b) {
      return a + b;
    }`;
  
    return (
      <SyntaxHighlighter language="javascript" style={solarizedlight}>
        {codeString}
      </SyntaxHighlighter>
    );
  };

export default CodeBox
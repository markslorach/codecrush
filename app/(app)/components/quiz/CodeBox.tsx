import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBox = ({ code }: { code: string }) => {
  return (
    code && (
      <SyntaxHighlighter
        customStyle={{
          padding: " 1rem",
          margin: "0rem",
        }}
        language="javascript"
        style={solarizedlight}
        // showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    )
  );
};

export default CodeBox;

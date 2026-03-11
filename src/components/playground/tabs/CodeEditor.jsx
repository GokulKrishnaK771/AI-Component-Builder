import Editor from "@monaco-editor/react";
import { useSelector, useDispatch } from "react-redux";
import { setCode } from "../../../features/playground/playgroundslice";

const CodeEditor = () => {
  const dispatch = useDispatch();
  const code = useSelector((state) => state.playground.code);

  const handleBeforeMount = (monaco) => {
    monaco.editor.defineTheme("black-theme", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#000000"
      }
    });
  };

  return (
    <Editor
      className="font-mono"
      height="100%"
      defaultLanguage="javascript"
      value={code}
      beforeMount={handleBeforeMount}
      onChange={(value) => dispatch(setCode(value))}
      theme="black-theme"
      options={{
        minimap: { enabled: false },
        fontSize: 15,
        lineNumbers: "on",
        roundedSelection: true,
        cursorStyle: "line",
        lineHeight: 22,
        tabSize: 2,
        scrollBeyondLastLine: false,
        smoothScrolling: true,
        cursorBlinking: "smooth",
        cursorSmoothCaretAnimation: "on",
        padding: { top: 16 },
        automaticLayout: true,
        wordWrap: "on",
        wordWrapColumn: 80,
        wrappingIndent: "indent"
      }}
    />
  );
};

export default CodeEditor;
import { useMutation } from "_client/hooks/_useTRPC";
import { useDebouncedEffect } from "_client/utils/debounce";
import { editor } from "monaco-editor";
import { FC, useCallback, useRef, useState } from "react";
import Editor, { Monaco } from "@monaco-editor/react";
import IStandaloneCodeEditor = editor.IStandaloneCodeEditor;

type HtmlToMdProps = {};

export const HtmlToMd: FC<HtmlToMdProps> = (props) => {
  const [codeContent, setCodeContent] = useState<string>();
  const [markdownContent, setMarkdownContent] = useState<string>();
  const editorRef1 = useRef<editor.IStandaloneCodeEditor>();
  const editorRef2 = useRef<editor.IStandaloneCodeEditor>();
  const transform = useMutation(["transform.htmlToMarkdown"]);

  function handleEditorDidMount1(editor: IStandaloneCodeEditor, monaco: Monaco) {
    // here is the editor instance
    // you can store it in `useRef` for further usage
    editorRef1.current = editor;
  }
  function handleEditorDidMount2(editor: IStandaloneCodeEditor, monaco: Monaco) {
    // here is the editor instance
    // you can store it in `useRef` for further usage
    editorRef2.current = editor;
  }

  const fetchMarkdown = useCallback(() => {
    const asyncUpdate = async () => {
      editorRef1.current?.getAction("editor.action.formatDocument").run();
      const markdown = await transform.mutateAsync(codeContent ?? "");
      setMarkdownContent(markdown);
    };
    asyncUpdate();
  }, [codeContent, transform]);

  useDebouncedEffect(fetchMarkdown, 1000, [codeContent]);

  return (
    <div className="mx-auto grid max-w-8xl grid-cols-2 justify-between gap-16 px-8 py-16">
      <div className="flex-1 overflow-hidden rounded-lg">
        <Editor
          height="600px"
          defaultLanguage="html"
          defaultValue="Add HTML here!"
          value={codeContent}
          onChange={(value) => setCodeContent(value)}
          onMount={handleEditorDidMount1}
          theme="vs-dark"
          options={{ minimap: { enabled: false }, padding: { top: 16, bottom: 16 } }}
        />
      </div>
      <div className="flex-1 overflow-hidden rounded-lg">
        <Editor
          height="600px"
          defaultLanguage="markdown"
          defaultValue=""
          value={markdownContent}
          onMount={handleEditorDidMount2}
          theme="vs-dark"
          options={{ minimap: { enabled: false }, padding: { top: 16, bottom: 16 } }}
        />
      </div>
    </div>
  );
};

export default HtmlToMd;

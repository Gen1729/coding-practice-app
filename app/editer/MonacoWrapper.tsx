"use client";
import { Monaco, DiffEditor } from "@monaco-editor/react";
import { useState, useEffect, useRef } from "react";

type Props = {
  children: string;
  modified?: string;
  language?: string;
  theme?: string;
};

export default function MonacoWrapper({
  children,
  modified: modifiedProp = "",
  language = "cpp",
  theme = "vs-dark",
}: Props) {
  const [original, setOriginal] = useState<string>(() => children ?? "");
  const [modified, setModified] = useState<string>(modifiedProp);
  const monacoRef = useRef<Monaco | null>(null);

  const handleEditorWillMount = (monaco: Monaco) => {
    monacoRef.current = monaco;
    
    // カスタムダークテーマを定義
    monaco.editor.defineTheme('myCustomDark', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'diffEditor.insertedTextBackground': '#00ff0015',
        'diffEditor.removedTextBackground': '#ff000015',
        'diffEditor.insertedLineBackground': '#00ff0008',
        'diffEditor.removedLineBackground': '#ff000008'
      },
    });

    // カスタムライトテーマを定義
    monaco.editor.defineTheme('myCustomLight', {
      base: 'vs',
      inherit: true,
      rules: [],
      colors: {
        'diffEditor.insertedTextBackground': '#00ff0030',
        'diffEditor.removedTextBackground': '#ff000030',
        'diffEditor.insertedLineBackground': '#00ff0015',
        'diffEditor.removedLineBackground': '#ff000015'
      },
    });
  };

  // props.children が変わったら original を同期
  useEffect(() => {
    setOriginal(children ?? "");
  }, [children]);

  // modifiedProp が変わったら同期
  useEffect(() => {
    setModified(modifiedProp);
  }, [modifiedProp]);

  return (
    <div style={{ height: "750px" }}>
      <DiffEditor
        beforeMount={handleEditorWillMount}
        theme={theme}
        height="100%"
        original={original}
        modified={modified}
        language={language}
        options={{
          ignoreTrimWhitespace: true,
        }}
      />
    </div>
  );
}
"use client";
import { DiffEditor } from "@monaco-editor/react";
import { useState, useEffect } from "react";

type Props = {
  // children として文字列を受け取り、DiffEditor の original に使います
  originalCode: string;
  // オプションで比較先の文字列や言語を渡せます
  modified?: string;
  language?: string;
};

export default function MonacoWrapper({
  originalCode,
  modified: modifiedProp = "",
  language = "cpp",
}: Props) {
  const [original, setOriginal] = useState<string>(() => originalCode ?? "");
  const [modified, setModified] = useState<string>(modifiedProp);

  // props.children が変わったら original を同期
  useEffect(() => {
    setOriginal(originalCode ?? "");
  }, [originalCode]);

  // modifiedProp が変わったら同期
  useEffect(() => {
    setModified(modifiedProp);
  }, [modifiedProp]);

  return (
    <div style={{ height: "500px" }}>
      <DiffEditor
        height="100%"
        original={original}
        modified={modified}
        language={language}
      />
    </div>
  );
}
import React, { useState } from "react";

interface CodeSnippetProps {
  code: string;
  language: string;
}

export const CodeSnippet = ({ code, language }: CodeSnippetProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div>
      <button
        className="flex items-center border border-xoPrimary bg-black px-3 py-2 text-white hover:border-white"
        onClick={handleCopy}
      >
        {(copied && "Copied!") || "Copy"}
      </button>
      <pre className="bg-black text-white">
        <code className={language}>{code}</code>
      </pre>
    </div>
  );
};

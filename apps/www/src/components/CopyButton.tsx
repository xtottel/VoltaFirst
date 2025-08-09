"use client";
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export const CopyButton = ({ textToCopy, className }: { textToCopy: string, className?: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button onClick={copyToClipboard} className={className}>
      {copied ? (
        <Check className="w-4 h-4" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </button>
  );
};
import React, { useEffect, useState } from 'react';
import { ReactComponent as CopyIcon } from '../assets/copy.svg';

interface PasswordResultProps {
  result: string;
}

const PasswordResult = (props: PasswordResultProps) => {
  const { result } = props;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(result);
  };

  useEffect(() => {
    setCopied(false);
  }, [result]);

  return (
    <div className="my-4 bg-gray3">
      <button
        className="group flex h-16 w-full items-center justify-between p-4 sm:p-6"
        onClick={handleCopy}
        disabled={!result}
      >
        {result ? (
          <h2 className="text-xl font-semibold">{result}</h2>
        ) : (
          <span className="text-gray2">result here...</span>
        )}

        <div className="flex items-center gap-2">
          {copied && <span className="uppercase">copied</span>}
          <CopyIcon className="h-6 w-6 stroke-green group-hover:stroke-white group-disabled:stroke-gray2" />
        </div>
      </button>
    </div>
  );
};

export default PasswordResult;

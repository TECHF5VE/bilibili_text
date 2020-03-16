import React, { ChangeEvent } from 'react';

export default function useChange(
  word: string[]
): [string, (e: ChangeEvent<HTMLInputElement>) => void] {
  const [value, setValue] = React.useState('');
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    []
  );
  React.useEffect(() => {
    for (const name of word) {
      if (value.includes(name)) {
        const a = value.replace(name, '*'.repeat(name.length));
        setValue(a);
      }
    }
  }, [value, word]);
  return [value, handleChange];
}

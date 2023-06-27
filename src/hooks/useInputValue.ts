import { ChangeEvent, useState } from 'react';

export default function useInputValue(
  initialValue?: string,
): [value: string, handleValueChange: (event: ChangeEvent<HTMLInputElement>) => void] {
  const [value, setValue] = useState<string>(initialValue ?? '');

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return [value, handleValueChange];
}

import { useState } from 'react';

export function useFile(): [Function, string] {
  const [content, setContent] = useState<string>('');
  const input = document.createElement('input');
  input.type = 'file';
  input.style.display = 'none';
  input.onchange = () => {
    if (!input.files) return;
    let file = input.files[0];
    let reader = new FileReader();
    reader.addEventListener('load', e => {
      if (!e.target || !e.target.result) return;
      setContent(e.target.result.toString());
    });
    reader.readAsText(file);
  };
  document.body.appendChild(input);
  const trigger = () => {
    const e = document.createEvent('MouseEvents');
    e.initEvent('click', true, true);
    input.dispatchEvent(e);
  };
  return [trigger, content];
}

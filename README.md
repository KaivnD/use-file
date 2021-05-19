# React use file hook

This is true use file hook for browser, you don't have to need a input element to handle event, just focus on your UI component.

## Usage

```tsx
import React from 'react';
import { useFile } from '@hoook/use-file';

export default function() {
  const [trigger, content] = useFile();

  return (
    <div>
      <div onClick={() => trigger()}>Whatever your trigger is</div>
      <p>{content}</p>
    </div>
  );
}
```

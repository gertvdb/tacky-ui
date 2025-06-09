import React from 'react';
import { Button } from '@/layouts/button';

// Valid examples
export const ValidButtonExamples = () => (
  <div>
    {/* Text child */}
    <Button onClick={() => console.log('Clicked')}>
      Simple text
    </Button>

    {/* Number child */}
    <Button onClick={() => console.log('Clicked')}>
      {42}
    </Button>

    {/* Null child */}
    <Button onClick={() => console.log('Clicked')} ariaLabel="Empty button">
      {null}
    </Button>

    {/* Valid element child */}
    <Button onClick={() => console.log('Clicked')}>
      <span>Text in span</span>
    </Button>

    {/* Multiple valid children */}
    <Button onClick={() => console.log('Clicked')}>
      <strong>Bold</strong> and <em>emphasized</em> text
    </Button>
  </div>
);

// Invalid examples - these would cause runtime errors
/*
export const InvalidButtonExamples = () => (
  <div>
    // Invalid element child
    <Button onClick={() => console.log('Clicked')}>
      <div>Text in div</div>
    </Button>

    // Invalid complex child
    <Button onClick={() => console.log('Clicked')}>
      <button>Nested button</button>
    </Button>
  </div>
);
*/

// Example showing how to use the Button component with TypeScript validation
const TypeScriptExample = () => {
  // This will show a TypeScript error because 'div' is not a valid child element type
  // const invalidButton = <Button><div>Invalid</div></Button>;

  // This is valid and will pass TypeScript validation
  const validButton = <Button><span>Valid</span></Button>;

  return validButton;
};
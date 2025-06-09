# TypeScript Utilities for Enforcing Valid Children in React Components

This directory contains utility types and functions for enforcing valid children in React components.

## Overview

When building React components, it's often necessary to restrict the types of children that a component can accept. For example, a Button component might only accept text, numbers, or specific HTML elements as children. TypeScript can help enforce these restrictions at compile time, and runtime validation can provide additional safety.

## Utilities

### `ValidChild<T, P>`

A generic type that represents a valid child for a component. It can be either a primitive type (P) or a React element of a specific type (T).

```typescript
type ValidChild<
  T extends string | React.JSXElementConstructor<any>,
  P = string | number | null
> = P | ReactElement<any, T>;
```

### `ValidChildren<T, P>`

A generic type that represents valid children for a component. It can be either a single valid child or an array of valid children.

```typescript
type ValidChildren<
  T extends string | React.JSXElementConstructor<any>,
  P = string | number | null
> = ValidChild<T, P> | ValidChild<T, P>[];
```

### `validateChildren()`

A helper function for runtime validation of children. It checks if children are valid based on the provided valid element types and allowed primitives.

```typescript
const validateChildren = (
  children: ReactNode,
  validElementTypes: (string | React.JSXElementConstructor<any>)[],
  allowedPrimitives: string[] = ["string", "number", "null"]
): boolean => {
  // Implementation details...
};
```

## Usage

### Step 1: Define Valid Element Types

Define the valid element types for your component's children.

```typescript
type ButtonElementTypes =
  | 'span'
  | 'svg'
  | 'img'
  | 'strong'
  | 'em'
  | 'b'
  | 'i'
  | 'u'
  | 'code'
  | 'abbr'
  | 'small'
  | 'time';
```

### Step 2: Create a Type for Valid Children

Use the `ValidChildren` utility type to create a type for valid children.

```typescript
type ValidButtonChildren = ValidChildren<ButtonElementTypes>;
```

### Step 3: Use the Type in Your Component Props

Override the `children` prop in your component's props interface to use the valid children type.

```typescript
interface IButton extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children: ValidButtonChildren;
  // Other props...
}
```

### Step 4: Add Runtime Validation

Use the `validateChildren` utility function to add runtime validation to your component.

```typescript
useEffect(() => {
  const validElementTypes = ['span', 'svg', 'img', 'strong', 'em', 'b', 'i', 'u', 'code', 'abbr', 'small', 'time'];
  const isValidChildren = validateChildren(children, validElementTypes);

  if (!isValidChildren) {
    throw new Error(
      '[Button] Invalid children. Only text, numbers, and specific HTML elements are allowed.'
    );
  }
}, [children]);
```

## Examples

See the following examples for how to use these utilities:

- [Button Component](/src/layouts/button/index.tsx)
- [Button Types](/src/layouts/button/button.types.ts)
- [Button Test Example](/src/example/button-test.tsx)
- [Drawer with Valid Children Example](/src/example/drawer-with-valid-children.tsx)
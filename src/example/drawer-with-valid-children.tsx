import React from 'react';
import { ValidChildren, validateChildren } from '@/utils/types/valid-children';

// Example of how to enforce valid children for the Drawer component

// Step 1: Define the valid element types for Drawer children
type DrawerElementTypes =
  | 'div'
  | 'section'
  | 'article'
  | 'header'
  | 'footer'
  | 'nav'
  | 'aside'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'ul'
  | 'ol'
  | 'li'
  | 'button';

// Step 2: Create a type for valid drawer children using the ValidChildren utility type
type ValidDrawerChildren = ValidChildren<DrawerElementTypes>;

// Step 3: Create an interface for the Drawer component props
interface IDrawerWithValidChildren {
  isOpen: boolean;
  onCloseRequest: () => void;
  children: ValidDrawerChildren;
  sizeExpanded?: string;
  sizeCollapsed?: string;
}

// Step 4: Implement the Drawer component with runtime validation
export const DrawerWithValidChildren = (props: IDrawerWithValidChildren) => {
  const { isOpen, onCloseRequest, children, sizeExpanded, sizeCollapsed } = props;

  // Runtime validation using the validateChildren utility function
  React.useEffect(() => {
    const validElementTypes = [
      'div', 'section', 'article', 'header', 'footer', 'nav', 'aside',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol', 'li', 'button'
    ];
    
    const isValidChildren = validateChildren(children, validElementTypes);

    if (!isValidChildren) {
      throw new Error(
        '[Drawer] Invalid children. Only specific HTML elements are allowed.'
      );
    }
  }, [children]);

  // Render the drawer (simplified for example purposes)
  return (
    <div className="drawer" style={{ display: isOpen ? 'block' : 'none' }}>
      <button onClick={onCloseRequest}>Close</button>
      <div className="drawer-content">
        {children}
      </div>
    </div>
  );
};

// Example usage
export const DrawerExample = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Drawer</button>
      
      <DrawerWithValidChildren
        isOpen={isOpen}
        onCloseRequest={() => setIsOpen(false)}
      >
        {/* Valid children */}
        <header>
          <h2>Drawer Title</h2>
        </header>
        <section>
          <p>This is a paragraph inside the drawer.</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
          </ul>
        </section>
        <footer>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </footer>
      </DrawerWithValidChildren>
      
      {/* This would cause a TypeScript error because 'canvas' is not in DrawerElementTypes */}
      {/* 
      <DrawerWithValidChildren
        isOpen={isOpen}
        onCloseRequest={() => setIsOpen(false)}
      >
        <canvas>Not allowed</canvas>
      </DrawerWithValidChildren>
      */}
    </div>
  );
};
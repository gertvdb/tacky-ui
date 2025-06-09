import { useEffect, useRef } from 'react';

/**
 * Hook to trap focus within a container when it's open
 * @param isActive Whether the focus trap is active
 * @returns A ref to be attached to the container element
 */
export const useFocusTrap = (isActive: boolean) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll<HTMLElement>(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Save the element that was focused before the drawer opened
    const previouslyFocusedElement = document.activeElement as HTMLElement;

    // Focus the first focusable element when the drawer opens
    firstElement.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      // Handle Tab key for focus trapping
      if (e.key === 'Tab') {
        // If shift + tab and focus is on first element, move to last element
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }

        // If tab and focus is on last element, move to first element
        if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      // Restore focus when the drawer closes
      if (previouslyFocusedElement) {
        previouslyFocusedElement.focus();
      }
    };
  }, [isActive]);

  return containerRef;
};

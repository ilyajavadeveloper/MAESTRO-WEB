import { useEffect } from 'react';

export default function AccessibilityWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://website-widgets.pages.dev/dist/sienna.min.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}

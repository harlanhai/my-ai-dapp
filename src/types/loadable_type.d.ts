declare module '@loadable/component' {
  import * as React from 'react';

  type DefaultComponent<T = any> = React.ComponentType<T>;

  export default function loadable<T extends DefaultComponent>(
    loader: (props: T) => Promise<{ default: T }>,
    options?: {
      fallback?: React.ReactNode;
    }
  ): T;
}
declare module '*.scss' {
  type IClassNames = Record<string, string>;
  const content: IClassNames;
  export default content;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg' {
  import type React from 'react';
  const content: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare const __IS_DEV__: boolean;

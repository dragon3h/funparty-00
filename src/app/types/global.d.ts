declare module "*.scss" {
  interface IClassNames {
    [className: string]: string
  }
  const content: IClassNames;
  export default content;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module "*.svg" {
  import React from "react";
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

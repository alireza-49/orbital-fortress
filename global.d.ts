// For global CSS imports (e.g., in _app.js or layout.tsx)
declare module "*.css";

// If you are using CSS Modules (highly recommended in Next.js)
// This will tell TypeScript that a CSS module import is an object of strings.
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// ... existing CSS declarations

// For GLSL shader files
declare module "*.glsl" {
  const value: string;
  export default value;
}

declare module "*.frag" {
  const value: string;
  export default value;
}

declare module "*.vert" {
  const value: string;
  export default value;
}

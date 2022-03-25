/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />
/// <reference types="vitest" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  // 更多环境变量...
}

// declare global {
interface Window {
  WIDGET: { CONFIG: Record<string, string> }
}
// }

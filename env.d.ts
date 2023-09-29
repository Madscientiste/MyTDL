/// <reference types="vite/client" />

interface ImportMetaEnv {
  TESTING: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

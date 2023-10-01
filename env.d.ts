/// <reference types="vite/client" />

interface ImportMetaEnv {
  STANDALONE: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/// <reference types="vite/client" />

interface ImportMetaEnv {}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const __VITE_ENABLE_FAKE_BACKEND__: boolean;

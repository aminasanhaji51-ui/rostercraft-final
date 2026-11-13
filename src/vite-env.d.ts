/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TRIAL_DAYS?: string;
  readonly VITE_APP_ENV?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

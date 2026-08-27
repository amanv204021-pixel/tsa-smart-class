/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_APP_NAME?: string;
  readonly VITE_APP_SHORT_NAME?: string;
  readonly VITE_APP_TAGLINE?: string;
  readonly VITE_PRIMARY_COLOR?: string;
  readonly VITE_SECONDARY_COLOR?: string;
  readonly VITE_ACCENT_COLOR?: string;
  readonly VITE_LOGO_URL?: string;
  readonly VITE_DEFAULT_TIMEZONE?: string;
  readonly VITE_ENABLE_PROCTORING?: string;
  readonly VITE_ENABLE_VOICE_VIVA?: string;
  readonly VITE_ENABLE_PUSH?: string;
  readonly VITE_VAPID_PUBLIC_KEY?: string;
  readonly VITE_FACE_MODEL_BASE_URL?: string;
  readonly VITE_DEMO_MODE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

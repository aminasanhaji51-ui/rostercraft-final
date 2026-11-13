import { defineConfig, devices } from '@playwright/test';

const bypassSecret = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
const deployedUrl = process.env.BASE_URL;

export default defineConfig({
  testDir: 'e2e',
  use: {
    baseURL: deployedUrl
      ? deployedUrl.startsWith('http')
        ? deployedUrl
        : `https://${deployedUrl}`
      : 'http://localhost:4173',
    extraHTTPHeaders: bypassSecret ? { 'x-vercel-protection-bypass': bypassSecret } : {},
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: deployedUrl
    ? undefined
    : { command: 'npm run build && npm run preview', url: 'http://localhost:4173', reuseExistingServer: true },
});

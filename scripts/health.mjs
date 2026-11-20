// Smoke check of the live site: the home page and the 404 page must answer as expected. Read-only, no dependencies.
// Usage: SITE_URL=https://<owner>.github.io/<repo>/ pnpm health   (the deploy workflow runs it after publishing)
const raw = process.env.SITE_URL?.trim();
if (!raw) {
  console.error("health: SITE_URL is not set");
  process.exit(1);
}
const base = raw.endsWith("/") ? raw : `${raw}/`;

const checks = [
  { path: "", status: 200, contains: "<main" },
  { path: "does-not-exist/", status: 404, contains: "" },
];

let failed = false;
for (const { path, status, contains } of checks) {
  const url = `${base}${path}`;
  try {
    const response = await fetch(url, {
      redirect: "follow",
      headers: { "cache-control": "no-cache" },
    });
    const body = await response.text();
    const ok = response.status === status && body.includes(contains);
    console.log(`${ok ? "ok  " : "FAIL"} ${response.status} ${url}`);
    if (!ok) failed = true;
  } catch (error) {
    console.log(`FAIL ${url} (${error instanceof Error ? error.message : error})`);
    failed = true;
  }
}
process.exit(failed ? 1 : 0);

/** Prepend the configured base URL to an internal path. */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${normalizedBase}${cleanPath}`;
}

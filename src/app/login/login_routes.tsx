export const LOGIN_ROUTE = {
  getHref: (next: string) => `/login?next=${encodeURIComponent(next)}`
}
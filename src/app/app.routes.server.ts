import { RenderMode, ServerRoute } from '@angular/ssr'

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Server }, // Always rendered on the server
  // { path: '', renderMode: RenderMode.Client }, // Rendered on the client like a typical SPA
  { path: '**', renderMode: RenderMode.Prerender }, // Pre-rendered during build time
  // TODO: implementar más adelante params: (https://www.youtube.com/watch?v=CoUL7UgcPZY)
]

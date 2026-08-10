# Routes

This project uses **React Router DOM** for routing.
The routes are defined and imported inside `src/App.tsx`.

## Conventions

- Every `.tsx` file in this directory represents a route component.
- The routing configuration is managed manually in `src/App.tsx`.
- We use the standard `<BrowserRouter>`, `<Routes>`, and `<Route>` paradigm.

Example structure:

- `index.tsx` maps to `/`
- `about-us.tsx` maps to `/about-us`
- `blog.$slug.tsx` maps to `/blog/:slug` (using `useParams()`)

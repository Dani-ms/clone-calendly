## Development

## Requirements

- Docker
- Node 18

### Setup

- Create a `.env` with
  - variables from `src/logic/internals/environment-variables.ts`
  - 
    ```
    GOOGLE_OAUTH_CLIENT_ID=
    GOOGLE_OAUTH_CLIENT_SECRET=
    GOOGLE_OAUTH_REDIRECT_URI=
    ```

### Start

- `npm install`
- `npm run dev:supabase:start`
- `npm run dev:supabase:migrations:up`

- `npm run dev`

## Before opening a Pull Request

- Read [Good Systems](docs/good-systems.md)
- Read [Practices](docs/practices.md)
- If there are changes made to the database
  - run `npm run dev:supabase:migrations:generate`
- Run `npm run build`

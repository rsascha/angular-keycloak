# angular-keycloak

## My Plan

- Init basic angular application
- Init ngrx architecture
- Implement Keycloak login - display user name
- Move Keycloak implementation to npm module
- Support API calls using Keycloak (forward Keycloak token)

## Start Keycloak

```bash
docker-compose up
```

URL: http://localhost:8080

Credentials: `admin` / `password`.

To use the current configuration, you need to configure:

- Clients -> Create
- Client ID: `angular-keycloak`
- Root URL: `http://localhost:4200/`
- -> Save
- Direct Access Grants: OFF
- -> Save

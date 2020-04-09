PREVIOUS ENV:

APOLLO_CONTAINER_IMAGE=lambdaschoollabs/careforlife-apollo:latest
OAUTH_TOKEN_ENDPOINT=https://dev-384670.okta.com/oauth2/default/v1/token
OAUTH_CLIENT_ID=0oa4zi41jRnaxQ3Wy4x6
PRISMA_ENDPOINT=http://localhost:7000
PRISMA_SECRET=secret
PRISMA_MANAGEMENT_API_SECRET=anothersecret
JWKS_URI=https://dev-384670.okta.com/oauth2/default/v1/keys
JWT_ISSUER=https://dev-384670.okta.com/oauth2/default
LOG_LEVEL=debug

# ------------------------------------------------------------------------
FLOW FOR LOCAL SETUP:

make local-up
make local-prisma-token
make apollo-token
make apollo-push
make aws-apollo-update-service
make aws-prisma-deploy
make aws-prisma-reseed


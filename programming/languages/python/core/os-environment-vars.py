import os

DEVELOPMENT = "development"
STAGING = "staging"
PRODUCTION = "production"

current_env = os.environ.get("ENV_NAME", DEVELOPMENT)

if current_env == DEVELOPMENT:
    print("Development environment")
elif current_env == PRODUCTION:
    print("Production environment")
elif current_env == STAGING:
    print("Staging environment")
# Can test using "export ENV_NAME=something_else" in terminal (Mac/Linux)
else:
    print("Unknown environment")

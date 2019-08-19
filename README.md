# Steps to run this project:

1. Run `make set-up` command to install docker dependencies
2. Run `docker-compose up -d` command to up `postgres` container
3. Create database named `project_development` inside a container
4. Execute migrations `ts-node ./node_modules/typeorm/cli.js migration:run` command
5. Run `make dev-server` command to run server
6. Run `make webpack-dev` command to run webpack server

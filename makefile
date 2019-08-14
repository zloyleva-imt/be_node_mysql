start: # Starting project
	@docker-compose up -d && npm start

stop: # Stopping project
	@docker-compose down

ps: # Show running containers
	@docker ps

connect_db: 
	@docker-compose exec db bash

fresh: 
	@npx sequelize-cli db:migrate:undo:all && npx sequelize-cli db:migrate

create_model:
	@npx sequelize-cli model:generate --name $(name) --attributes $(attr)
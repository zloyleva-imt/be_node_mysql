start: # Starting project
	@docker-compose up -d

stop: # Stopping project
	@docker-compose down

ps: # Show running containers
	@docker ps

connect_db: 
	@docker-compose exec db bash
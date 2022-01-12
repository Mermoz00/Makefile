up:
	php bin/console server:start
down:
	php bin/console server:stop
init:
	composer require --dev symfony/web-server-bundle ^4.4.x-dev
	up
db:
	touch .env.local
	echo 'DATABASE_URL="mysql://root:Admin@1234@127.0.0.1:3306/'$(name)'?serverVersion=8.0.26"' > .env.local
	php bin/console ibexa:install
	php bin/console ibexa:graphql:generate-schema
build:
	php bin/console cache:clear
	php bin/console assets:install
	yarn encore dev
webpack:
	yarn encore dev
	php bin/console cache:clear
clear:
	php bin/console cache:clear
selenium:
	java -jar selenium-server-4.0.0.jar --ext selenium-server-4.0.0.jar:dir standalone --port 4444



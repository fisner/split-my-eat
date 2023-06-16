install:
	npm ci
	npm link

uninstall:
	npm uninstall -g split-my-eat

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npx jest

test-coverage:
	npx jest --coverage

run:
	node bin/splitMyEat.js
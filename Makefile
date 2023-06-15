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

run:
	node bin/splitMyEat.js
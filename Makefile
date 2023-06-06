install:
	npm i
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
	node bin/split-my-eat.js male 33 178 82
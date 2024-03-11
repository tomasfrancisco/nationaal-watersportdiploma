SHELL:=$(PREFIX)/bin/sh

build: \
	generated/api \

rebuild: \
	clean build

clean: \

	rm --recursive --force generated/api \

generated/%: specifications/%.yaml
	pnpm --package oa42-generator@0.9.5 dlx oa42-generator package $^ \
		--package-directory $@ \
		--package-name @nawadi/$(notdir $(basename $@)) \
		--package-version 0.0.0 \

	pnpm --filter {$@} install --no-lockfile
	pnpm --filter {$@} build

.PHONY: \
	build \
	rebuild \
	clean \

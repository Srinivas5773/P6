.PHONY: all build start test clean

all: build

build:
	@echo "Building Memory Match Application..."

start:
	node app.js

test:
	node --test tests/*.test.js

clean:
	@echo "Cleaning temporary files..."

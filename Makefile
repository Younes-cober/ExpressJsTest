
port = 8080
build:
	docker build -t node-express-test -f ./container/Dockerfile .	
run:build
	docker run -d -p $(port):3000 node-express-test

.PHONY: build

build:
	docker run -it --rm -u root -v $(PWD):/home/gradle/morpheus-plugin-trilio-v4 -w /home/gradle/morpheus-plugin-trilio-v4 gradle:8.5-jdk11 gradle clean build shadowJar 
	cp ./build/libs/* ./plugins/.
	rm -r ./build


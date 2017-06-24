FROM java:8-jdk
WORKDIR /app
ONBUILD COPY app.jar /app/app.jar

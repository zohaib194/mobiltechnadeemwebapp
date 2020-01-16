FROM java:8
VOLUME /tmp
EXPOSE 5016
ADD /target/backend-1.0-SNAPSHOT.jar backend-1.0-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","backend-1.0-SNAPSHOT.jar"]
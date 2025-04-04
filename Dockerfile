FROM node:20.17.0

COPY . /reja
WORKDIR /reja
CMD npm install && node server.js


# DOCKERFILE => DOCKER IMAGE => direct docker: CONTAINER
# DOCKERFILE => DOCKER IMAGE => docker-compose: CONTAINER


# docker image ls
# docker ps

# Barcha containerlarni to'xtatish va o'chirish #
# docker stop $(docker ps -a -q)
# docker rm $(docker ps -a -q)

# Barcha to'xtagan containerlarni o'chirish:
# docker container prune 
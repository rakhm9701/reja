FROM node:20.17.0

COPY . /reja
WORKDIR /reja
CMD npm install && node server.js


# DOCKERFILE => DOCKER IMAGE => direct docker: CONTAINER
# DOCKERFILE => DOCKER IMAGE => docker-compose: CONTAINER


# docker image ls
# docker ps

# Barcha containerlarni to'xtatish va o'chirish #
# docker container stop id
# docker container rm (remove) id

# Barcha to'xtagan containerlarni o'chirish:
# docker container prune 
FROM php:7.4-fpm-alpine
WORKDIR "/backend"

# Fix debconf warnings upon build
ARG DEBIAN_FRONTEND=noninteractive

RUN apk add --no-cache postgresql-dev \
    && docker-php-ext-install pgsql pdo_pgsql

# Install selected extensions and other stuff
RUN apt-get update \
    && apt-get -y --no-install-recommends install php-pgsql php-gd \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*

# Install git
RUN apt-get update \
    && apt-get -y install git \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*

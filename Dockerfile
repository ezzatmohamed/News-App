FROM composer


WORKDIR  /var/www

COPY ./server .

RUN docker-php-ext-install pdo pdo_mysql
RUN cp .env.example .env

# CMD php artisan serve --host=0.0.0.0 --port=$PORT

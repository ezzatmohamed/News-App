FROM composer

WORKDIR /app/api
COPY . .

RUN docker-php-ext-install pdo pdo_mysql

RUN composer install
RUN php artisan key:generate
RUN php artisan jwt:secret
RUN php artisn migrate

CMD php artisan serve --host=0.0.0.0 --port=$PORT
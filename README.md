# Agenda 
  
   * [Introduction](#introduction) <br>
        * [Description](#description) <br>
        * [Live Demo](#live-demo) <br>
        * [Folder Structure](#folder-structure) <br>
   * [How to run](#how-to-run)<br>
        * [Requirements](#requirements) <br>
        * [Installation](#installation) <br>
        * [Setting up Environment values](#setting-up-environment-values) <br>
        * [Steps to run](#steps-to-run) <br>
        * [Steps to run](#steps-to-run) <br>

    
  

# Introduction

## Description
News Application fetches an open source NEWS API to retrieve news,browse and top headlines about business and sports in Egypt or UAE.

**Technologies** : Reactjs & Laravel 8


## Live Demo

https://yodawy-news.herokuapp.com/ 


## Folder Structure 
- ***client***   folder contains Reactjs project.
- ***server*** folder contains laravel code and the the ***client*** production build files.
# How to run

## Requirements:
- PHP 7.x
- Composer
- Mysql Database 

## Installation
```
$ git clone https://github.com/ezzatmohamed/News-App.git
$ cd News-App/server
$ cp .env.example .env
$ composer install
``` 
## Setting up Environment values

- Database Setup
```
DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE= YOUR DATABASE NAME
DB_USERNAME= YOUR USERNAME
DB_PASSWORD= YOUR Password
DB_DATABASE_TEST= TEST DATABASE ( for unit testing )
```
- Email service Setup
```
MAIL_MAILER=smtp
MAIL_HOST=  Mail Host (eg. Gmail:smtp.googlemail.com)
MAIL_PORT=465
MAIL_USERNAME= YOUR EMAIL ADDRESS
MAIL_PASSWORD= YOUR EMAIL PASSWORD
MAIL_ENCRYPTION=ssl
MAIL_FROM_ADDRESS= YOUR EMAIL ADDRESS
MAIL_FROM_NAME="${APP_NAME}"
```

## Steps to run
Before running comands, make sure you started your database
```
$ php artisan migrate
$ php artisan serve
```


Visit this link in the browser: http://localhost:8000

**For Unit testing**
```
$ ./vendor/bin/phpunit
```



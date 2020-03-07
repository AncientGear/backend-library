CREATE DATABASE library;

CREATE TABLE client(
    id_client SERIAL PRIMARY KEY,
    name VARCHAR(40),
    last_name VARCHAR(40),
    address VARCHAR(80)
);

CREATE TABLE book(
    id_book SERIAL PRIMARY KEY,
    title TEXT,
    autor VARCHAR(60),
    publication DATE
);

CREATE TABLE sales(
    id_sales SERIAL PRIMARY KEY,
    price_of_sale DECIMAL,
    date_of_sale DATE,
    id_book SERIAL REFERENCES book(id_book)
);


CREATE TABLE provider(
    id_provider SERIAL PRIMARY KEY,
    name VARCHAR(70),
    adress VARCHAR(80),
    id_book SERIAL REFERENCES book(id_book)
);
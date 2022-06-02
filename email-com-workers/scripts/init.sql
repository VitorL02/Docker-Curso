create database email_sender;

\c email_sender

CREATE TABLE emails (
    id SERIAL PRIMARY KEY NOT NULL,
    data timestamp not null default current_timestamp, 
    assunto VARCHAR(100) NOT NULL,
    mensagem VARCHAR(250) NOT NULL
);
\l 
\c email_sender
\d emails
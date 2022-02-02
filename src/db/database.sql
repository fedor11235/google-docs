create table person ( 
    id SERIAL PRIMARY KEY,
    login VARCHAR(255),
    password VARCHAR(255)
);

create table post (
    id SERIAL PRIMARY KEY,
    content VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person(id)
);
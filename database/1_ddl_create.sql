CREATE TABLE political_partys(
    id_party SERIAL NOT NULL,
    name_party  VARCHAR (200) NOT NULL,
    constraint PK_POLITICALPARTY primary key (id_party)
);
ALTER TABLE political_partys owner to user_node;

CREATE TABLE candidates (
    id_candidate SERIAL NOT NULL,
    name_candidate VARCHAR(200) NOT NULL,
    datebirth_candidate DATE NOT NULL,
    eval_candidate NUMERIC(12,2) NOT NULL,
    id_party int4 NOT NULL,
    constraint PK_CANDIDATE primary key(id_candidate)
);
ALTER TABLE candidates owner to user_node;
ALTER TABLE candidates
    add constraint FK_PARTY_CANDIDATES FOREIGN KEY (id_party)
    REFERENCES political_partys(id_party)
    ON DELETE restrict ON UPDATE cascade;
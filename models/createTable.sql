-- Table: public.hm_shared
 DROP TABLE IF EXISTS public.hm_shared;

CREATE TABLE IF NOT EXISTS public.hm_shared
(
    uid serial,
    pract_id integer,
    client_id integer,
    shared_email character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT hm_shared_pk PRIMARY KEY (uid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.hm_shared
    OWNER to postgres;
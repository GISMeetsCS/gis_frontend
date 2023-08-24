-- public.global_info definition

-- Drop table

-- DROP TABLE public.global_info;

CREATE TABLE public.global_info (
	radius int4 NULL,
	total_trees int4 NULL,
	total_area float4 NULL,
	total_green_quality float4 NULL
);

-- public."user" definition

-- Drop table

-- DROP TABLE public."user";

CREATE TABLE public."user" (
	user_id serial4 NOT NULL,
	email varchar(50) NULL,
	user_name varchar(50) NULL,
	nickname varchar(30) NULL,
	"password" varchar(50) NULL,
	status int4 NULL,
	jwt_token varchar(100) NULL,
	num_upload int4 NULL,
	num_issue int4 NULL,
	CONSTRAINT user_pkey PRIMARY KEY (user_id)
);

-- public.photo definition

-- Drop table

-- DROP TABLE public.photo;

CREATE TABLE public.photo (
	photo_id int8 NOT NULL,
	entity_file int2 NOT NULL,
	green_area int4 NOT NULL,
	latitude float8 NOT NULL,
	longitude float8 NOT NULL,
	num_trees int4 NOT NULL,
	original_file int2 NOT NULL,
	upload_time bytea NULL,
	user_id int4 NOT NULL,
	vertical_diversity int4 NOT NULL,
	CONSTRAINT photo_pkey PRIMARY KEY (photo_id)
);


-- public.photo foreign keys

ALTER TABLE public.photo ADD CONSTRAINT photo_fk FOREIGN KEY (user_id) REFERENCES public."user"(user_id);

-- public.photo_entity definition

-- Drop table

-- DROP TABLE public.photo_entity;

CREATE TABLE public.photo_entity (
	photo_id int8 NOT NULL,
	pixel_x int4 NOT NULL,
	pixel_y int4 NOT NULL,
	"type" int4 NOT NULL,
	CONSTRAINT photo_entity_pkey PRIMARY KEY (photo_id)
);

-- public.issue definition

-- Drop table

-- DROP TABLE public.issue;

CREATE TABLE public.issue (
	issue_id int4 NOT NULL,
	description oid NULL,
	extra_score int4 NOT NULL,
	latitude float8 NOT NULL,
	longitude float8 NOT NULL,
	photo int2 NOT NULL,
	status int4 NOT NULL,
	subject varchar(255) NULL,
	user_id int4 NOT NULL,
	CONSTRAINT issue_pkey PRIMARY KEY (issue_id)
);


-- public.issue foreign keys

ALTER TABLE public.issue ADD CONSTRAINT issue_fk FOREIGN KEY (user_id) REFERENCES public."user"(user_id);
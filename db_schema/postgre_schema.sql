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
	user_id bigserial NOT NULL,
	email varchar(50) NULL,
	user_name varchar(50) NULL,
	nick_name varchar(30) NULL,
	"password" varchar(50) NULL,
	status int2 NULL,
	jwt_token varchar(100) NULL,
	num_upload int4 NULL,
	num_issue int4 NULL,
	CONSTRAINT user_pkey PRIMARY KEY (user_id)
);


-- public.issue definition

-- Drop table

-- DROP TABLE public.issue;

CREATE TABLE public.issue (
	issue_id bigserial NOT NULL,
	user_id bigserial NOT NULL,
	subject varchar(100) NULL,
	description text NULL,
	photo bytea NULL,
	status int2 NULL,
	latitude float4 NULL,
	longitude float4 NULL,
	extra_score int4 NULL,
	CONSTRAINT issue_pkey PRIMARY KEY (issue_id),
	CONSTRAINT issue_fk FOREIGN KEY (user_id) REFERENCES public."user"(user_id)
);


-- public.photo definition

-- Drop table

-- DROP TABLE public.photo;

CREATE TABLE public.photo (
	photo_id bigserial NOT NULL,
	latitude float4 NULL,
	longitute float4 NULL,
	user_id bigserial NOT NULL,
	green_area int4 NULL,
	num_trees int4 NULL,
	virtical_diversity int4 NULL,
	original_file bytea NULL,
	entity_file bytea NULL,
	upload_time timestamp NULL,
	CONSTRAINT photo_pkey PRIMARY KEY (photo_id),
	CONSTRAINT photo_fk FOREIGN KEY (user_id) REFERENCES public."user"(user_id)
);


-- public.photo_entity definition

-- Drop table

-- DROP TABLE public.photo_entity;

CREATE TABLE public.photo_entity (
	photo_id bigserial NOT NULL,
	pixel_x int4 NULL,
	pixel_y int4 NULL,
	"type" int2 NULL,
	CONSTRAINT photo_entity_fk FOREIGN KEY (photo_id) REFERENCES public.photo(photo_id) ON DELETE CASCADE
);
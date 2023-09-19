CREATE TABLE public.global_info (
	radius int4 NULL,
	total_trees int4 NULL,
	total_area float4 NULL,
	total_green_quality float4 NULL
);

CREATE TABLE public."member" (
	member_id SERIAL NOT NULL,
	email varchar(50) NULL,
	member_name varchar(50) NULL,
	nickname varchar(30) NULL,
	"password" varchar(50) NULL,
	status int4 NULL,
	jwt_token varchar(100) NULL,
	num_upload int4 NULL,
	num_issue int4 NULL,
	CONSTRAINT user_pkey PRIMARY KEY (member_id)
);

CREATE TABLE public.photo (
	photo_id SERIAL NOT NULL,
	green_area int4 NOT NULL,
	latitude float8 NOT NULL,
	longitude float8 NOT NULL,
	num_trees int4 NOT NULL,
	original_file bytea NOT NULL,
	upload_time timestamp NULL,
	member_id int4 NOT NULL,
	vertical_diversity int4 NOT NULL,
	CONSTRAINT photo_pkey PRIMARY KEY (photo_id)
);

CREATE TABLE public.photo_entity (
	photo_id SERIAL NOT NULL,
	entity_file bytea NOT NULL,
	pixel_x int4 NOT NULL,
	pixel_y int4 NOT NULL,
	"type" int4 NOT NULL,
	CONSTRAINT photo_entity_pkey PRIMARY KEY (photo_id)
);

CREATE TABLE public.issue (
	issue_id SERIAL NOT NULL,
	description oid NULL,
	extra_score int4 NOT NULL,
	latitude float8 NOT NULL,
	longitude float8 NOT NULL,
	photo bytea NOT NULL,
	status int4 NOT NULL,
	subject varchar(255) NULL,
	member_id int4 NOT NULL,
	CONSTRAINT issue_pkey PRIMARY KEY (issue_id)
);

ALTER TABLE public.photo ADD CONSTRAINT photo_fk FOREIGN KEY (member_id) REFERENCES public."member"(member_id);
ALTER TABLE public.issue ADD CONSTRAINT issue_fk FOREIGN KEY (member_id) REFERENCES public."member"(member_id);
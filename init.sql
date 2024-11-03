--
-- PostgreSQL database dump
--
-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3
SET statement_timeout = 0;

SET lock_timeout = 0;

SET idle_in_transaction_session_timeout = 0;

SET client_encoding = 'UTF8';

SET standard_conforming_strings = ON;

SELECT
    pg_catalog.set_config('search_path', '', FALSE);

SET check_function_bodies = FALSE;

SET xmloption = content;

SET client_min_messages = warning;

SET row_security = OFF;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sent_messages; Type: TABLE; Schema: public; Owner: -
--
DROP TABLE IF EXISTS public.sent_messages;

CREATE TABLE public.sent_messages (
    id bigint NOT NULL,
    text text,
    "user" text,
    added timestamp with time zone DEFAULT now()
);

--
-- Name: sent_messages_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--
ALTER TABLE public.sent_messages
    ALTER COLUMN id
    ADD GENERATED ALWAYS AS IDENTITY (SEQUENCE NAME
        public.sent_messages_id_seq START WITH 1 INCREMENT BY 1
        NO MINVALUE
        NO MAXVALUE
        CACHE 1);

--
-- Data for Name: sent_messages; Type: TABLE DATA; Schema: public; Owner: -
--
COPY public.sent_messages (id, text, "user", added) FROM stdin;
1	Amando	Hi there!	2024-08-25 04:03:32.987089+03
2	Charles	Hello World	2024-08-25 04:03:32.987089+03
3	xczx	dasasd	2024-08-25 04:23:29.579573+03
4	adsdadsa	asdsa	2024-08-25 04:23:41.889266+03
5	asdasd	asdfsaf	2024-08-25 05:17:16.253624+03
6	asdasd	121221	2024-08-25 05:24:36.092436+03
7	asdasd	<b>hello</b>	2024-08-25 05:24:47.047537+03
8	adsdadsa	<b>hello</b>	2024-08-25 05:24:54.042106+03
9	Name	Message	2024-08-25 05:29:04.539689+03
10	hjjhhj	Name	2024-08-25 05:34:27.602816+03
11	xczx	Message	2024-08-25 05:42:23.085159+03
\.

--
-- Name: sent_messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--
SELECT
    pg_catalog.setval('public.sent_messages_id_seq', 11, TRUE);

--
-- PostgreSQL database dump complete
--

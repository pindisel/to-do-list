--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

-- Started on 2021-07-02 00:16:18

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 201 (class 1259 OID 33068)
-- Name: todolist; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.todolist (
    id integer NOT NULL,
    task text NOT NULL
);


ALTER TABLE public.todolist OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 33066)
-- Name: todolist_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.todolist_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.todolist_id_seq OWNER TO postgres;

--
-- TOC entry 2991 (class 0 OID 0)
-- Dependencies: 200
-- Name: todolist_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.todolist_id_seq OWNED BY public.todolist.id;


--
-- TOC entry 2851 (class 2604 OID 33071)
-- Name: todolist id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.todolist ALTER COLUMN id SET DEFAULT nextval('public.todolist_id_seq'::regclass);


--
-- TOC entry 2985 (class 0 OID 33068)
-- Dependencies: 201
-- Data for Name: todolist; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.todolist (id, task) FROM stdin;
\.


--
-- TOC entry 2992 (class 0 OID 0)
-- Dependencies: 200
-- Name: todolist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.todolist_id_seq', 7, true);


--
-- TOC entry 2853 (class 2606 OID 33076)
-- Name: todolist todolist_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.todolist
    ADD CONSTRAINT todolist_pkey PRIMARY KEY (id);


-- Completed on 2021-07-02 00:16:18

--
-- PostgreSQL database dump complete
--


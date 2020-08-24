--
-- PostgreSQL database dump
--

-- Dumped from database version 11.1
-- Dumped by pg_dump version 12rc1

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

--
-- Name: bets_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.bets_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


SET default_tablespace = '';

--
-- Name: bets; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.bets (
    id bigint DEFAULT nextval('public.bets_id_seq'::regclass) NOT NULL,
    number integer,
    color character varying(10),
    money integer NOT NULL,
    user_id bigint NOT NULL,
    roulette_id bigint NOT NULL
);


--
-- Name: roulette_status_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.roulette_status_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


--
-- Name: roulette_status; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.roulette_status (
    id bigint DEFAULT nextval('public.roulette_status_id_seq'::regclass) NOT NULL,
    status character varying NOT NULL
);


--
-- Name: roulettes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.roulettes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;


--
-- Name: roulettes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.roulettes (
    id bigint DEFAULT nextval('public.roulettes_id_seq'::regclass) NOT NULL,
    roulette_status_id bigint DEFAULT 0 NOT NULL
);


--
-- Name: betting_roulette; Type: VIEW; Schema: public; Owner: -
--

CREATE VIEW public.betting_roulette AS
 SELECT r.id,
    r.roulette_status_id,
    rs.status AS roulette_status,
    b.id AS bet_id,
    b.number,
    b.color,
    b.money,
    b.user_id
   FROM ((public.roulettes r
     JOIN public.roulette_status rs ON ((r.roulette_status_id = rs.id)))
     JOIN public.bets b ON ((r.id = b.roulette_id)));


--
-- Name: bets bets_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.bets
    ADD CONSTRAINT bets_pkey PRIMARY KEY (id);


--
-- Name: roulette_status roulette_status_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.roulette_status
    ADD CONSTRAINT roulette_status_pkey PRIMARY KEY (id);


--
-- Name: roulettes roulettes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.roulettes
    ADD CONSTRAINT roulettes_pkey PRIMARY KEY (id);


--
-- Name: index_roulettes_id1; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_roulettes_id1 ON public.bets USING btree (roulette_id);


--
-- Name: roulettes lnk_roulette_status_roulettes; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.roulettes
    ADD CONSTRAINT lnk_roulette_status_roulettes FOREIGN KEY (roulette_status_id) REFERENCES public.roulette_status(id) MATCH FULL ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: bets lnk_roulettes_bets; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.bets
    ADD CONSTRAINT lnk_roulettes_bets FOREIGN KEY (roulette_id) REFERENCES public.roulettes(id) MATCH FULL ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--


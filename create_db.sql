--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.2
-- Dumped by pg_dump version 10.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- Name: plv8; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plv8 WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plv8; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plv8 IS 'PL/JavaScript (v8) trusted procedural language';


--
-- Name: btree_gin; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS btree_gin WITH SCHEMA public;


--
-- Name: EXTENSION btree_gin; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION btree_gin IS 'support for indexing common datatypes in GIN';


--
-- Name: btree_gist; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS btree_gist WITH SCHEMA public;


--
-- Name: EXTENSION btree_gist; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION btree_gist IS 'support for indexing common datatypes in GiST';


--
-- Name: citext; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;


--
-- Name: EXTENSION citext; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';


--
-- Name: cube; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS cube WITH SCHEMA public;


--
-- Name: EXTENSION cube; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION cube IS 'data type for multidimensional cubes';


--
-- Name: dblink; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS dblink WITH SCHEMA public;


--
-- Name: EXTENSION dblink; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION dblink IS 'connect to other PostgreSQL databases from within a database';


--
-- Name: dict_int; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS dict_int WITH SCHEMA public;


--
-- Name: EXTENSION dict_int; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION dict_int IS 'text search dictionary template for integers';


--
-- Name: dict_xsyn; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS dict_xsyn WITH SCHEMA public;


--
-- Name: EXTENSION dict_xsyn; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION dict_xsyn IS 'text search dictionary template for extended synonym processing';


--
-- Name: earthdistance; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS earthdistance WITH SCHEMA public;


--
-- Name: EXTENSION earthdistance; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION earthdistance IS 'calculate great-circle distances on the surface of the Earth';


--
-- Name: fuzzystrmatch; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS fuzzystrmatch WITH SCHEMA public;


--
-- Name: EXTENSION fuzzystrmatch; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION fuzzystrmatch IS 'determine similarities and distance between strings';


--
-- Name: hstore; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS hstore WITH SCHEMA public;


--
-- Name: EXTENSION hstore; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION hstore IS 'data type for storing sets of (key, value) pairs';


--
-- Name: intarray; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS intarray WITH SCHEMA public;


--
-- Name: EXTENSION intarray; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION intarray IS 'functions, operators, and index support for 1-D arrays of integers';


--
-- Name: ltree; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS ltree WITH SCHEMA public;


--
-- Name: EXTENSION ltree; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION ltree IS 'data type for hierarchical tree-like structures';


--
-- Name: pg_stat_statements; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS pg_stat_statements WITH SCHEMA public;


--
-- Name: EXTENSION pg_stat_statements; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pg_stat_statements IS 'track execution statistics of all SQL statements executed';


--
-- Name: pg_trgm; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;


--
-- Name: EXTENSION pg_trgm; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pg_trgm IS 'text similarity measurement and index searching based on trigrams';


--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
-- Name: pgrowlocks; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS pgrowlocks WITH SCHEMA public;


--
-- Name: EXTENSION pgrowlocks; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgrowlocks IS 'show row-level locking information';


--
-- Name: pgstattuple; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS pgstattuple WITH SCHEMA public;


--
-- Name: EXTENSION pgstattuple; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgstattuple IS 'show tuple-level statistics';


--
-- Name: sslinfo; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS sslinfo WITH SCHEMA public;


--
-- Name: EXTENSION sslinfo; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION sslinfo IS 'information about SSL certificates';


--
-- Name: tablefunc; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS tablefunc WITH SCHEMA public;


--
-- Name: EXTENSION tablefunc; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION tablefunc IS 'functions that manipulate whole tables, including crosstab';


--
-- Name: unaccent; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS unaccent WITH SCHEMA public;


--
-- Name: EXTENSION unaccent; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION unaccent IS 'text search dictionary that removes accents';


--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


--
-- Name: xml2; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS xml2 WITH SCHEMA public;


--
-- Name: EXTENSION xml2; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION xml2 IS 'XPath querying and XSLT';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: interviews; Type: TABLE; Schema: public; Owner: efqwjvxh
--

CREATE TABLE public.interviews (
    id integer NOT NULL,
    user_id integer NOT NULL,
    company character varying NOT NULL,
    "position" character varying NOT NULL,
    notes character varying,
    type character varying NOT NULL,
    interview_date character varying NOT NULL,
    created_at date NOT NULL,
    updated_at date NOT NULL
);


ALTER TABLE public.interviews OWNER TO efqwjvxh;

--
-- Name: interviews_id_seq; Type: SEQUENCE; Schema: public; Owner: efqwjvxh
--

CREATE SEQUENCE public.interviews_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.interviews_id_seq OWNER TO efqwjvxh;

--
-- Name: interviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: efqwjvxh
--

ALTER SEQUENCE public.interviews_id_seq OWNED BY public.interviews.id;


--
-- Name: questions; Type: TABLE; Schema: public; Owner: efqwjvxh
--

CREATE TABLE public.questions (
    id integer NOT NULL,
    question_text character varying NOT NULL,
    interview_id integer NOT NULL,
    created_at date NOT NULL,
    updated_at date NOT NULL
);


ALTER TABLE public.questions OWNER TO efqwjvxh;

--
-- Name: questions_id_seq; Type: SEQUENCE; Schema: public; Owner: efqwjvxh
--

CREATE SEQUENCE public.questions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.questions_id_seq OWNER TO efqwjvxh;

--
-- Name: questions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: efqwjvxh
--

ALTER SEQUENCE public.questions_id_seq OWNED BY public.questions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: efqwjvxh
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying NOT NULL,
    user_name character varying NOT NULL,
    display_name character varying NOT NULL,
    photo_url character varying NOT NULL,
    github_id character varying NOT NULL,
    access_token character varying NOT NULL
);


ALTER TABLE public.users OWNER TO efqwjvxh;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: efqwjvxh
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO efqwjvxh;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: efqwjvxh
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: interviews id; Type: DEFAULT; Schema: public; Owner: efqwjvxh
--

ALTER TABLE ONLY public.interviews ALTER COLUMN id SET DEFAULT nextval('public.interviews_id_seq'::regclass);


--
-- Name: questions id; Type: DEFAULT; Schema: public; Owner: efqwjvxh
--

ALTER TABLE ONLY public.questions ALTER COLUMN id SET DEFAULT nextval('public.questions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: efqwjvxh
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: interviews; Type: TABLE DATA; Schema: public; Owner: efqwjvxh
--

COPY public.interviews (id, user_id, company, "position", notes, type, interview_date, created_at, updated_at) FROM stdin;
0	123	Google	Front End	Tough interview	On-site	2018-07-08	2018-07-08	2018-07-08
1	123	Unknown	Full Stack	HackerRank challenge	Coding challenge	2018-06-28	2018-07-08	2018-07-08
2	123	BounceX	Front End	"Context: At BounceX we often execute complex problems using entirely front-end JavaScript. 	Phone/video chat	2018-06-23	2018-07-08	2018-07-08
3	123	CandidCo	Front End	\N	Phone/video chat	2018-06-21	2018-07-08	2018-07-08
4	123	Statespace	Full Stack	\N	Phone/video chat	2018-06-17	2018-07-08	2018-07-08
5	123	VideoAmp	Back End	\N	Take-home	2018-06-06	2018-07-08	2018-07-08
6	123	AutoAnything	Front End	Wanted quick, concise answers for most and explain more when needed<br>It's a frontend position but they also asked some C#/.net questions	Phone/video chat	2018-06-03	2018-07-08	2018-07-08
7	123	citizenNet	Front End	\N	Coding challenge	2018-05-22	2018-07-08	2018-07-08
8	123	Rotten Tomatoes	Back End	\N	On-site	2018-05-17	2018-07-08	2018-07-08
9	123	Shoes of Prey	Front End	\N	On-site	2018-05-15	2018-07-08	2018-07-08
10	123	Sumo Logic	Front End	I got a referral from my friend’s wife works there. I’d have much preferred to do the interview after I’ve had more practice but they are looking to hire asap so I was told today would be the latest they’d be comfortable starting the hiring process.<br><br>Forgot to take notes so may be missing a few questions.<br>Started off with employment history, then asked about what I’ve been working on most recently so I talked about the production project.<br>Asked about some technical challenges that came up during the project and how they were overcome.	Phone/video chat	2018-05-11	2018-07-08	2018-07-08
11	123	hulu	Full Stack	Online coding thing today. Kicking it off strong with a failure right off the bat! I wasn't timing but probly took at least 30mins over expired time :disappointed: .	Coding challenge	2018-05-07	2018-07-08	2018-07-08
12	123	hulu	Front End	\N	Coding challenge	2018-05-05	2018-07-08	2018-07-08
13	123	hulu	Front End	\N	Coding challenge	2018-05-03	2018-07-08	2018-07-08
14	123	Unknown	Front End	\N	Coding challenge	2018-04-29	2018-07-08	2018-07-08
15	123	triplebyte	Other	Just did 2 (closer to 3 ) hr triplebyte interview. Here are my tips if yall are doing it.<br>Look at this guide https://triplebyte.com/static/interview_guide_2h_v2. It's pretty accurate<br>Do minesweeper it's almost exactly the same. Do it right like the snake game, classes, turns, single state.<br>Short answer is pretty detailed. These are the questions I got, but I'm under the impression these vary a ton	Phone/video chat	2018-04-22	2018-07-08	2018-07-08
16	123	chrome river	Front End	\N	Phone/video chat	2018-04-19	2018-07-08	2018-07-08
17	123	Unknown	Front End	\N	On-site	2018-04-15	2018-07-08	2018-07-08
\.


--
-- Data for Name: questions; Type: TABLE DATA; Schema: public; Owner: efqwjvxh
--

COPY public.questions (id, question_text, interview_id, created_at, updated_at) FROM stdin;
0	Create a public API:<br>const s = new SmartObject(cssSelector: string);<br>s.addClass(className: string)<br>s.removeclass(className: string)<br>s.filter(selector: string)<br><br>SmartObject(‘.foo’).filter(‘div’).addClass(‘bar’);	0	2018-07-08	2018-07-10
1	Return if argument is a palindrome<br><br>Beginning at (0,0) log flight pattern coordinates from an array of directions and return Euclidean distance.<br><br>Return all numbers up to n which contains more than one sum of cubes ie 1729  = 1^3 + 12^3 = 9^3  + 10^3<br><br>And calculate big O	1	2018-06-28	2018-07-08
2	For this challenge your solution should work if it is pasted directly into the JavaScript console of the browser after the page has fully loaded. Feel free to use jQuery. Also, our BounceX products must work across all browsers, but we will be testing your challenge in Chrome. <br><br>Go to www.marmot.com and add at least 2 products to your cart. Then return to the home page.<br>Write a JavaScript snippet that can be run in the console of the browser that does the following:<br>Extracts the number of items in the cart, the cart total, and the item images from the page. Store them in variables.<br>Create a trigger that activates when the user scrolls into the bottom 10% of the page.<br>The trigger should show a centered overlay on top of the site that displays the information gathered above and two buttons. One button should close the overlay and the other should take the user to the cart page. It should have a style consistent with the website. Design matters.<br>Behind the overlay add a semi transparent black background that obscures the site. The overlay should be able to trigger multiple times if dismissed.<br>BONUS<br>Explain potential problems that could arise if this snippet had more or less than the 2 items in the cart.<br>How would you address those problems?”	2	2018-07-08	2018-07-08
3	Tell me bit about yourself, journey to coding.	3	2018-07-08	2018-07-08
4	What frameworks did you work on, and in what context?	3	2018-07-08	2018-07-08
5	Have you used React?	3	2018-07-08	2018-07-08
6	Have you done project with React?	3	2018-07-08	2018-07-08
7	How did you start coding?	4	2018-07-08	2018-07-08
8	What did you do on DEVision.js	4	2018-07-08	2018-07-08
9	Where do you see yourself short term (what do you want to do in company?)	4	2018-07-08	2018-07-08
10	Long term (where will you be?)	4	2018-07-08	2018-07-08
11	What is the output of the console.logs?<br><br>Var a = 1, b = 2, c;<br>(function(){<br> const a = 200;<br> b = 400;<br> let d = 10;<br> var c = 5;<br>})()<br><br><br>console.log(a)<br>console.log(b)<br>console.log(c)<br>console.log(d)<br>	5	2018-07-08	2018-07-08
12	Write a function that takes three arguments, two strings and an alphabet. Write a function that returns the word that comes first in the alphabet. What data structure would you use to store the alphabet?<br>For example: a given 4 letter ordered alphabet “zgac” how do you decide what word comes alphabetically first “aggd” vs. “aggz”	5	2018-07-08	2018-07-08
13	Explain prototypical inheritance?	6	2018-07-08	2018-07-08
14	What is a closure?	6	2018-07-08	2018-07-08
15	What is the default scope in Js?	6	2018-07-08	2018-07-08
16	What is a promise and how does it work?	6	2018-07-08	2018-07-08
17	What are the most popular http verbs?	6	2018-07-08	2018-07-08
18	What is a css selector?	6	2018-07-08	2018-07-08
19	What are breakpoints used for?	6	2018-07-08	2018-07-08
20	Without using a framework how would you implement a  responsive design?	6	2018-07-08	2018-07-08
21	What are the components of a responsive framework?	6	2018-07-08	2018-07-08
22	What is REST?	6	2018-07-08	2018-07-08
23	What is SOAP?	6	2018-07-08	2018-07-08
24	Explain web API	6	2018-07-08	2018-07-08
25	Explain .net mvc	6	2018-07-08	2018-07-08
26	Explain how routing works in .net?	6	2018-07-08	2018-07-08
27	What are action filters?	6	2018-07-08	2018-07-08
28	What do models represent in .net mvc?	6	2018-07-08	2018-07-08
29	What is a delegate?	6	2018-07-08	2018-07-08
30	What is an ienumerable?	6	2018-07-08	2018-07-08
31	Create a 'spacify' function directly on the String object that returns the same string with each character separated by a space. E.g.:<br><br>'hello world'.spacify(); //'h e l l o   w o r l d'	7	2018-07-08	2018-07-08
32	In the front-end language of your choice, implement the following: given a list of integers, take each integer in that list and double it, then square the doubled value, then as output, sum together all the squared values. E.g.:<br><br>oubleSquareSum [1] // 4<br>doubleSquareSum [1, 2] // 20<br>doubleSquareSum [1, 2, 3] // 56<br>doubleSquareSum [1, 2, 3, 4] // 120	7	2018-07-08	2018-07-08
33	Polyfill 'reduce', 'map', and 'filter' directly on the Array object, so that you could do the following for example:<br><br>[1,2,3].filter(isOdd)	7	2018-07-08	2018-07-08
34	Suppose you have this code:<br><br>var nodes = document.getElementsByTagName('button');<br>for (var i = 0; i < nodes.length; i++) {<br>nodes[i].addEventListener('click', function() {<br>console.log('Element #' + i);<br>});<br>}<br><br>What is the console output when the first and the fourth buttons are clicked, and why?	7	2018-07-08	2018-07-08
35	Write a function that will return an array's length, write 2 unit tests for this function	8	2018-07-08	2018-07-08
36	model schemas for movie theaters, showtimes and movies	8	2018-07-08	2018-07-08
37	The 'student and locker problem' algorithm https://arxiv.org/pdf/1307.6455.pdf	8	2018-07-08	2018-07-08
38	what's an ORM, give an example, why/how is it useful	8	2018-07-08	2018-07-08
39	write a function to return the sum of an array	8	2018-07-08	2018-07-08
40	the same for loop with settimeout calls logging 'i' closure problem you've seen a million times	8	2018-07-08	2018-07-08
41	explain your approach to problem solving	8	2018-07-08	2018-07-08
42	explain one time you got stuck in a group project and how you resolved it	8	2018-07-08	2018-07-08
43	what's TCP	8	2018-07-08	2018-07-08
44	talk about server-side vs client-side rendering, pros and cons of each	8	2018-07-08	2018-07-08
45	what are some defining features of a progressive web app	8	2018-07-08	2018-07-08
46	what's SSL	8	2018-07-08	2018-07-08
47	what are some caching strategies you're familiar with	8	2018-07-08	2018-07-08
48	Given an array with numbers 1-99 with one repeated number, find the repeated number.	9	2018-07-08	2018-07-08
52	asked to write a spacify function that takes a string and returns a string with two spaces between each letter--for all letters and spaces except the last. 	10	2018-07-08	2018-07-08
49	Architect a online shopping cart. What data structures would you use?	9	2018-07-08	2018-07-08
50	Architect the API endpoints for an online shopping cart. What HTTP verbs would you use?	9	2018-07-08	2018-07-08
51	Given an array of image names, paste together the images on a larger background.<br>The function takes three argument. The array of images, the width of the background and the height of the background.<br>The image names are in a format like “20-15-35-30.png” where the numbers are in order the top left x coord, the top left y coord, the bottom right x coord, the bottom right.<br>After follow up questions they added parameters: Don’t use canvas. Assume there is a getPixel function for the images and a setPixel function for the background.	9	2018-07-08	2018-07-08
53	Asked if I’ve ever seen something like “randomstring”.method(). Hint: method on the prototype. 	10	2018-07-08	2018-07-08
54	Was then asked about what ‘this’ would be in various situations: within a method in an object. Then having that method assigned to a variable then called.<br>Went into what bind is and then asked to use bind on the previous problem to fix the error in the question above.	10	2018-07-08	2018-07-08
55	Then the final question was to write a function that pulled all the name values from a nested object. Could have been done iteratively or recursively. Only managed to pseudo code a(n incomplete) recursive solution here.	10	2018-07-08	2018-07-08
56	Challenge involved taking a text file in, parsing it, recursively generating heirarchy and printing it out to another file in a specified format. Honestly not alot of time since everything has to be formatted peerrffeecttlyyy so don't try and comment it as you go along like I did.  You can recursivley find out employee / boss relationship without altering array every time if that makes it easier for you. It did for me but took me a while to figure that out	11	2018-07-08	2018-07-08
57	given a two dimensional array containing ones and zeros (ones represent land and zeros represent water) write an algorithm to determine how many "islands" there are. edit: if 1s are touching vertically or horizontally it would be considered the same island (edited)<br>[[0, 1, 0, 0, 1],<br>[0, 0, 1, 0, 1],<br>[0, 0, 0, 0, 1],<br>[0, 1, 1, 0, 1]]<br>^ 4 islands above	12	2018-07-08	2018-07-08
58	merge intervals. Identical to interview cake problem four<br>input: [[1, 2], [3, 4], [4, 5]]<br>output: [[1, 2], [3, 5]]	13	2018-07-08	2018-07-08
59	Next question was to group them so there are no overlaps<br>input: [[1, 2], [3, 4], [4, 5], [6, 7]]<br>output: [[[1, 2], [3, 4]], [[4, 5], [6, 7]]]	13	2018-07-08	2018-07-08
60	what does the no_name function do?<br><br>def Boolean no_name(a : String, b : String)<br>  if a.length != b.length<br>    return false<br><br>  for(x : Integer = 0; x < b.length; x++)<br>    if a[0] == b[x]<br>      return no_name(utilityFunction(a, 0), utilityFunction(b, x))<br>    end<br>  end<br><br>  return b.length == 0<br>end<br><br>def String utilityFunction(s : String, j : Integer)<br>  ret = new char[s.length - 1]<br>  int d = 0<br>    for (k : Integer = 0; k < s.length; k++)<br>      if (k == j)<br>        d = 1<br>      else<br>        ret[k - d] = s[k]<br>      end<br>    end<br>  return new String(ret)<br>end	14	2018-07-08	2018-07-08
61	implement the get and put functions of a LRU Cache	14	2018-07-08	2018-07-08
62	Data Structures: B-trees, Red Black Trees, Binary Search Trees, Hash Tables(lots of this), Bloom Filters.	15	2018-07-08	2018-07-08
63	SQL: What is normalization? when would you use it? What are indicies? What are multivalue indicies?	15	2018-07-08	2018-07-08
64	C: what is malloc what is free? How do they work under the hood.<br>\nIf you return a pointer to a local variable from a function what happens when you access it.	15	2018-07-08	2018-07-08
65	Concurrency: what is a mutex? what is deadlock? what is read/write lock? what is monitor/conditon value?	15	2018-07-08	2018-07-08
66	HTTP: Whats the difference between GET/POST? Whats in a HTTP header?	15	2018-07-08	2018-07-08
67	Webcrawler Debugging: hook up node the your debugger and get good with it. Your gonna need it.<br>It's purposfully not trivial so you have to use the debugger.<br>Also, you should know how crawlers work	15	2018-07-08	2018-07-08
68	System Design: I read the link Chris sent out here (Thanks man!) and it was more than enough. This part was quicker and less in depth than I assumed	15	2018-07-08	2018-07-08
69	implement a Set with functions add, deleted, getValues (in order of insertion), and getRandom	16	2018-07-08	2018-07-08
70	Gave me React boilerplate for building a shopping cart with items and prices, and then was like "since you already know react, I'll delete all the react from this code and I want to see how you build it with vanilla javascript with buttons to increase and decrease quantity of products and update the shopping cart totals" and all I had was an array of products, a blank html page, and a script tag	16	2018-07-08	2018-07-08
71	1. What is the difference between inheritance and composition?	17	2018-07-08	2018-07-08
72	What is the difference between a left join and an inner join?	17	2018-07-08	2018-07-08
73	What is the difference between a GET and PUT request?	17	2018-07-08	2018-07-08
74	What is tree-shaking?	17	2018-07-08	2018-07-08
75	When would a React app require the use of Redux?	17	2018-07-08	2018-07-08
76	What drives you?	17	2018-07-08	2018-07-08
77	Describe “event bubbling” in the DOM	17	2018-07-08	2018-07-08
78	What is the point of using Redux in your React app?	17	2018-07-08	2018-07-08
79	What are the pros and cons of using “components” vs just plain DOM elements? When would you want to design something as a component?	17	2018-07-08	2018-07-08
80	Tell me everything you know about functional programming.	17	2018-07-08	2018-07-08
81	What is the difference between mutable and immutable objects? When would you want/need an immutable object vs a mutable one?	17	2018-07-08	2018-07-08
82	Have you ever used WebSockets and can you tell me what they are?	17	2018-07-08	2018-07-08
83	What are babel and Webpack used for?	17	2018-07-08	2018-07-08
84	If your page/app was loading slowly, how would you figure out what the problem was and what are some potential fixes?	17	2018-07-08	2018-07-08
85	When would promises NOT be good to use?	17	2018-07-08	2018-07-08
86	What are the differences between cookies, local storage, and session storage?	17	2018-07-08	2018-07-08
87	What should do you if animations are loading slowly?	17	2018-07-08	2018-07-08
88	Why are side-effects bad?	17	2018-07-08	2018-07-08
89	How is concurrency handled in the browser with javascript?	17	2018-07-08	2018-07-08
90	How does javascript handle asynchronous function calls without blocking the single thread of execution?	17	2018-07-08	2018-07-08
91	Which css grid systems have you used and why?	17	2018-07-08	2018-07-08
92	Have you used media queries? How?	17	2018-07-08	2018-07-08
93	What do you like or dislike about the javascript community?	17	2018-07-08	2018-07-08
94	What feedback have you gotten from colleagues?	17	2018-07-08	2018-07-08
95	Tell me how you’ve handled a conflict with a colleague?	17	2018-07-08	2018-07-08
96	How do you approach very opinionated programmers (of which there are many)?	17	2018-07-08	2018-07-08
97	What is something you’ve had to do in software engineering that you never want to do again?	17	2018-07-08	2018-07-08
98	What is binding? Why is it necessary? Is there an alternative?	17	2018-07-08	2018-07-08
99	How does jsx get compiled?	17	2018-07-08	2018-07-08
100	Have you dealt with callback hell? When? What was your solution? What would a solution be pre-ES6?	17	2018-07-08	2018-07-08
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: efqwjvxh
--

COPY public.users (id, email, user_name, display_name, photo_url, github_id, access_token) FROM stdin;
123	erikbcox@gmail.com	erikcox	Erik C.	https://avatars1.githubusercontent.com/u/753677?s=460&v=4	753677	MDQ6VXNlcjc1MzY3Nw==
\.


--
-- Name: interviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: efqwjvxh
--

SELECT pg_catalog.setval('public.interviews_id_seq', 1, false);


--
-- Name: questions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: efqwjvxh
--

SELECT pg_catalog.setval('public.questions_id_seq', 1, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: efqwjvxh
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- Name: interviews interviews_id_key; Type: CONSTRAINT; Schema: public; Owner: efqwjvxh
--

ALTER TABLE ONLY public.interviews
    ADD CONSTRAINT interviews_id_key UNIQUE (id);


--
-- Name: interviews interviews_pk; Type: CONSTRAINT; Schema: public; Owner: efqwjvxh
--

ALTER TABLE ONLY public.interviews
    ADD CONSTRAINT interviews_pk PRIMARY KEY (id);


--
-- Name: questions questions_pk; Type: CONSTRAINT; Schema: public; Owner: efqwjvxh
--

ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_pk PRIMARY KEY (id);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: efqwjvxh
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- Name: interviews interviews_fk0; Type: FK CONSTRAINT; Schema: public; Owner: efqwjvxh
--

ALTER TABLE ONLY public.interviews
    ADD CONSTRAINT interviews_fk0 FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: questions questions_fk0; Type: FK CONSTRAINT; Schema: public; Owner: efqwjvxh
--

ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_fk0 FOREIGN KEY (interview_id) REFERENCES public.interviews(id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--


create table users (users_id serial primary key,
email varchar(120) unique,
password varchar(120) not null,
firstName varchar(50) not null,
lastName varchar(50) not null,
company varchar(100) not null,
sport varchar(100),
city varchar(50)not null
)
create table events 
(
event_id serial primary key,
users_id integer references users(users_id),
event_name varchar(80) not null,
address varchar(50) not null,
sport varchar(30),
dateOfEvent DATE not null,
startTime TIME not null,
endTime Time not null
)
create table attending 
(
event_id integer references events(event_id),
users_id integer references users(users_id)
)
select event_name, TO_CHAR(dateofevent :: DATE, 'Mon dd, yyyy'), TO_CHAR(starttime :: TIME, 'HH:MI'), TO_CHAR(endtime :: TIME, 'HH:MI') from events


insert into events (users_id, event_name, address, dateofevent, starttime, endtime) values (10, 'Tennis', '500 ervay st', '2020-12-20', '6:00', '12:00'), (10, 'Dancing', '500 ervay st', '2020-08-12', '18:00', '20:00'), (10, 'Swimming', '500 ervay st', '2020-10-21', '6:00', '12:00')
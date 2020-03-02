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
dateOfEvent DATE not null,
startTime TIME not null,
endTime Time not null
)

select event_name, TO_CHAR(dateofevent :: DATE, 'Mon dd, yyyy'), TO_CHAR(starttime :: TIME, 'HH:MI'), TO_CHAR(endtime :: TIME, 'HH:MI') from events
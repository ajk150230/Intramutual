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
users_id integer references users(users_id),
rosters_id integer references rosters(rosters_id)
) 

create table rosters
(rosters_id serial primary key,
manager integer references users(users_id)
event_id integer references events(event_id),
sport varchar(30),
team_name varchar(20),
p1 integer references users(users_id),
p2 integer references users(users_id),
p3 integer references users(users_id),
p4 integer references users(users_id),
p5 integer references users(users_id),
p6 integer references users(users_id),
p7 integer references users(users_id),
p8 integer references users(users_id),
p9 integer references users(users_id),
p10 integer references users(users_id),
p11 integer references users(users_id)
)

select event_name, TO_CHAR(dateofevent :: DATE, 'Mon dd, yyyy'), TO_CHAR(starttime :: TIME, 'HH:MI'), TO_CHAR(endtime :: TIME, 'HH:MI') from events

insert into attending (event_id, users_id) values (1,11), (2,11), (3,11), (8,11), (1,10), (2,10), (3,10), (1,12), (2,12), (3,12)

insert into events (users_id, event_name, address, dateofevent, starttime, endtime) values (10, 'Tennis', '500 ervay st', '2020-12-20', '6:00', '12:00'), (10, 'Dancing', '500 ervay st', '2020-08-12', '18:00', '20:00'), (10, 'Swimming', '500 ervay st', '2020-10-21', '6:00', '12:00')

{
"event_name": "1",
"address": "1",
"sport": "1",
"date": "01-10-1010",
"starttime":"15:30",
"endtime": "18:00"
}

select a.event_id, a.event_name, a.address, a.sport, a.dateofevent, a.starttime, Count(b.event_id) as attendees
from events a 
full outer join attending b on a.event_id = b.event_id
group by a.event_id, a.event_name, a.address, a.sport, a.dateofevent, a.starttime

select a.event_id, a.users_id, Count(b.event_id) as attendees
from events a 
full outer join attending b 
on a.event_id = b.event_id 
where a.users_id != 10 and b.users_id != 10
group by a.event_id, a.users_id
UNION
select a.event_id, a.users_id, Count(b.event_id) as attendees from events a 
FULL OUTER JOIN attending b
ON a.event_id = b.event_id
WHERE b.event_id IS NULL
group by a.event_id, a.users_id
order by attendees desc
limit 20
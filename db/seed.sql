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
p11 integer references users(users_id),
img_url text
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

select a.event_id, a.event_name, a.address, a.sport, a.dateofevent,
 Count(b.event_id) as attendees
from events a 
full outer join attending b 
on a.event_id = b.event_id 
where a.users_id != $1 and b.users_id != $1
group by a.event_id, a.users_id, a.address, a.sport, a.dateofevent
UNION
select a.event_id, a.event_name, a.address, a.sport, a.dateofevent,
Count(b.event_id) as attendees 
from events a 
FULL OUTER JOIN attending b
ON a.event_id = b.event_id
WHERE b.event_id IS NULL and a.users_id !=$1
group by a.event_id, a.users_id, a.address, a.sport, a.dateofevent
order by attendees desc
limit 20


-----------------------------------------------
select distinct e.event_id, e.event_name, e.address, e.sport,
TO_CHAR(e.dateofevent :: DATE, 'Mon dd, yyyy') as date, 
TO_CHAR(e.starttime :: TIME, 'HH:MI:AM') as starttime,
TO_CHAR(e.endtime :: TIME, 'HH:MI:AM') as endtime,
count(a.users_id) as attendees
from events e
LEFT JOIN rosters r
on e.event_id = r.event_id
full outer join attending a 
on r.event_id = a.event_id
where r.manager != 1 OR r.manager IS NULL
AND e.event_id NOT IN (select e.event_id
from events e
join attending a
on e.event_id = a.event_id
where e.users_id = 1)
group by e.event_id, e.event_name, e.address, e.sport
ORDER BY e.event_id ASC;



------------------------------------------------------------

select e.event_id, e.event_name, e.address, e.sport, e.users_id,
TO_CHAR(e.dateofevent :: DATE, 'Mon dd, yyyy') as dateofevent, 
TO_CHAR(e.starttime :: TIME, 'HH:MI:AM') as starttime,
TO_CHAR(e.endtime :: TIME, 'HH:MI:AM') as endtime,
count(a.users_id) as attendees
from events e
join attending a 
on e.event_id = a.event_id
full outer JOIN rosters r
on a.rosters_id = r.rosters_id
where a.users_id !=1 or r.manager !=1
group by e.event_id, event_name, address, e.sport, e.users_id, dateofevent, starttime, endtime
UNION
select e.event_id, e.event_name, e.address, e.sport, e.users_id,
TO_CHAR(e.dateofevent :: DATE, 'Mon dd, yyyy') as dateofevent, 
TO_CHAR(e.starttime :: TIME, 'HH:MI:AM') as starttime,
TO_CHAR(e.endtime :: TIME, 'HH:MI:AM') as endtime,
count(a.users_id) as attendees
from events e
full outer join attending a 
on e.event_id = a.event_id
where a.event_id is NULL AND e.users_id != 1
group by e.event_id, event_name, address, sport, e.users_id, dateofevent, starttime, endtime
ORDER BY event_id desc;

------------------------------------------------------------
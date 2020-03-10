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
where a.users_id !=1 and r.manager !=1
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

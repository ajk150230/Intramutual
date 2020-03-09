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
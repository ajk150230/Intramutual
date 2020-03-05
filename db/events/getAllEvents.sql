select a.event_id, a.event_name, a.address, a.sport, 
TO_CHAR(dateofevent :: DATE, 'Mon dd, yyyy') as dateofevent,
TO_CHAR(starttime :: TIME, 'HH:MI') as starttime, Count(b.event_id) as attendees
from events a 
full outer join attending b on a.event_id = b.event_id
where a.users_id !=10
group by a.event_id, a.event_name, a.address, a.sport, a.dateofevent, a.starttime
order by attendees desc
limit 20
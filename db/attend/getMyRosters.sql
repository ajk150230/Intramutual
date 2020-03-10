select *, e.event_name
from rosters r 
join events e 
on r.event_id = e.event_id 
where r.manager = $1

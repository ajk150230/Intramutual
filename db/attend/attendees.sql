select a.users_id, b.firstname, b.lastname, a.event_id
from attending a
join users b 
on a.users_id = b.users_id
where a.event_id = $1
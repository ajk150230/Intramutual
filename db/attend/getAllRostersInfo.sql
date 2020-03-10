select a.users_id, u.firstname, u.lastname, u.email, u.company
from attending a 
join users u
on a.users_id = u.users_id
where a.rosters_id = $1

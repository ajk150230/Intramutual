insert into rosters 
(manager, event_id, sport, team_name)
values
($1, $2, $3, $4 )
returning *
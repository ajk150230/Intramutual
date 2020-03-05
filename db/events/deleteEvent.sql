delete from attending
where event_id = $1;

delete from events
where event_id = $1
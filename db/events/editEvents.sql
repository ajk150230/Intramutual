update events
set event_name = $2, address = $3, sport = $4, dateofevent = $5, starttime = $6, endtime = $7
where event_id = $1
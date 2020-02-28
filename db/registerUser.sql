INSERT INTO users
(
email,
password,
firstname,
lastname,
company,
sport,
city 
) values ($1, $2, $3, $4, $5, $6, $7)
returning *
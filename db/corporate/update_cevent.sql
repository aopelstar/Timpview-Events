UPDATE cevents
SET company = $2, contact_name = $3, phone = $4, dates = $5, time_frame = $6, venue = $7
WHERE id = $1

returning *;
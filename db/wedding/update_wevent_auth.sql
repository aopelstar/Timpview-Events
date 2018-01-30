UPDATE wevents
SET groom_name = $2, bride_name = $3, g_phone = $4, b_phone = $5, dates = $6, time_frame = $7, venue = $8
WHERE id = $1

returning *;
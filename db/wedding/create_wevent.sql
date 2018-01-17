INSERT INTO wevents ( 
    groom_name, bride_name, g_phone, b_phone, dates,  time_frame, venue
)
VALUES (
    $1, $2, $3, $4, $5, $6, $7
)

returning *;






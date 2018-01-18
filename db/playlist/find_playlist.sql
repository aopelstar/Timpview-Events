select * from playlist
join songs on songs.id = playlist.song_id
where event_id = $1
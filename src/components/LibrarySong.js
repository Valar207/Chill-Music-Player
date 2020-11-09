import React from "react";

export default function LibrarySong({
  setIsPlaying,
  song,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
}) {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    //add active state
    const newSongs = songs.map((state) => {
      if (state.id === song.id) {
        return {
          ...state,
          active: true,
        };
      } else {
        return {
          ...state,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    //check if the song is playing
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-songs ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

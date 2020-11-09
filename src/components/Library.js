import React from "react";
import LibrarySong from "./LibrarySong";

export default function Library({
  songs,
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  audioRef,
  setSongs,
  libraryStatus,
}) {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div>
        {songs.map((song) => (
          <LibrarySong
            setSongs={setSongs}
            song={song}
            setCurrentSong={setCurrentSong}
            songs={songs}
            setIsPlaying={setIsPlaying}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
}

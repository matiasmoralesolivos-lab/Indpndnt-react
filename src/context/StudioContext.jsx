import { createContext, useState } from "react";

export const StudioContext = createContext();

function StudioProvider({ children }) {
  const [tracks, setTracks] = useState([
    {
      id: "base",
      name: "Base",
      type: "base",
      armed: false,
      recording: false,
      monitor: false,
      boost: false,
      volume: 1,
    },
    {
      id: "user",
      name: "Tu grabación",
      type: "user",
      armed: false,
      recording: false,
      monitor: false,
      boost: false,
      volume: 1,
    },
  ]);

  const [masterVolume, setMasterVolume] = useState(1);

  const addTrack = () => {
    if (tracks.length >= 6) return;

    const newTrack = {
      id: crypto.randomUUID(),
      name: `Músico ${tracks.length - 1}`,
      type: "dynamic",
      armed: false,
      recording: false,
      monitor: false,
      boost: false,
      volume: 1,
    };

    setTracks([...tracks, newTrack]);
  };

  const removeTrack = (id) => {
    setTracks(
      tracks.filter(
        (track) =>
          track.id !== id &&
          track.type !== "base" &&
          track.type !== "user"
      )
    );
  };

  return (
    <StudioContext.Provider
      value={{
        tracks,
        setTracks,
        masterVolume,
        setMasterVolume,
        addTrack,
        removeTrack,
      }}
    >
      {children}
    </StudioContext.Provider>
  );
}

export default StudioProvider;
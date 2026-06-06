import { createContext, useState } from "react";

export const StudioContext = createContext();

function StudioProvider({ children }) {
  const [tracks, setTracks] = useState([
    {
      id: "base",
      name: "Base",
      type: "base",
      visible: true,
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
      visible: true,
      armed: false,
      recording: false,
      monitor: false,
      boost: false,
      volume: 1,
    },
  ]);

  const [masterVolume, setMasterVolume] = useState(1);

  // Layout de la pantalla
  // 1 = una columna
  // 2 = dos columnas

  const [layout, setLayout] = useState(1);

  const addTrack = () => {
    if (tracks.length >= 6) return;

    const newTrack = {
      id: crypto.randomUUID(),
      name: `Músico ${tracks.length - 1}`,
      type: "dynamic",
      visible: true,
      armed: false,
      recording: false,
      monitor: false,
      boost: false,
      volume: 1,
    };

    setTracks([...tracks, newTrack]);
  };

const removeTrack = (id) => {
  if (id === "base" || id === "user") return;

  setTracks((prevTracks) =>
    prevTracks.filter((track) => track.id !== id)
  );
};

  const toggleTrackVisibility = (id) => {
    setTracks(
      tracks.map((track) =>
        track.id === id
          ? {
              ...track,
              visible: !track.visible,
            }
          : track
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

        layout,
        setLayout,

        addTrack,
        removeTrack,

        toggleTrackVisibility,
      }}
    >
      {children}
    </StudioContext.Provider>
  );
}

export default StudioProvider;
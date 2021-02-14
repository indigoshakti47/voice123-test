import React from "react";

export default function AudioPlayer({ relevantSample }) {
  return (
    <audio controls className="w-full mt-3">
      <source src={`https://voice123.com/mp3/${relevantSample.file}`} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}

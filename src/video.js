import React from "react";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="426px"
      height="240px"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;

// TO DO LATER embed on app.js  <YoutubeEmbed embedId="xOK_6fK4HPU" />;
//                   where  <YoutubeEmbed embedId="embedID" />;

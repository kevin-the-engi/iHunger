import React from 'react';

const Youtube = ({ytID}) => {
  const link = 'https://www.youtube.com/embed/' + ytID;
  console.log(link);

  return(
    <div className="video">
      <iframe
        width="640"
        height="360"
        src={link}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="Embedded youtube"
      />

    </div>
  )
}

export default Youtube;
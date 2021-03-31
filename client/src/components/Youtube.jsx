import React from 'react';

const Youtube = ({ytID}) => {
  const link = 'https://www.youtube.com/embed/' + ytID;

  return(
    <div className="video">
      <iframe
        width="240"
        src={link}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="Embedded youtube"
      />
    </div>
  )
}

export default Youtube;
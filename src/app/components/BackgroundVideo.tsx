import React from 'react';


interface BackgroundVideoProps {
  src: string;
  type: string
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ src, type }) => {
  if (type === 'initial') {
    return (
      <> <div className="bg-white" id='background-video'> </div>
        <video className='background-videoIndex' autoPlay loop muted playsInline>
          <source src={src} type="video/mp4" />
        </video>
      </>
    )
  } else if (type === 'payment') {
    return (
    <div className="backgroundProviders" id="background-video">
      <video width="100%" height="auto" id="background-video" autoPlay loop muted playsInline>
        <source src={src} type="video/mp4" />
      </video>
      {/* Overlay para deixar o fundo escuro e semi-transparente */}
      <div className="video-overlay"></div>
    </div>
    )
  }
  else {
    return (
      <><div className="backgroundProviders" id='background-video'> </div>
        <video width="100%" height="auto" id="background-video" autoPlay loop muted playsInline>
          <source src={src} type="video/mp4" />
        </video></>
    )
  }
}

export default BackgroundVideo

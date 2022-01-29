import { PropYoutube } from '../types';

const YoutubeEmbed = ( props : PropYoutube ) => (
  <div >
    <iframe
      className="youtube"
      src={`https://www.youtube.com/embed/${props.embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
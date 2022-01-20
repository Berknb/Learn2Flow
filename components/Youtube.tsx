import { PropYoutube } from '../types';
import Classes from '../styles/Youtube.module.css'

const YoutubeEmbed = ( props : PropYoutube ) => (
  <div className={Classes.videoResponsive}>
    <iframe
      width="550"
      height="320"
      src={`https://www.youtube.com/embed/${props.embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
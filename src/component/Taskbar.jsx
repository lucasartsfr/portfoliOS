import { WindowContext } from '../WindowContext';
import Galerie from './Galerie';
import LauncherIcon from './LauncherIcon';
import Projetcs from './Projetcs';
import SystemIcon from './SystemIcon';
import TaskbarIcon from './TaskbarIcon';
import { useContext } from 'react';

export default function Taskbar() {

 
  const {launcher} = useContext(WindowContext);
  return (
    <>
 
    <div className={`Launcher ${launcher ? "open" : "close"}`}>
      <h2 className='launcher-title'>Compétences</h2>
      <div className='launcher-grid'>
        <LauncherIcon name="Photoshop"  img="img/software/Photoshop.png"/>
        <LauncherIcon name="After Effect"  img="img/software/After Effects.png"/>
        <LauncherIcon name="Blender"  img="img/software/Blender.png"/>
        <LauncherIcon name="Figma"  img="img/software/Figma.png"/>
        <LauncherIcon name="Firebase"  img="img/software/Firebase.png"/>
        <LauncherIcon name="GitHub"  img="img/software/GitHub.png"/>
        <LauncherIcon name="Illustrator"  img="img/software/Illustrator.png"/>
        <LauncherIcon name="InDesign"  img="img/software/InDesign.png"/>
        <LauncherIcon name="JavaScript"  img="img/software/JavaScript.png"/>
        <LauncherIcon name="Lightroom"  img="img/software/Lightroom.png"/>
        <LauncherIcon name="Magento"  img="img/software/Magento.png"/>
        <LauncherIcon name="PostgreSQL"  img="img/software/PostgreSQL.png"/>
        <LauncherIcon name="Prestashop"  img="img/software/Prestashop.png"/>
        <LauncherIcon name="Première Pro"  img="img/software/Première Pro.png"/>
        <LauncherIcon name="ReactJS"  img="img/software/ReactJS.png"/>
        <LauncherIcon name="VueJS"  img="img/software/VueJS.png"/>
        <LauncherIcon name="Wordpress"  img="img/software/Wordpress.png"/>        
      </div>
      <div className='system-grid'>
        <SystemIcon  name="Theme" action="SwitchMode"/>
        <SystemIcon  name="Full" action="FullScreen"/>
      </div>

    </div>

    <div className='TaskBar'>
      <TaskbarIcon icon="MdWindow" name="Launcher" content="" className="LauncherButton"/>

      <TaskbarIcon icon="FcCamera" name="Photographie">
        <Galerie />
      </TaskbarIcon>

      <TaskbarIcon icon="FcFolder" name="Projets Personnels">
        <Projetcs />
      </TaskbarIcon>

      <TaskbarIcon icon="FcEditImage" name="ThreeJS">
        <iframe src='https://simsr3f.vercel.app/' />
      </TaskbarIcon>

      <TaskbarIcon icon="FcVideoCall" name="CV Vidéo">
        <div className='video-container'>
          <video controls className='video'>
            <source src="https://projects.lucasarts.fr/Motion/CV/CVideo.mp4" type="video/mp4" />
          </video>
        </div>
      </TaskbarIcon>

      <TaskbarIcon icon="FcGlobe" name="LucasArtsFr">
        <iframe src='https://lucasarts.fr' />
      </TaskbarIcon>

      <TaskbarIcon icon="FcDocument" name="CV">
        <div className='cv-container'>
          <img src='img//PIRES LUCAS - CV.webp' className='image-full' />
        </div>
      </TaskbarIcon>
    </div>
    </>
  )
}

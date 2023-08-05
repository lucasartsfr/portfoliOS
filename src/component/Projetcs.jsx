import { useQuery } from 'react-query';
import Loading from './Loading';
import { useState } from 'react';
import{MdKeyboardArrowRight as Arrow} from "react-icons/md"
import {FcGlobe as Web} from "react-icons/fc"
import {TbBrandThreejs as Three} from "react-icons/tb";
import {FcPanorama as Motion} from "react-icons/fc"

export default function Projetcs() {

    const [selected, setSelected] = useState('Web')

    const Icon = {
        "Web" : <Web />,
        "3D" : <Three/>,
        "Motion" : <Motion />,
    }

    const { isLoading, error, data } = useQuery('projects', () =>
        fetch('https://projects.lucasarts.fr/Projects.json').then((response) => response.json())
    );

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const SelectedProject = Object.entries(data[selected]).map((item) =>{
        const Name = item[0];
        const Values = item[1];
        
        let Image = (selected == "3D") ? Values.After : Values.Images[0];
        let Media = (selected == "Motion") ? 
        <div className='projects-content projects-space' key={item}>
            <div className='projects-video-container'>
                <video controls className='projects-video' poster={Values.Poster}>
                    <source src={Values.Url} type="video/mp4" />
                </video>
            </div>
            <h3 className='projects-name'>{Name}</h3>
        </div> :  
        <a className='projects-link projects-space' target='_blank' href={Values.Url || Values.After} rel="noreferrer" key={item}>
            <div className='projects-content'>
                <img className='projects-images' src={Image} />
                <h3 className='projects-name'>{Name}</h3>
            </div>
        </a>
        return(Media)
    })


    const ListProject = Object.keys(data).map(item =>{
        return <div onClick={() => setSelected(item)} key={item} className='projects-title'>{Icon[item]}<span>{item}</span></div>
    });

  return (
    <div className='projects'>
        <div className='projects-left'>
            <div className='Shape-Corner'></div>
            {ListProject}
        </div>
        <div className='projects-right'>            
            <div className='projects-ariane'>Projets <Arrow /> {selected}</div>
            {SelectedProject}
        </div>
    </div>
  )
}

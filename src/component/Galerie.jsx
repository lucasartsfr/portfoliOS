import { useState } from 'react'
import { useQuery } from 'react-query';
import Loading from './Loading';

export default function Galerie() {

    const [selected, setSelected] = useState(144);
    const [ratio, setRatio] = useState()

    const Bigimage = (data) =>{
        
        setRatio(data[1].Ratio.Width/data[1].Ratio.Height)
        setSelected(data[0])
    }
  
  const { isLoading, error, data } = useQuery('tasks', () =>
    fetch('https://api.lucasarts.fr/galerie/').then((response) => response.json())
  );

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  

  return (
    <div className='galerie'>
        <div className='galerie-selected-container'>
            <img style={{aspectRatio : ratio}} className='galerie-selected' src={`https://cdn.lucasarts.fr/img/${selected}.jpg`} />
            <img key={`Blur-${selected}`} className='galerie-selected-blur' src={`https://cdn.lucasarts.fr/small/${selected}.jpg`} />
        </div>
        <div className='galerie-list'>
            {Object.entries(data.photos).map((entrie, index) => {            
                return <img onClick={() => Bigimage(entrie)}  key={index} className='galerie-list-item' src={`https://cdn.lucasarts.fr/small/${entrie[0]}.jpg`} />
            })}
        </div>
    </div>
  );
}

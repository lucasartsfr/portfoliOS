import { Suspense, useState } from 'react'
import { useQuery } from 'react-query';
import Loading from './Loading';
import ScrollContainer from 'react-indiana-drag-scroll'

export default function Galerie() {

    const [selected, setSelected] = useState(144);
    const [ratio, setRatio] = useState()
    const [load, setLoad] = useState(false);

    const Bigimage = (data) =>{        
        setLoad(false)
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
            <img style={{aspectRatio : ratio, opacity : load ? '1' : '0', transition : load ? '.4s' : '0s'}} onLoad={() => setLoad(true)} className='galerie-selected' src={`https://cdn.lucasarts.fr/img/${selected}.jpg`} />
            <img className='galerie-selected-blur' src={`https://cdn.lucasarts.fr/small/${selected}.jpg`} />         
        </div>
        <ScrollContainer className="galerie-list">
            {Object.entries(data.photos).map((entrie, index) => {            
                return (
                <div className='galerie-list-item placeholder' key={index}>
                  <img onClick={() => Bigimage(entrie)} loading="lazy" className='galerie-list-item-img' src={`https://cdn.lucasarts.fr/small/${entrie[0]}.jpg`} />
                </div>
                )
            })}
        </ScrollContainer>
    </div>
  );
}

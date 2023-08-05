

export default function LauncherIcon({name, img}) {
  return (
    <div className='launcher-icon-container'>
        <img src={img} className='launcher-icon-img' />
        <h3 className='launcher-icon-title'>{name}</h3>
    </div>
  )
}

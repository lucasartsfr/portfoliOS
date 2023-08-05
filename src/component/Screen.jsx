export default function Screen({children, DarkMode}) {
  return (
    <div className={`Wallpaper`}  data-dark={DarkMode}>      
        {children}
    </div>
  )
}

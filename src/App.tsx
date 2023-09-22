import './App.css'

export default function App() {


  return (
   <>
   <nav className=" justify-center  flex md:hidden">
    
     <div className="flex w-1/2 justify-around fixed bottom-1/4 bg-pink-600/40 text-4xl py-4 rounded-3xl backdrop-blur-sm">
      <div className="relative hover:bg-transparent hover:rounded-full p-0.5 hover:bottom-8 hover:contrast-150  " >🏡</div>
      <div className="relative hover:bg-transparent hover:rounded-full p-0.5 hover:bottom-8 hover:contrast-150  ">👤</div>
      <div className="relative hover:bg-transparent hover:rounded-full p-0.5 hover:bottom-8 hover:contrast-150 ">☕</div>
      <div className="relative hover:bg-transparent hover:rounded-full p-0.5 hover:bottom-8 hover:contrast-150 ">🤙</div>
      <div className="relative hover:bg-transparent hover:rounded-full p-0.5 hover:bottom-8 hover:contrast-150  " >🏡</div>
      <div className="relative hover:bg-transparent hover:rounded-full p-0.5 hover:bottom-8 hover:contrast-150  " >🏡</div>

    </div>
   </nav>




   <nav className="menu">
  <input
    type="checkbox"
    className="menu-open"
    name="menu-open"
    id="menu-open"
  />
  <label className="menu-open-button" htmlFor="menu-open">
    <span className="lines line-1" />
    <span className="lines line-2" />
    <span className="lines line-3" />
  </label>
  <a href="#" className="menu-item blue">
  🏡
  </a>
  <a href="#" className="menu-item green">
    ☕
  </a>
  <a href="#" className="menu-item red">
    📞
  </a>
  <a href="#" className="menu-item purple">
    🤙
  </a>
  <a href="#" className="menu-item orange">
    👤
  </a>
  <a href="#" className="menu-item lightblue">
    😎
  </a>
</nav>

</>




  )
}
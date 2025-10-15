import {useState,useEffect} from "react"

const Navbar = () => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true)
      }
      else {
        setActive(false)
    }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  },[]);



  return (
    <div className="navbar py-7 flex items-center justify-between">
    <div className="logo">
      <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">Portfolio</h1>
    </div>
    <ul className={`menu flex items-center justify-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 
    md:-translate-x-0 md:opacity-100 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-b border-white/10 shadow-md p-4 rounded-b-2xl
 md:bg-transparent transition-all md:transition-none z-50
  ${active ? "top-0 opacity-100" : "-top-14 opacity-0"}`}>

        <li>
        <button
          onClick={() => {
            const section = document.getElementById("home");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" }); // 🔹 scroll otomatis halus
            }
          }}
          className="sm:text-lg text-base font-medium hover:text-blue-400 hover:scale-105 transition-all duration-300"
        >
          Home
        </button>
      </li>

      <li>
      <button
        onClick={() => {
          const section = document.getElementById("skills");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" }); // 🔹 scroll otomatis halus
          }
        }}
        className="sm:text-lg text-base font-medium hover:text-blue-400 hover:scale-105 transition-all duration-300"
      >
        Tools
      </button>
      </li>
        <li>
      <button
        onClick={() => {
          const section = document.getElementById("project");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" }); // 🔹 scroll otomatis halus
          }
        }}
        className="sm:text-lg text-base font-medium hover:text-blue-400 hover:scale-105 transition-all duration-300"
      >
        Project
      </button>
      </li>
      
    </ul>
    </div>
  )
}

export default Navbar
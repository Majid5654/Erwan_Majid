import DataImage, { listProyek } from "./data"

import { useEffect, useState, useRef } from "react";
import "@fontsource/orbitron/600.css"; 
import "@fontsource/poppins/600.css";
import { FaBookOpen, FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiLaravel } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import vscodeIcon from "../src/assets/vscode.png";
import { SiHtml5 } from "react-icons/si";
import { SiDart } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiAndroidstudio } from "react-icons/si";




function App() {
  const skillsRef = useRef(null);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const projectRef = useRef(null);
  const [projectVisible, setProjectVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === skillsRef.current && entry.isIntersecting) {
          setSkillsVisible(true);        
        }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -100px 0px"}
    );

    if (skillsRef.current) observer.observe(skillsRef.current);


    const projectObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setProjectVisible(true);
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -100px 0px" } 
      );

  if (projectRef.current) projectObserver.observe(projectRef.current);

    return () => {observer.disconnect();
    projectObserver.disconnect();
  };
  }, []);

  return (
    <>
    <div 
    id="home"
    className="hero flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-10 p-4 lg:p-10 xl:gap-0 min-h-[70vh]">
          <img src="./assets/3.png" alt="Hero Image" className="w-[500px] " 
          />
        


        <div className="text-left max-w-lg">
        <h1 className="text-8xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold mb-6 ">Hi There, <br />I'm{" "}
            <span className="text-blue-500 drop-shadow-sm">
              Majid
            </span></h1>
        <p className="text-sm sm:text-base md:text-lg mb-4 lg:mb-6 opacity-80"> 
          I am passionate about backend development, focusing on designing and implementing APIs and managing databases. I work with server-side logic and data structures to ensure efficient data flow, and I enjoy understanding how different backend components interact to support applications
        </p>
        </div>
        </div>




      {/* Skils */}
      <div
      id="skills" 
      ref={skillsRef} 
      className={`skills-section py-6 px-4 lg:px-20 transition-opacity duration-700
      ${skillsVisible ? "opacity-100" : "opacity-0"
      }`}>
      <h2 className="text-4xl font-bold mb-7 text-center bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-400 
             bg-clip-text text-transparent animate-shine drop-shadow-lg "
             style={{ fontFamily: "poppins" }}>
  My Skills
</h2>
<div className="w-24 h-1 mx-auto mb-12 bg-gradient-to-r from-blue-500 to-purple-400 rounded-full"></div>
<div className="flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
          {/* Backend Development */}
          <div 
              className={`p-6 rounded-xl shadow hover:shadow-lg 
                transition-all duration-700 ease-out
                 bg-blue-500/30 backdrop-blur-md text-white transform text-xl 
                 ${skillsVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}
                 style={{ transitionDelay: "100ms" }} 
                `}>
            <h3 className="text-xl font-semibold mb-7">Programming Languages</h3>
           <div className="flex justify-evenly relative items-start">
                {/* Kolom kiri */}
                <ul className="list-disc list-inside space-y-2 sm:w-1/2 w-full sm:pr-6">
                  <li className="flex items-center gap-2">
                    <FaNodeJs /> Java
                  </li>
                  <li className="flex items-center gap-2">
                    <FaPhp /> PHP
                  </li>
                  <li className="flex items-center gap-2">
                    <SiDart /> Dart
                  </li>
                  
                </ul>

                

                            {/* Kolom kanan */}
                  <ul className="list-disc list-inside space-y-2 sm:w-1/2 w-full sm:pl-6">
                    <li className="flex items-center gap-2">
                      <SiPython /> Python
                    </li>
                    <li className="flex items-center gap-2">
                      <SiHtml5 /> HTML
                    </li>
                    <li className="flex items-center gap-2">
                      <SiJavascript className="flex-shrink-0 text-1xl" /> JavaScript
                    </li>
                  </ul>
                </div>
                </div>

          {/* Database & Data Management */}
          <div className={`p-6 rounded-xl shadow hover:shadow-lg 
          transition-all duration-700 ease-out
          bg-blue-500/30 backdrop-blur-md transform text-xl
           ${skillsVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}
          `}
          style={{ transitionDelay: "500ms" }}>
            <h3 className="text-xl font-semibold mb-4">Frameworks & Backend Development</h3>
            <ul className="list-disc list-inside space-y-2">
              <li className="flex items-center gap-2">
                <SiFlutter /> Flutter
              </li>
              <li className="flex items-center gap-2">
                <SiLaravel /> Laravel
              </li>
              <li className="flex items-center gap-2">
                <SiMysql /> MySQL / SSMS
              </li>

             
              
            </ul>
          </div>

          {/* Dev Tools & Practices */}
          <div className={`p-6 rounded-xl shadow hover:shadow-lg 
          transition-all duration-700 ease-out
           bg-blue-500/30 backdrop-blur-md transform text-xl
           ${skillsVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}
          `}
           style={{ transitionDelay: "900ms" }} 
          >

            <h3 className="text-xl font-semibold mb-4">Dev Tools & Practices</h3>
            <ul className="list-disc list-inside space-y-2">
              <li className="flex items-center gap-2">
                <FaGithub /> Git / GitHub
              </li>
              <li className="flex items-center gap-2">
                <   SiAndroidstudio /> AndroidStudio
              </li>
              <li className="flex items-center gap-2">
                <img src={vscodeIcon} alt="VS Code" className="w-5 h-5" /> VS Code
              </li>
               
            </ul>
            
          </div>
          
        </div>
         </div>
</div>
    
      {/* Project */}
            <div 
            id="project"
            ref={projectRef}
            className={`project-section py-20 px-4 md:px-10 lg:px-20 rounded-2xl shadow-lg mt-16
             transition-all duration-700 ease-out
             ${projectVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
             `}
             >
            <h1 className="text-center text-4xl font-bold  mb-6" style={{ fontFamily: "poppins" }}>Project</h1>
            <div className="w-24 h-1 mx-auto mb-12 bg-gradient-to-r from-blue-500 to-purple-400 rounded-full"></div>
            <p className="text-base/loose text-center opacity-80">Here are some projects I've worked on</p>
            <div className="proyek-box mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {listProyek.map(proyek =>(
              <div key={proyek.id} className="relative rounded-xl overflow-hidden 
  bg-gradient-to-b from-[#0a1a2f] via-[#0e2b57] to-[#102a4c]
  border border-blue-400/30 shadow-blue-500/30 shadow-lg 
  hover:shadow-blue-400/50 transition-all duration-300">
                {/* Gambar + badge dalam satu container relatif */}

                

                <div className="relative">
                  <img
                    src={proyek.image}
                    alt={proyek.title}
                    className="w-full h-auto object-cover"
                  />

                  {/* Badge Role */}
                  <span className="absolute top-2 right-2 bg-blue-500/70 border border-blue-400 
                    text-white drop-shadow px-3 py-1 rounded-full text-sm font-semibold">
                    {proyek.role}
                  </span>
                </div>

                

              {/* Gambar proyek */}
              <img src={proyek.gambar} alt="Proyek Image" className="w-full h-auto object-contain"/>

  

              <div className="p-4">
                <h1 className="text-2xl font-bold my-2">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>

                 {/* 🔹 Tombol Link GitHub dan Guidebook */}
  <div className="flex gap-3 mb-4">
    {proyek.github && (
      <a
        href={proyek.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-500 transition"
      >
        <FaGithub className="text-lg" />
        GitHub
      </a>
    )}
    {proyek.guidebook && (
      <a
        href={proyek.guidebook}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-500 transition"
        >
        <FaBookOpen className="text-lg" />
        GuideBook
      
      </a>
    )}
  </div>

                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-500/20 border border-blue-400 rounded-md px-3 py-1 text-sm font-medium"
                    >
                      {tool}
                    </span>
                    
                  ))}
                </div>
              </div>
              </div>
            ))}
            </div>
            </div>
    </>
  )
}



export default App

'use client'
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <>
            <div className="bg-black justify-items-center py-10">
                <motion.h2
                    className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-transparent bg-clip-text animate-pulse centre py-7"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Projects
                </motion.h2>
                <div className="py-7">
                    <ProjectCard
                        image="./pokedex.png"
                        title="Pokedex"
                        description="An interactive Pokédex built with React + Vite and powered by PokéAPI. Browse the first 151 Pokémon, view types, stats, sprites, and moves with detailed descriptions."
                        liveLink="https://pokedex-fun.netlify.app/"
                        githubLink="https://github.com/ash-1231/Pokedex"
                    />
                </div>
                <div className="py-7">
                    <ProjectCard
                        image="./eznotes.png"
                        title="EzNotes"
                        description="EzNotes 📓 EzNotes is a minimalist note-taking web app built with Next.js and Firebase. Quickly create, save, and manage your notes with a clean, distraction-free interface"
                        liveLink="https://ezzznotes.netlify.app/"
                        githubLink="https://github.com/ash-1231/EzNotes"
                    />
                </div>
                <div className="py-7">
                    <ProjectCard
                        image="./portfolio.png"
                        title="My portfolio"
                        description="My first Portfolio built using react,animejs,threejs,emailjs"
                        liveLink="https://ashutosh-portfolio-web-app.netlify.app/"
                        githubLink="https://github.com/ash-1231/My-portfolio"
                    />
                </div>

            </div>

        </>
    )
}
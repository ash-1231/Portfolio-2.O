"use client";

import { motion } from "framer-motion";
import { 
    SiC, SiCplusplus, SiPython, SiJavascript, SiTypescript,
    SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
    SiMysql, SiPostgresql, SiMongodb,
    SiGit, SiGithub,  SiXampp, SiPostman,
    SiWebrtc
} from "react-icons/si";


// Skills with icons
const skills = {
    Languages: [
        { name: "C", icon: <SiC className="text-blue-500" /> },
        { name: "C++", icon: <SiCplusplus className="text-indigo-500" /> },
        // { name: "Java", icon: <SiJava className="text-red-500" /> },
        { name: "Python", icon: <SiPython className="text-yellow-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    ],
    Frameworks: [
        { name: "React", icon: <SiReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-400" /> },
    ],
    Databases: [
        { name: "MySQL", icon: <SiMysql className="text-orange-400" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    ],
    Tools: [
        { name: "Git", icon: <SiGit className="text-red-500" /> },
        { name: "GitHub", icon: <SiGithub className="text-white" /> },
        // { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-500" /> },
        { name: "XAMPP", icon: <SiXampp className="text-orange-500" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    ],
    Learning: [
        { name: "WebRTC", icon: <SiWebrtc className="text-green-500" /> },
        // { name: "WebSockets", icon: <TbWebSocket className="text-purple-400" /> },
    ],
};

export default function Skills() {
    return (
        <section className="w-full py-6 flex flex-col bg-black items-center">
            {/* Shimmer Header */}
            <motion.h2
                className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-transparent bg-clip-text animate-pulse py-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Skills
            </motion.h2>

            <div className="mt-10 space-y-12 w-full px-8 justify-items-center">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                         {/* Category Title with gradient */}
                        <h3 className="text-2xl py-3 font-semibold bg-gradient-to-r from-blue-500 via-orange-700 to-blue-800 text-transparent bg-clip-text mb-6 text-center">
                            {category}
                        </h3>

                        {/* Row-wise Floating Cards */}
                        <div className="flex flex-wrap gap-6">
                            {items.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="w-36 h-16 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl shadow-lg cursor-pointer"
                                    whileHover={{ rotateY: 360 }}
                                    transition={{ duration: 0.6 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className="text-2xl mb-1">{skill.icon}</div>
                                    <motion.span
                                        className="text-sm font-semibold text-gray-200"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                    >
                                        {skill.name}
                                    </motion.span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

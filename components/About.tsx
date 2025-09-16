import ProjectCard from "@/public/ProjectCard";

export default function About() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8 py-10">
      <div className="w-full max-w-4xl">
        <ProjectCard
          title="About me"
          description={`Hi, I am Ashutosh Aditya — a passionate Full-Stack Developer with a strong focus on building scalable, user-centric applications. I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and enjoy blending functionality with clean design to craft impactful digital experiences.

I’m currently exploring real-time technologies like WebRTC and WebSockets to build interactive, collaborative, and high-performance applications.

Beyond coding, I’m passionate about problem-solving, DSA, and competitive programming, and I’m continuously sharpening my skills to tackle complex challenges.`}
          color="#DC143C"
        />
      </div>
    </div>
  );
}

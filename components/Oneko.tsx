'use client'
import { useEffect } from "react"

export default function Oneko(){
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/oneko.js"; // path in /public
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          // cleanup if needed
          document.body.removeChild(script);
        };
      }, []);
    
      return null;
}

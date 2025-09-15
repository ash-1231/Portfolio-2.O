import { Vortex } from "@/components/ui/Vortex";
import { RollingText, RollingTextProps } from "./ui/RollingText";
import { GradientText } from "./ui/GradientText";


export default function Hero() {
    return (
        <div className="h-screen w-full overflow-hidden z-100">
            <Vortex
                backgroundColor="black"
                particleCount={700}
                baseHue={220}
                rangeHue={100}
                baseSpeed={0.0}
                rangeSpeed={1.5}
                className="flex items-center justify-center w-full h-full"
            >
                {/* Your content floats above the vortex */}
                <div className="text-center z-10">
                    <h1 className="text-6xl font-bold mb-4">
                        <GradientText
                            text="Hi, I am ashutosh"
                            gradient="linear-gradient(90deg, #0ea5e9 0%, #8b5cf6 50%, #d946ef 100%)"
                        />
                    </h1>
                    <h2 className="text-3xl text-white opacity-100 " >
                        <RollingText
                            text="I build Modern Web-applications"
                            loop={true}         // enable looping
                            loopDelay={1000}    // wait 1s before restarting
                            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
                        />
                    </h2>
                </div>
            </Vortex>
        </div>
    );
}
import ReactPlayer from "react-player";
import { JUMBOTRON_VIDEO } from "../../../Constants/DummyVideo";
import { useState } from "react";
import { GoPlay, GoMute, GoUnmute } from "react-icons/go"; "react-icons/go"
const Jumbotron = () => {
    const [isMuted, setIsMuted] = useState(true)
    return (
        <div className="relative h-[60vw] w-full">
            <ReactPlayer
                url={JUMBOTRON_VIDEO.videoURL}
                height={"100%"}
                width={"100%"}
                playing={true}
                muted={isMuted}
                controls={true}
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-0 p-8 max-w-md">
                <div className="flex flex-col gap-4 text-white">
                    <h1 className="text-3xl sm:text-5xl font-black">{JUMBOTRON_VIDEO.title}</h1>
                    <p>{JUMBOTRON_VIDEO.desc}</p>
                </div>
                <div className="flex gap-4 mt-4">
                    <button className="flex items-center gap-1 bg-gray-200 py-2 px-8 rounded-md text-xl font-bold text-black">
                        <GoPlay /> Play
                    </button>
                    <button className="bg-stone-600/80 py-2 px-8 rounded-md text-white">Detail Movie</button>
                </div>
            </div>
            <div className="absolute bottom-1/2 -translate-y-1/2 right-6 p-8 text-white">
                <div
                    className="border rounded-full p-2 cursor-pointer"
                    onClick={() => setIsMuted(!isMuted)}
                >
                    {isMuted ? <GoMute size={24} /> : <GoUnmute size={24} />}
                </div>
            </div>
        </div >
    )
}

export default Jumbotron;
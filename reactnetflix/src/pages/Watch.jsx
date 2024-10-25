import { useNavigate, useParams } from "react-router-dom"
import BrowseLayouts from "../components/Layouts/BrowseLayouts"
import ReactPlayer from "react-player"
import { GoChevronLeft } from "react-icons/go"
const Watch = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    return (
        <BrowseLayouts>
            <div>
                <GoChevronLeft
                    className="absolute top-20 left-6 hover:text-white cursor-pointer transition-all"
                    size={44}
                    onClick={() => navigate("/browse")}
                />
            </div>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                width={"100%"}
                height={"100vh"}
                playing={true}
                controls={false}
                muted={false}
            />
        </BrowseLayouts>
    )
}

export default Watch
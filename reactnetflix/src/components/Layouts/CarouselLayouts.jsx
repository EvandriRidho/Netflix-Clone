import { GoChevronLeft, GoChevronRight } from "react-icons/go"
import { useRef } from "react";

const CarouselLayouts = ({ children }) => {
    const ref = useRef(null);
    const handleScroll = (offset) => {
        ref.current.scrollLeft += offset;
    }


    return (
        <div className="relative overflow-hidden">
            <div className="flex justify-between absolute left-0 w-full h-full">
                <button
                    onClick={() => handleScroll(-500)}
                    className="z-10 hover:bg-blue-900/50 text-white text-center opacity-75 transition-all ease-in-out duration-300 h-48 w-10 mt-4">
                    <GoChevronLeft />
                </button>
                <button
                    onClick={() => handleScroll(500)}
                    className="z-10 hover:bg-blue-900/50 text-white text-center opacity-75 transition-all ease-in-out duration-300 h-48 w-10 mt-4">
                    <GoChevronRight />
                </button>
            </div>
            <div className="carousel relative scroll-smooth space-x-2" ref={ref}>
                {children}
            </div>
        </div>
    )
}

export default CarouselLayouts;
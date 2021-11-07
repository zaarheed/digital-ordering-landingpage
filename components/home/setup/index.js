import { useState } from "react";
import Button from "./button";
import Svg from "./svg";

const videos = [
    {
        id: "build-your-menu",
        url: "/images/landing/build-your-menu.mp4",
        title: "Build Your Menu",
        description: `A super intuitive menu builder to create and edit your digital menu in
                        minutes`
    },
    {
        id: "take-online-orders",
        url: "/images/landing/take-orders.mp4",
        title: "Take Online Orders",
        description: `Tell your customers to place orders through your self-branded menu`
    },
    {
        id: "take-online-orders-2",
        url: "/images/landing/take-orders.mp4",
        title: "Another Tab",
        description: `Tell your customers to place orders through your self-branded menu`
    }
]

export default function Setup() {
    const [video, setVideo] = useState(videos[0]);

    const setVideoByTitle = (title) => {
        const video = videos.find(v => v.title === title);
        setVideo(video);
    }

    return (
        <div id="demo-video" className="sm:rounded-lg py-16 px-4 px-2 md:px-12 sm:mx-8 xl:mx-16 bg-eggshell-500">
            <div className="mx-auto max-w-5xl">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h3 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 text-left mb-2 text-center">
                        Take your first order today!
                    </h3>
                    <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
                        Our platform is <strong>simple</strong> and <strong>easy</strong> to use.
                    </p>
                </div>
                <div className="relative mb-10">
                    <Svg option={1} />
                    <Svg option={2} />
                    <Svg option={3} />
                    <div className="relative overflow-hidden w-full rounded-lg bg-eggshell-600 shadow-lg" style={{ minHeight: 200 }}>
                        {videos.map(v => (
                            v.id === video.id && (
                                <video key={v.id} controls={false} autoPlay={true} muted={true} loop={true} playsInline={true} className="bg-eggshell-600 block h-full w-full top-0 left-0 right-0 bottom-0 object-contain">
                                    <source src={v.url} type="video/mp4" />
                                </video>
                            )
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 flex-start mt-20">
                    {videos.map(v => (
                        <Button key={v.id} selected={video.id === v.id} {...v} onClick={setVideoByTitle} />
                    ))}
                </div>
            </div>
        </div>
    )
}
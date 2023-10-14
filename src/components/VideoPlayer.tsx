import { useRef, useEffect } from 'react';

export default function VideoPlayer({videoPath, isPlaying}: {videoPath: string, isPlaying: boolean}) {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(()=>{
        if (isPlaying) {
            videoRef.current?.play();
        } else {
            videoRef.current?.pause();
        }
    }, [isPlaying]);

    return (
        <video className="2xl:h-full xl:h-4/5 h-3/5 rounded-md grow-0" ref={videoRef} controls muted loop>
            <source src={videoPath} type="video/mp4" />
        </video>
    );
}
'use client'

import { useState } from 'react';
import VideoPlayer from './VideoPlayer';

export default function PromoteCard() {

    const [playing, setPlaying] = useState(true);

    return (
        <div className="flex flex-row justify-center my-14">
            <div className="w-4/5 h-[30rem] px-12 py-8 bg-slate-800 rounded-lg flex min-w-[800px]">
                <VideoPlayer isPlaying={playing} videoPath="/videos/getvaccine.mp4" />
                <div className="grow mx-12 mt-4">
                    <h1 className="text-3xl text-slate-50">Get your vaccine today.</h1>
                    <button
                    className="mt-8 bg-slate-50 text-slate-800 px-6 py-2 rounded-md shadow transition duration-200 hover:shadow-md"
                    onClick={(e)=>{
                        e.preventDefault();
                        e.stopPropagation();
                        if (playing) {
                            setPlaying(false);
                        } else {
                            setPlaying(true);
                        }
                    }}
                    >{playing? "Pause": "Play"}</button>
                </div>
            </div>
        </div>
    );
}
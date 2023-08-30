
export default function CoverPage() {
    return(
<section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
    <div className="sticky top-0 h-screen bg-blend-saturation"></div>
    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video className="w-full h-full aspect-video " src="https://i.imgur.com/1dBNg1b.mp4" type="video/mp4" autoPlay muted></video>
    </div>
</section>
    )
}

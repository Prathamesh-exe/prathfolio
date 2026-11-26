export function HeroVideo() {
  return (
    <div className="relative h-52 overflow-hidden border-x border-edge select-none sm:h-72 md:h-80">
      <video
        className="block size-full object-cover object-center"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        disablePictureInPicture
      />
    </div>
  )
}

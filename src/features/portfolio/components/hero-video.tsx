export function HeroVideo() {
  return (
    <div className="relative aspect-video overflow-hidden border-x border-edge select-none">
      <video
        className="block size-full object-cover"
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

export function HeroVideo() {
  return (
    <div className="screen-line-before screen-line-after relative aspect-video overflow-hidden border-x border-edge bg-black select-none before:-top-px after:-bottom-px">
      <video
        className="absolute inset-0 size-full object-cover"
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

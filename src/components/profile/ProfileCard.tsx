import { useEffect, useState } from 'react'

const images = ['/bg1.jpg', '/bg2.jpg', '/bg3.jpg', '/bg4.jpg', '/bg5.jpg']

const ProfileCard = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[3/1] md:h-[390px]">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Slide ${i}`}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${index === i ? 'opacity-100' : 'opacity-0'} object-center md:object-top`}
        />
      ))}
    </div>
  )
}

export default ProfileCard

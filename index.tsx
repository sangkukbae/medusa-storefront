"use client"

import { useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { mainImages } from "@lib/constants"

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 3000 }),
  ])

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
    <div className="w-full h-full overflow-hidden" ref={emblaRef}>
      <div className="flex w-full h-full">
        {mainImages.map((image, index) => (
          <LocalizedClientLink
            className="relative w-full h-full min-w-0 grow-0 shrink-0"
            href={image.href}
            key={index}
          >
            <Image
              src={image.src}
              priority={index <= 2 ? true : false}
              className="absolute inset-0 object-cover w-full h-full"
              alt={`Hero Image ${index + 1}`}
              fill
              //   sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
            />
          </LocalizedClientLink>
        ))}
      </div>
    </div>
  )
}

export default Carousel

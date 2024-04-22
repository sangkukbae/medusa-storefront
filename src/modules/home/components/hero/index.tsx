import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Carousel from "../../../../.."

const Hero = () => {
  return (
    <div className="relative w-full h-screen border-b border-ui-border-base bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 text-center ">
        <Carousel />
      </div>
    </div>
  )
}

export default Hero

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import img1 from "@/app/assets/img-1.jpg"; 
export default function BestSeller(){
    return(
    <div className="w-full"> {/* Centering & removing unwanted space */}
        <Carousel className="w-full relative border border-gray-300 rounded-lg shadow-lg">
            <CarouselContent className="w-full">
                {[img1, img1, img1].map((img, index) => (
                    <CarouselItem key={index} className="w-full flex items-center justify-center">
                        <AspectRatio ratio={16 / 6} className="w-full">
                            <Image 
                                src={img} 
                                alt={`Image ${index + 1}`} 
                                className="h-full w-full rounded-md object-cover"
                            />
                        </AspectRatio>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2" />
            <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2" />
        </Carousel>
    </div>
    )
}

/*
DEV NOTES : 
**Need to render images using map
**move the carousel arrows to the middle
**carousel needs a distinct border
**increase size ??
*/
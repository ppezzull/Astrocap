"use client"

import Image from "next/image"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { CardContent } from "./ui/card"

export interface CapCardProps {
  src: string
  name: string
  style: string
}

export function CapCard({ src, name, style }: CapCardProps) {
  return (
    <div className="w-full max-w-xs mx-auto">
      <CardContent className="p-0">
        <BackgroundGradient className="rounded-[22px] bg-gray-900 border-blue-500/30 hover:border-blue-500 transition-all duration-300 transform hover:scale-110 group">
          <div className="relative overflow-hidden flex justify-center items-center rounded-t-[22px]" style={{height: '200px'}}>
            <div className="" />
            <Image
              src={src || "/placeholder.svg"}
              alt={name}
              width={180}
              height={180}
              className="object-contain h-40 w-auto mx-auto"
              style={{maxHeight: '160px', maxWidth: '90%'}}
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2 font-jakarta">{name}</h3>
            <p className="text-blue-400 font-semibold font-deardorf text-2xl">{style}</p>
          </div>
        </BackgroundGradient>
      </CardContent>
    </div>
  )
}

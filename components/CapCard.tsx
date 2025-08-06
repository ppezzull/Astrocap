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
    <div className="w-full max-w-lg mx-auto h-full group hover:scale-105 transition-all duration-300">
      <CardContent className="p-0">
        <BackgroundGradient className="rounded-[22px] bg-gray-900 border-blue-500/30 hover:border-blue-500 transition-all duration-300 h-full">
          <div className="relative overflow-hidden flex justify-center items-center rounded-t-[22px]" style={{height: '300px'}}>
            <div className="" />
            <Image
              src={src || "/placeholder.svg"}
              alt={name}
              width={260}
              height={260}
              className="object-contain h-64 w-auto mx-auto"
              style={{maxHeight: '260px'}}
            />
          </div>
          <div className="p-8 min-h-[200px] flex flex-col justify-end">
            <h3 className="text-4xl font-bold text-white mb-4 font-jakarta">{name}</h3>
            <p className="text-blue-400 font-semibold font-deardorf text-3xl">{style}</p>
          </div>
        </BackgroundGradient>
      </CardContent>
    </div>
  )
}

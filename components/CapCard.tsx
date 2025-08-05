import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export interface CapCardProps {
  src: string
  name: string
  style: string
}

export function CapCard({ src, name, style }: CapCardProps) {
  return (
    <Card className="w-80 bg-gray-900 border-blue-500/30 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 group">
      <CardContent className="p-0">
        <div className="relative overflow-hidden flex justify-center items-center" style={{height: '200px'}}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Image
            src={src || "/placeholder.svg"}
            alt={name}
            width={180}
            height={180}
            className="object-contain h-40 w-auto mx-auto transition-transform duration-300 group-hover:scale-110"
            style={{maxHeight: '160px', maxWidth: '90%'}}
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2 font-title">{name}</h3>
          <p className="text-blue-400 font-semibold font-deardorf">{style}</p>
        </div>
      </CardContent>
    </Card>
  )
}

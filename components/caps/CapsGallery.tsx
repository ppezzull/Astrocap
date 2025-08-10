import { CapCard } from "@/components/CapCard"

const caps = [
  { src: "/images/caps/cap1.png", name: "Fiamma Nera", style: "NY Flames Edition" },
  { src: "/images/caps/cap2.png", name: "Crystal Blue", style: "Texas Rangers Custom" },
  { src: "/images/caps/cap3.png", name: "Brand Power", style: "Crystal Brand Logo" },
  { src: "/images/caps/cap4.png", name: "Ocean Storm", style: "White Sox Distressed" },
  { src: "/images/caps/cap5.png", name: "Liberty Shine", style: "NY Statue Crystal" },
  { src: "/images/caps/cap6.png", name: "Diamond NY", style: "Classic Crystal NY" },
  { src: "/images/caps/cap7.png", name: "Lakers Luxury", style: "Purple & Gold Set" },
  { src: "/images/caps/cap8.png", name: "LA Dreams", style: "Dodgers Palm Style" },
]

export default function CapsGallery() {
  return (
    <section className="py-20">
      <div className="w-full px-4 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-screen-2xl items-stretch mx-auto">
          {caps.map((cap, index) => (
            <CapCard key={index} src={cap.src} name={cap.name} style={cap.style} />
          ))}
        </div>
      </div>
    </section>
  )
}

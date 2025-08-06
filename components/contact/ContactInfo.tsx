import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"
import { SiInstagram, SiTiktok } from "react-icons/si"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Direct Email */}
      <Card className="bg-gray-900 border-blue-500/30">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-white mb-4 font-jakarta">
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-2xl text-transparent">
              CONTATTO DIRETTO
            </span>
          </h3>
          <div className="flex items-center space-x-4">
            <Mail className="h-8 w-8 text-blue-400 text-3xl" />
            <div>
              <p className="text-white font-semibold font-deardorf text-2xl">Email</p>
              <a href="mailto:info@astrocap.com" className="text-blue-400 hover:text-blue-300 font-deardorf text-2xl">
                AstroCapMerch@gmail.com
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Media */}
      <Card className="bg-gray-900 border-blue-500/30">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-white mb-6 font-jakarta">
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-2xl text-transparent">
              SEGUIMI SUI SOCIAL
            </span>
          </h3>
          <div className="space-y-4">
            <a href="https://www.instagram.com/astrocapmerch" className="flex items-center space-x-4 text-white hover:text-blue-400 transition-colors">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full">
                <SiInstagram className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold font-deardorf text-2xl">Instagram</p>
                <p className="text-gray-400 font-deardorf text-2xl">@astrocapmerch</p>
              </div>
            </a>

            <a
              // href="#"
              className="flex items-center space-x-4 text-white hover:text-blue-400 transition-colors"
            >
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full">
                <SiTiktok className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold font-deardorf text-2xl">TikTok</p>
                <p className="text-gray-400 font-deardorf text-2xl">Coming soon</p>
              </div>
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Response Time */}
      <Card className="bg-gray-900 border-blue-500/50">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2 font-jakarta">TEMPO DI RISPOSTA</h3>
          <p className="text-blue-200 font-deardorf text-2xl">
            Rispondo entro 24 ore per iniziare subito il tuo progetto personalizzato!
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

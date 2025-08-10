"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Globe } from "lucide-react"

export function LanguageSelector() {
  const [language, setLanguage] = useState("it")

  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger className="w-20 bg-transparent border-blue-500/50 text-white">
        <Globe className="h-4 w-4" />
      </SelectTrigger>
      <SelectContent className="bg-black border-blue-500/50">
        <SelectItem value="it" className="text-white">🇮🇹</SelectItem>
        <SelectItem value="en" className="text-white">🇬🇧</SelectItem>
        <SelectItem value="ph" className="text-white">🇵🇭</SelectItem>
      </SelectContent>
    </Select>
  )
} 
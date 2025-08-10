import React, { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/lib/i18n";
import { locales } from "@/lib/i18n/locales";

interface ContactImagesInputProps {
  filePreviews: string[];
  onFileChange: (file: File | null, idx: number) => void;
  onRemove: (idx: number) => void;
  maxImages?: number;
}

const ContactImagesInput: React.FC<ContactImagesInputProps> = ({
  filePreviews,
  onFileChange,
  onRemove,
  maxImages = 5,
}) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const pathname = usePathname();
  const seg = (pathname?.split("/")[1] || "it");
  const locale = locales.includes(seg as any) ? (seg as any) : "it";
  const [dict, setDict] = React.useState<any>(null);
  React.useEffect(() => {
    getDictionary(locale).then(setDict);
  }, [locale]);

  return (
    <div>
      <label htmlFor="files" className="text-white font-semibold font-deardorf text-3xl">
        {dict?.contactPage.form.uploadLabel?.(maxImages) ?? `Invia il cappello che vuoi personalizzare (max ${maxImages} immagini)`}
      </label>
      {Array.from({ length: Math.min(filePreviews.length + 1, maxImages) }).map((_, idx) => (
  <div key={idx} className="mb-2 relative flex items-center gap-2">
    <Input
      id={`file-${idx}`}
      name="files"
      type="file"
      accept="image/png,image/jpeg"
      className="bg-black border-blue-500/50 text-white text-xl text-center focus:border-blue-500 placeholder:text-xl placeholder:font-bold"
      style={{ fontSize: "1.25rem", padding: "0.75rem" }}
      placeholder={dict?.contactPage.form.uploadPlaceholder ?? "Carica un'immagine del cappello"}
      onChange={e => {
        const file = e.target.files?.[0] || null;
        onFileChange(file, idx);
      }}
      // Reset input value so the same file can be reselected
      value={undefined}
    />
    {filePreviews[idx] && (
      <>
        <img
          src={filePreviews[idx]}
          alt={(dict?.contactPage.form.previewAlt?.(idx + 1)) ?? `Anteprima ${idx + 1}`}
          className="mt-2 rounded shadow max-h-40"
        />
        <Button
          type="button"
          className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shadow-lg"
          style={{ transform: "translate(50%, -50%)", minWidth: 0, padding: 0 }}
          onClick={() => onRemove(idx)}
          aria-label={dict?.contactPage.form.removeImageAria ?? "Rimuovi immagine"}
        >
          ×
        </Button>
      </>
    )}
  </div>
))}
    </div>
  );
};

export default ContactImagesInput;

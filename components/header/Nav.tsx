import Link from "next/link";

export function HeaderNav({
  locale = "it",
  labels = {
    caps: "CAPS",
    process: "PROCESS",
    contact: "CONTACT",
    editor: "EDITOR",
  },
}: {
  locale?: string;
  labels?: { caps: string; process: string; contact: string; editor?: string };
}) {
  return (
    <>
      <Link
        href={`/${locale}/caps`}
        className="text-white hover:text-blue-400 transition-colors font-bold text-xl tracking-wide font-jakarta"
      >
        {labels.caps}
      </Link>
      <Link
        href={`/${locale}/editor`}
        className="text-white hover:text-blue-400 transition-colors font-bold text-xl tracking-wide font-jakarta"
      >
        {labels.editor}
      </Link>
      <Link
        href={`/${locale}/process`}
        className="text-white hover:text-blue-400 transition-colors font-bold text-xl tracking-wide font-jakarta"
      >
        {labels.process}
      </Link>
      <Link
        href={`/${locale}/contact`}
        className="text-white hover:text-blue-400 transition-colors font-bold text-xl tracking-wide font-jakarta"
      >
        {labels.contact}
      </Link>
    </>
  );
}

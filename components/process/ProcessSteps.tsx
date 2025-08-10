import { Timeline } from "@/components/ui/timeline";
import { Step } from "./Step";

export default function ProcessSteps({
  stepsText,
}: {
  stepsText?: {
    step1: { title: string; desc: string }
    step2: { title: string; desc: string }
    step3: { title: string; desc: string }
    step4: { title: string; desc: string }
  }
}) {
  const steps = [
    {
      title: stepsText?.step1.title ?? "SCRIVIMI LA TUA IDEA",
      content: <Step key={1} description={stepsText?.step1.desc ?? "Condividi la tua visione, i colori preferiti, lo stile che desideri. Ogni dettaglio conta per creare il cappello perfetto."} />,
    },
    {
      title: stepsText?.step2.title ?? "CREO UN BOZZETTO UNICO",
      content: <Step key={2} description={stepsText?.step2.desc ?? "Trasformo la tua idea in un design dettagliato, scegliendo cristalli, posizioni e effetti per massimizzare l'impatto visivo."} />,
    },
    {
      title: stepsText?.step3.title ?? "PERSONALIZZO IL CAPPELLO",
      content: <Step key={3} description={stepsText?.step3.desc ?? "Con precisione artigianale, applico ogni cristallo e dettaglio a mano, creando un pezzo unico che rispecchia la tua personalità."} />,
    },
    {
      title: stepsText?.step4.title ?? "ENJOY YOUR DRIP",
      content: <Step key={4} description={stepsText?.step4.desc ?? "Il tuo cappello personalizzato è pronto! Un'opera d'arte indossabile che cattura l'attenzione e racconta la tua storia."} />,
    },
  ];

  return (
    <div className="bg-black">
      <Timeline data={steps} />
    </div>
  );
}


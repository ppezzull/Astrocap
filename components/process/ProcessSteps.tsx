import { Timeline } from "@/components/ui/timeline";
import { Step } from "./Step";

export default function ProcessSteps() {
  const steps = [
    {
      title: "SCRIVIMI LA TUA IDEA",
      content: (
        <Step
          key={1}
          description="Condividi la tua visione, i colori preferiti, lo stile che desideri. Ogni dettaglio conta per creare il cappello perfetto."
        />
      )
    },
    {
      title: "CREO UN BOZZETTO UNICO",
      content: (
        <Step
          key={2}
          description="Trasformo la tua idea in un design dettagliato, scegliendo cristalli, posizioni e effetti per massimizzare l'impatto visivo."
        />
      )
    },
    {
      title: "PERSONALIZZO IL CAPPELLO",
      content: (
        <Step
          key={3}
          description="Con precisione artigianale, applico ogni cristallo e dettaglio a mano, creando un pezzo unico che rispecchia la tua personalità."
        />
      )
    },
    {
      title: "ENJOY YOUR DRIP",
      content: (
        <Step
          key={4}
          description={`Il tuo cappello personalizzato è pronto!\n Un'opera d'arte indossabile che cattura l'attenzione e racconta la tua storia.`}
        />
      )
    }
  ];

  return (
    <div className="bg-black">
      <Timeline data={steps} />
    </div>
  );
}


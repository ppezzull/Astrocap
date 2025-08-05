import { Card, CardContent } from "@/components/ui/card";
import React from "react";

interface StepProps {
  description: string;
  number: number;
}

export const Step: React.FC<StepProps> = ({ description, number }) => {
  return (
    <div>
      {/* Step Content */}
      <div className="flex-1">
        <Card className="border-blue-500/30 hover:border-blue-500 transition-all duration-300">
          <CardContent className="p-8">
            <h2 className="text-3xl text-black leading-relaxed font-deardorf">{description}</h2>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

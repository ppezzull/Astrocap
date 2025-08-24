"use client";

import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

interface StepProps {
  description: string;  
}

export const Step: React.FC<StepProps> = ({ description }) => {
  return (
    <div className="mb-12">
      {/* Step Content */}
      <CardContent className="p-0">
        <BackgroundGradient className="rounded-[22px] bg-gray-900 border-blue-500 transition-all duration-300 group min-h-[180px] md:min-h-[260px] flex items-center justify-center shadow-xl">
          <h1 className="text-left text-white font-jakarta text-2xl md:text-5xl px-4 md:px-12 leading-tight">
            {description}
          </h1>
        </BackgroundGradient>
      </CardContent>
    </div>
  );
};

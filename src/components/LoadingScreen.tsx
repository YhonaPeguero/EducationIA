import React from 'react';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-pulse">
          <div className="h-16 w-16 rounded-full bg-primary/60" />
        </div>
        <h2 className="text-2xl font-semibold text-[#8B5CF6]">
          Vocational IA
        </h2>
      </div>
    </div>
  );
} 
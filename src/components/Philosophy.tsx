import React from 'react';
import { Quote } from 'lucide-react';
export function Philosophy() {
  return (
    <section className="py-24 bg-[#fefce8] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex justify-center mb-8">
          <div className="bg-green-100 p-4 rounded-full">
            <Quote className="w-8 h-8 text-green-600 fill-green-600" />
          </div>
        </div>

        <blockquote className="max-w-4xl mx-auto">
          <p className="text-3xl md:text-5xl font-serif italic text-green-800 mb-8 leading-tight">
            "Nunca foi sorte, sempre foi Deus!"
          </p>
          <footer className="text-lg md:text-xl text-gray-600 font-medium">
            Cozinhamos com propósito para abençoar a sua saúde e a da sua
            família.
          </footer>
        </blockquote>

        <div className="mt-12 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-300" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <div className="w-2 h-2 rounded-full bg-green-500" />
        </div>
      </div>
    </section>);

}
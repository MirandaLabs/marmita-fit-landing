import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';
export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-green-900">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-green-900/90 z-10" />
        {/* Abstract food shapes/gradients since we don't have a video */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60 animate-pulse-slow" />
      </div>

      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="max-w-4xl mx-auto">

          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            transition={{
              delay: 0.2
            }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white mb-8 border border-white/20">

            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">
              Cashback Garantido em Todos os Pedidos
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Sabor de Chef. <br />
            <span className="text-green-400">Praticidade que Nutre.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Marmitas Fit & Low Carb congeladas de 350g. A solução completa para
            sua reeducação alimentar com entrega grátis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="w-full sm:w-auto group">
              Ver Cardápio da Semana
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Como Funciona
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />
    </section>);

}
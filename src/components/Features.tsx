import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Wallet, Heart } from 'lucide-react';
const features = [
{
  icon: Clock,
  title: 'Praticidade Total',
  description:
  'Do freezer ao prato em minutos. Ideal para sua rotina corrida.',
  color: 'text-blue-500',
  bg: 'bg-blue-50'
},
{
  icon: Wallet,
  title: 'Economia Inteligente',
  description: 'Kits promocionais que cabem no bolso. Pague 10, Leve 12!',
  color: 'text-green-600',
  bg: 'bg-green-50'
},
{
  icon: Heart,
  title: 'Saúde Real',
  description:
  'Opções Fit e Low Carb preparadas com ingredientes selecionados.',
  color: 'text-red-500',
  bg: 'bg-red-50'
}];

export function Features() {
  return (
    <section className="py-20 bg-white relative z-30 -mt-10 rounded-t-[2.5rem]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A Escolha Inteligente
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Simplifique sua alimentação sem abrir mão do sabor e da qualidade
            nutricional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.2
            }}
            className="flex flex-col items-center text-center p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-gray-100 bg-white">

              <div
              className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 transform rotate-3`}>

                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
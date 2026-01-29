import React from 'react';
import { motion } from 'framer-motion';
import { Star, Check, ShoppingBag } from 'lucide-react';
import { Button } from './ui/Button';
export function BestSellers() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold tracking-wider uppercase text-sm">
            Nossos Kits
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Os Mais Amados
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Escolha o pacote ideal para sua rotina e economize ainda mais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1: The Star (Spans 2 cols on desktop if we wanted, but let's keep it balanced or make it prominent) */}
          <motion.div
            whileHover={{
              y: -10
            }}
            className="md:col-span-1 bg-white rounded-3xl p-8 shadow-lg border-2 border-transparent hover:border-green-500 transition-colors relative overflow-hidden group">

            <div className="absolute top-0 right-0 bg-green-100 text-green-700 px-4 py-1 rounded-bl-2xl font-semibold text-sm">
              Mais Popular
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Kit Econômico
              </h3>
              <div className="flex items-baseline mt-2">
                <span className="text-4xl font-extrabold text-green-600">
                  12
                </span>
                <span className="text-gray-500 ml-2">marmitas</span>
              </div>
              <p className="text-sm text-orange-500 font-semibold mt-2">
                Pague 10, Leve 12!
              </p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Variedade de sabores
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Ideal para 2 semanas
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Entrega Grátis
              </li>
            </ul>
            <Button className="w-full">Eu Quero Esse</Button>
          </motion.div>

          {/* Card 2: Family Big (Featured in middle) */}
          <motion.div
            whileHover={{
              scale: 1.03
            }}
            className="md:col-span-1 bg-green-600 rounded-3xl p-8 shadow-xl text-white relative overflow-hidden transform md:-translate-y-4">

            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-black/10 rounded-full blur-3xl" />

            <div className="flex items-center gap-2 mb-4 bg-white/20 w-fit px-3 py-1 rounded-full backdrop-blur-sm">
              <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span className="text-xs font-bold uppercase tracking-wide">
                Melhor Custo-Benefício
              </span>
            </div>

            <h3 className="text-3xl font-bold mb-2">Kit Família Big</h3>
            <div className="flex items-baseline mb-4">
              <span className="text-5xl font-extrabold">50</span>
              <span className="text-green-100 ml-2">marmitas</span>
            </div>
            <p className="text-green-100 mb-8">
              Garanta a alimentação saudável de toda a família com o maior
              desconto.
            </p>

            <Button className="w-full bg-white text-green-700 hover:bg-gray-100 shadow-none">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Comprar Agora
            </Button>
          </motion.div>

          {/* Card 3: Monthly */}
          <motion.div
            whileHover={{
              y: -10
            }}
            className="md:col-span-1 bg-white rounded-3xl p-8 shadow-lg border-2 border-transparent hover:border-green-500 transition-colors">

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Kit Mensal</h3>
              <div className="flex items-baseline mt-2">
                <span className="text-4xl font-extrabold text-gray-900">
                  20
                </span>
                <span className="text-gray-500 ml-2">refeições</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Para seus dias úteis</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Almoço garantido
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Cardápio personalizável
              </li>
              <li className="flex items-center text-gray-600">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                Economia de tempo
              </li>
            </ul>
            <Button
              variant="outline"
              className="w-full !text-gray-900 !border-gray-200 hover:!bg-gray-50">

              Ver Detalhes
            </Button>
          </motion.div>
        </div>
      </div>
    </section>);

}
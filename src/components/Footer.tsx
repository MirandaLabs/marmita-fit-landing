import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Instagram,
  Facebook,
  CreditCard,
  Truck } from
'lucide-react';
import { Button } from './ui/Button';
export function Footer() {
  return (
    <footer className="bg-[#166534] text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Comece sua mudança de vida hoje.
          </h2>
          <p className="text-green-100 text-lg mb-10 max-w-2xl">
            Peça agora e receba suas refeições fresquinhas no conforto da sua
            casa.
          </p>

          <motion.div
            animate={{
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}>

            <Button
              variant="whatsapp"
              size="lg"
              className="text-lg px-8 py-4 h-auto">

              <MessageCircle className="w-6 h-6 mr-2" />
              Pedir Agora pelo WhatsApp
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-green-700 pt-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Movimento Marmita Fit</h3>
            <p className="text-green-200 mb-6 max-w-sm">
              Levando saúde, sabor e praticidade para a sua mesa. Ingredientes
              selecionados e muito amor em cada preparo.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">

                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">

                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Pagamento</h4>
            <ul className="space-y-3 text-green-200">
              <li className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                Cartão de Crédito
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold text-xs border border-green-200 rounded px-1">
                  PIX
                </span>
                Pagamento via Pix
              </li>
              <li className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                Vale Refeição (VR)
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Entrega</h4>
            <ul className="space-y-3 text-green-200">
              <li className="flex items-center gap-2">
                <Truck className="w-4 h-4" />
                Entrega Grátis na Região
              </li>
              <li>Segunda a Sexta: 09h às 18h</li>
              <li>Sábado: 09h às 13h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-12 pt-8 text-center text-green-300 text-sm">
          <p>© 2024 Movimento Marmita Fit. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>);

}
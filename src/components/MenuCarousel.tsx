import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
const menuItems = [
{
  name: 'Lasanha à Bolonhesa Fit',
  image:
  'https://images.unsplash.com/photo-1574837695066-290133800f90?q=80&w=2070&auto=format&fit=crop',
  calories: '380kcal',
  tag: 'Low Carb'
},
{
  name: 'Frango com Legumes',
  image:
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop',
  calories: '320kcal',
  tag: 'Fit'
},
{
  name: 'Salmão Grelhado',
  image:
  'https://images.unsplash.com/photo-1467003909585-2f8a7270028d?q=80&w=1974&auto=format&fit=crop',
  calories: '410kcal',
  tag: 'Premium'
},
{
  name: 'Strogonoff Fit',
  image:
  'https://images.unsplash.com/photo-1608835291093-394b0c943a75?q=80&w=2072&auto=format&fit=crop',
  calories: '350kcal',
  tag: 'Favorito'
},
{
  name: 'Purê com Mix de Vegetais',
  image:
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop',
  calories: '290kcal',
  tag: 'Veggie'
}];

export function MenuCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Cardápio da Semana
          </h2>
          <p className="text-gray-600">
            Novos pratos fresquinhos toda segunda-feira.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
            aria-label="Scroll left">

            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
            aria-label="Scroll right">

            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-4 pb-8 scrollbar-hide snap-x snap-mandatory container mx-auto">

        {menuItems.map((item, index) =>
        <motion.div
          key={index}
          whileHover={{
            y: -5
          }}
          className="min-w-[280px] md:min-w-[320px] snap-start bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">

            <div className="h-48 overflow-hidden relative">
              <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-green-700 uppercase tracking-wide">
                {item.tag}
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-gray-900 leading-tight">
                  {item.name}
                </h3>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                  {item.calories}
                </span>
                <span className="text-sm font-medium text-green-600">350g</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>);

}
import { motion } from 'framer-motion';
import { Users, GraduationCap, TrendingUp, Globe } from 'lucide-react';
import { statistics } from '../../data/siteContent';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  GraduationCap,
  TrendingUp,
  Globe,
};

export default function Statistics() {
  return (
    <section className="relative -mt-20 z-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => {
              const Icon = iconMap[stat.icon];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-burgundy-100 p-3 rounded-full">
                      <Icon className="h-6 w-6 md:h-8 md:w-8 text-burgundy-700" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

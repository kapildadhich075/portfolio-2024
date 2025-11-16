import { useState } from 'react';
import { Skill } from "../../constants/data";

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-7xl md:text-9xl font-bold text-black mb-4 tracking-tight">
            Skills
          </h1>
          {/* <p className="text-gray-600 text-lg">Hover over any skill to learn more</p> */}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {Skill.map((skill, index) => (
            <div
              key={skill.name}
              className="relative group"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.05}s both`
              }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 p-6 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:border-black cursor-pointer">
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-all duration-300" />
                
                {/* Skill name */}
                <div className="relative z-10 text-center">
                  <p className="text-black font-bold text-lg mb-1 group-hover:scale-110 transition-transform duration-300">
                    {skill.name}
                  </p>
                  
                  {/* Description - shows on hover */}
                  <p className={`text-gray-600 text-sm transition-all duration-300 ${
                    hoveredSkill === skill.name 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-2'
                  }`}>
                    {skill.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-200 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Floating particles effect */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gray-100"
              style={{
                width: Math.random() * 100 + 50 + 'px',
                height: Math.random() * 100 + 50 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `}</style>
    </div>
  );
}

export default Skills;
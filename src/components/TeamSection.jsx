import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { id: 'Nayan.EXE', role: 'LVL_01_ADMIN', color: 'accent', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB42XqbEhBhZCGjMB6uiecpp9HgVt7v1glfJaAGelTrIEtZRY7pFFqz1tdzG9xreV5uYlgrcI58fJgulkJjzLL0qADSW7qatWbMHCHe-v0eICVKt9nwaGcs_1G0wXeI4HfQbHBrVP0dTtpnIWMRWx4ODEkRvTjVHgBn5kJtq0Ok4lN5h-9zXpj3ZE7e9j1rGBamC3PsgfGZossrHYIahaODJwY1ML6EVCDjtoVi097vg97DhtS0D_O6m-61y39Gg_MraUIU1DIB4-gi' },
  { id: 'Nayan.OS', role: 'LVL_01_CTO', color: 'primary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEqIaEOcUTt0AjCpvrB6mvaY8WcPCj951A7luTUq5Gs0XFgie8YJcXUktCwHaQPjCvenU1cyOLHU1vgffqEsNoM438dcWTnKFZLx8EBVuIczwvU-aoKzi5Yq0zFn1Xn2X17WP9WpcaVMkU7wKFW6z1fye-l-KdCEGeDiFkstz_nKYdtXsdJ2rclxbJJU50HCcYs_OgFPKxl1ywhBpWhr2ZL4JSvxWXrvgOX25qBBgHFhXqm3vlLLiptc3sWxY8abr3_dx5-jo4LyrD', offset: true },
  { id: 'Nayan.LOG', role: 'LVL_01_OPS', color: 'neon-green', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIMDOoQiDqqniIBB8Qs0wfloDOXdzhwEQpbWuxX_mROTWdIOW9ybrgcmklzlwt-2S7VjXmrzuZar2WlNGdA7g-JK0_cc1JepUa-EdQwoUn5q2ResZ43GFtc077D09VMHDe58mtH9HcC7_9TzKs5tppUNBk2_t850v6R__rM34b8V9gROpdRJoxfasG45wrOVYJWJ_l1PBqH8C2vb8aIT2mOBpzagCcA943hu9IztOf3Ts_aO9yNB-qZXuHIOcCunQF7VbnoVVmWYne' },
  { id: 'Nayan.UI', role: 'LVL_01_CD', color: 'deep-magenta', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBhLiM53PtkqQlvTUJKFqda71bALcCv1xz_govySwtJKkZJJx4jmk7Ttkpq0Ty05Vn7oVQf1Y7BcLrUMjo5hCtIUVy-CYFieIyUSo0viHrBQ8Clcj8aFxOQrJAlGo3RY5Ei4jIx17PGaW620uba7RQLRG8Yz6CfQmUh6TuuQYrurwr8EHe-fzB4yiis_KoJUH8uTgoMntmHd__flJO9XV3IXhnw_LwlLAAl6ek3xFd2Qslq4qmG4Uk8Xm9rrusqyEKyBF7jp0Zz8SM', offset: true },
];

const TeamSection = () => {
  return (
    <section className="mb-32">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-6xl font-black uppercase tracking-tighter leading-[0.9]"
        >
          Our Team
        </motion.h2>
        <div className="text-right">
          <p className="text-[10px] font-mono opacity-60 uppercase mb-2 tracking-[0.3em]">Founding_Agents</p>
          <div className="flex justify-end gap-1.5">
            <div className="w-8 h-[2px] bg-accent"></div>
            <div className="w-2 h-[2px] bg-white/20"></div>
            <div className="w-2 h-[2px] bg-white/20"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, i) => (
          <motion.div 
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`flex gap-4 group ${member.offset ? 'md:mt-12' : ''}`}
          >
            <div className="flex-1 aspect-[3/5] bg-zinc-900 border border-white/5 relative overflow-hidden glitch-silhouette rounded-lg group-hover:border-primary/30 transition-colors">
              <img 
                alt={member.id} 
                className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" 
                src={member.img}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className={`absolute top-0 right-0 p-3 font-mono text-[8px] text-${member.color} opacity-50 uppercase tracking-widest`}>
                #AUTH_REQ_{i+1}
              </div>
              
              {/* Scanline Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 pointer-events-none transition-opacity bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.1)_2px,rgba(255,255,255,0.1)_3px)]"></div>
            </div>
            
            <div className="vertical-id-tag flex flex-col justify-between py-4 border-l border-white/10 pl-4 group-hover:border-primary/50 transition-colors">
              <span className="font-mono text-xs text-primary uppercase tracking-[0.4em] font-black">
                ID_{member.id}
              </span>
              <span className="font-mono text-[9px] opacity-40 uppercase tracking-widest">
                {member.role}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;

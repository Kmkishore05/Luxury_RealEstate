import { BLOGS } from "../data/properties";
import { ArrowUpRight, Calendar, Clock, Award } from "lucide-react";

export default function Blog() {
  return (
    <section className="relative w-full py-20 bg-[#0B0B0B] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12 text-left">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] font-syne-luxury">
              Editorial Insights
            </span>
            <h2 className="font-serif-luxury text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
              The Real Estate <br />
              <span className="font-normal italic text-gold-pure-gradient">
                Legacy Chronicles
              </span>
            </h2>
          </div>
          <p className="text-xs md:text-sm text-white/50 max-w-sm leading-relaxed font-light">
            Stay informed with high-end architectural analyses, wealth migration tracking, and premier interior design trends curated by our editorial committee.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {BLOGS.map((blog) => (
            <div
              key={blog.id}
              className="group flex flex-col justify-between bg-[#101010] border border-white/5 hover:border-gold/30 rounded-3xl overflow-hidden transition-all duration-500 shadow-xl"
            >
              {/* Image with overlay category */}
              <div className="relative aspect-[16/10] overflow-hidden reveal-wrapper">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover reveal-image"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent opacity-60" />

                {/* Category tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md border border-[#D4AF37]/25 text-[#D4AF37] text-[8px] font-bold uppercase tracking-wider rounded-lg">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content body */}
              <div className="p-6 flex flex-col gap-4 text-left justify-between flex-1">
                <div className="flex flex-col gap-2">
                  {/* Meta date / reading time */}
                  <div className="flex items-center gap-4 text-[10px] text-[#8E8E93] font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-1">
                      <Calendar size={11} className="text-gold" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={11} className="text-gold" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-serif-luxury text-lg font-light text-white group-hover:text-gold transition-colors leading-snug line-clamp-2 mt-1">
                    {blog.title}
                  </h3>

                  <p className="text-xs text-white/50 leading-relaxed font-light line-clamp-3">
                    {blog.summary}
                  </p>
                </div>

                {/* Arrow up-right action link */}
                <div className="border-t border-white/5 pt-4 mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gold text-[10px] font-bold uppercase tracking-widest font-syne-luxury">
                    <Award size={10} />
                    <span>Executive Read</span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-white group-hover:text-gold font-bold uppercase tracking-widest transition-colors">
                    <span>Read Article</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

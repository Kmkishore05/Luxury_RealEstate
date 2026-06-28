import { useState } from "react";
import { Compass, Mail, ArrowRight, ShieldCheck } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate luxury newsletter subscription
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="relative w-full bg-[#07070a] border-t border-white/5 py-16 text-left overflow-hidden">
      {/* Background soft lighting */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-12 relative z-10">
        {/* Top News & Logo Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Logo & Slogan Column */}
          <div className="lg:col-span-4 flex flex-col gap-4 text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full border border-gold flex items-center justify-center bg-black">
                <Compass className="text-gold" size={18} />
              </div>
              <div className="flex flex-col items-start leading-none text-left">
                <span className="font-syne-luxury font-extrabold text-lg tracking-wider text-white">
                  LUXESTATE
                </span>
                <span className="text-[7px] uppercase tracking-[0.2em] text-[#D4AF37] mt-0.5">
                  Extraordinary Living
                </span>
              </div>
            </div>

            <p className="text-xs text-white/50 leading-relaxed font-light max-w-sm">
              LUXESTATE is a global sovereign advisory of ultra-luxury estates, signature penthouses, and private island reserves. Trusted by world-class leaders and sovereign legacy trusts.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2.5 mt-2">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:text-gold text-white flex items-center justify-center transition-all"
                title="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.802-4-4 0-2.209 1.791-4 4-4s4 1.802 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:text-gold text-white flex items-center justify-center transition-all"
                title="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:text-gold text-white flex items-center justify-center transition-all"
                title="Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-1.002-2.178-1.635-3.61-1.635-2.733 0-4.947 2.213-4.947 4.948 0 .387.044.765.127 1.127-4.113-.207-7.759-2.177-10.201-5.171-.426.73-.669 1.58-.669 2.485 0 1.717.873 3.232 2.2 4.12-.81-.026-1.573-.248-2.24-.619-.002.02-.002.041-.002.062 0 2.398 1.706 4.398 3.97 4.854-.415.113-.853.174-1.305.174-.319 0-.629-.03-.93-.09.627 1.956 2.4 3.38 4.512 3.418-1.652 1.296-3.734 2.068-6.002 2.068-.39 0-.775-.023-1.156-.068 2.137 1.371 4.676 2.172 7.4 2.172 8.879 0 13.734-7.355 13.734-13.734 0-.209-.005-.417-.014-.624 1.047-.755 1.833-1.704 2.507-2.784z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-gold hover:text-gold text-white flex items-center justify-center transition-all"
                title="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.8.714-1.8 1.768v2.31h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] block mb-4 font-syne-luxury">
                Registry Index
              </span>
              <ul className="flex flex-col gap-2.5 text-xs text-white/60 font-medium">
                <li>
                  <button onClick={() => onNavigate("home")} className="hover:text-gold transition-colors text-left">
                    Sovereign Home
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate("properties")} className="hover:text-gold transition-colors text-left">
                    All Listings
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate("about")} className="hover:text-gold transition-colors text-left">
                    Our Heritage
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate("agents")} className="hover:text-gold transition-colors text-left">
                    The Directorate
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] block mb-4 font-syne-luxury">
                Resource Center
              </span>
              <ul className="flex flex-col gap-2.5 text-xs text-white/60 font-medium">
                <li>
                  <button onClick={() => onNavigate("gallery")} className="hover:text-gold transition-colors text-left">
                    Media Chronicles
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate("mortgage")} className="hover:text-gold transition-colors text-left">
                    Wealth Calculator
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate("contact")} className="hover:text-gold transition-colors text-left">
                    Private Desk
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate("book")} className="hover:text-gold transition-colors text-left">
                    Book Viewing
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 flex flex-col gap-4 text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] block font-syne-luxury">
              Sovereign Newsletter
            </span>
            <p className="text-xs text-white/50 leading-relaxed font-light">
              Receive premium, off-market catalogs and global real estate migration studies directly.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <Mail className="absolute left-4 text-white/30" size={14} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="private@clientmail.com"
                  className="w-full pl-10 pr-12 py-3 rounded-xl bg-[#101010] border border-white/5 focus:border-gold focus:outline-none text-xs font-medium text-white transition-all placeholder:text-white/30"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 w-8 h-8 rounded-lg bg-gold hover:bg-gold-hover text-black flex items-center justify-center transition-all shadow-lg"
                  title="Subscribe to Newsletter"
                >
                  <ArrowRight size={13} />
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-xs text-[#51d382] font-semibold bg-[#51d382]/10 border border-[#51d382]/20 p-3.5 rounded-xl">
                <ShieldCheck size={14} />
                <span>Subscription secure. Welcome.</span>
              </div>
            )}
          </div>
        </div>

        {/* Mid Row License & Fine print */}
        <div className="h-px bg-white/5 my-2" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-white/40 leading-relaxed font-light">
          <p className="text-left">
            LUXESTATE is an international luxury real estate agency. LUXESTATE supports and complies with equal housing opportunities, RERA standards, and Monaco asset structuring regulations.
          </p>
          <p className="text-left md:text-right flex items-center justify-start md:justify-end gap-1.5 text-white/30 font-medium">
            <ShieldCheck size={12} className="text-[#51d382]" />
            <span>Secure 256-Bit SSL Client Encryption Applied</span>
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-white/30 border-t border-white/5 pt-6">
          <p>&copy; 2026 LUXESTATE Global Sovereignty. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-gold transition-colors">Privacy Charter</a>
            <a href="#terms" className="hover:text-gold transition-colors">Client Disclosures</a>
            <a href="#compliance" className="hover:text-gold transition-colors">AML Verification</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

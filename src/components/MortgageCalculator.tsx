import { useState, useEffect } from "react";
import { DollarSign, Percent, Calendar, Calculator, ShieldCheck, ArrowRight } from "lucide-react";

export default function MortgageCalculator() {
  const [propertyPrice, setPropertyPrice] = useState(48000000);
  const [downPayment, setDownPayment] = useState(9600000); // 20%
  const [interestRate, setInterestRate] = useState(4.5);
  const [loanYears, setLoanYears] = useState(30);

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const loanAmount = Math.max(0, propertyPrice - downPayment);
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanYears * 12;

    let monthly = 0;
    if (monthlyRate === 0) {
      monthly = loanAmount / numberOfPayments;
    } else {
      monthly =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }

    if (isNaN(monthly) || !isFinite(monthly)) {
      monthly = 0;
    }

    const computedTotalCost = monthly * numberOfPayments + downPayment;
    const computedTotalInterest = Math.max(0, computedTotalCost - propertyPrice);

    setMonthlyPayment(monthly);
    setTotalInterest(computedTotalInterest);
    setTotalCost(computedTotalCost);
  }, [propertyPrice, downPayment, interestRate, loanYears]);

  // Handle preset property price selectors
  const applyPresetPrice = (price: number) => {
    setPropertyPrice(price);
    setDownPayment(price * 0.2); // Maintain 20% down payment
  };

  // Safe percentage helper
  const downPaymentPercent = propertyPrice > 0 ? Math.round((downPayment / propertyPrice) * 100) : 0;

  // Formatting helper
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Pie chart circle angles/dasharrays
  const principalAmount = propertyPrice - downPayment;
  const totalFinancialCost = principalAmount + totalInterest;
  const principalPercent = totalFinancialCost > 0 ? (principalAmount / totalFinancialCost) * 100 : 50;
  const interestPercent = 100 - principalPercent;

  // Circumference for r=40 is 2 * PI * 40 = 251.2
  const circ = 251.2;
  const principalDash = (principalPercent / 100) * circ;
  const interestDash = (interestPercent / 100) * circ;

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Inputs (Left Side) */}
      <div className="lg:col-span-7 glass-panel p-6 md:p-8 rounded-3xl flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
            <Calculator size={20} />
          </div>
          <div>
            <h3 className="font-syne-luxury text-lg font-bold uppercase tracking-wider text-white">
              Wealth Advisory Calculator
            </h3>
            <p className="text-xs text-[#8E8E93]">
              Simulate investment structures and interest rates
            </p>
          </div>
        </div>

        {/* Quick Presets */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
            Select Listing Price Preset:
          </span>
          <div className="grid grid-cols-3 gap-2">
            {[29000000, 48000000, 74000000].map((p) => (
              <button
                key={p}
                onClick={() => applyPresetPrice(p)}
                className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                  propertyPrice === p
                    ? "bg-gold text-black border-gold shadow-lg shadow-gold/20"
                    : "bg-[#171717] border-white/5 text-[#F5F5F5]/60 hover:text-white hover:border-gold/30"
                }`}
              >
                {formatCurrency(p)}
              </button>
            ))}
          </div>
        </div>

        {/* Range sliders */}
        <div className="flex flex-col gap-6 mt-2">
          {/* Property Price */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">
                Property Value
              </label>
              <div className="flex items-center gap-1 text-gold font-syne-luxury font-bold">
                <DollarSign size={14} />
                <span>{propertyPrice.toLocaleString()}</span>
              </div>
            </div>
            <input
              type="range"
              min={10000000}
              max={100000000}
              step={1000000}
              value={propertyPrice}
              onChange={(e) => {
                const val = Number(e.target.value);
                setPropertyPrice(val);
                // Keep same down payment proportion
                setDownPayment(val * (downPaymentPercent / 100));
              }}
              className="w-full accent-gold h-1 bg-[#171717] rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[9px] text-[#8E8E93] font-bold">
              <span>$10 Million</span>
              <span>$100 Million (Ultra Premium)</span>
            </div>
          </div>

          {/* Down Payment */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">
                Down Payment ({downPaymentPercent}%)
              </label>
              <div className="flex items-center gap-1 text-gold font-syne-luxury font-bold">
                <DollarSign size={14} />
                <span>{downPayment.toLocaleString()}</span>
              </div>
            </div>
            <input
              type="range"
              min={propertyPrice * 0.1}
              max={propertyPrice * 0.8}
              step={100000}
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full accent-gold h-1 bg-[#171717] rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[9px] text-[#8E8E93] font-bold">
              <span>Min Down (10%: {formatCurrency(propertyPrice * 0.1)})</span>
              <span>Max Down (80%: {formatCurrency(propertyPrice * 0.8)})</span>
            </div>
          </div>

          {/* Grid Interest & Term */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Interest Rate */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">
                  Interest Rate
                </label>
                <div className="flex items-center gap-0.5 text-gold font-syne-luxury font-bold">
                  <span>{interestRate}%</span>
                  <Percent size={12} />
                </div>
              </div>
              <input
                type="range"
                min={2.0}
                max={10.0}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-gold h-1 bg-[#171717] rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[9px] text-[#8E8E93] font-bold">
                <span>2.0% (Premier Tier)</span>
                <span>10.0%</span>
              </div>
            </div>

            {/* Loan Years */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">
                  Amortization Term
                </label>
                <div className="flex items-center gap-1 text-gold font-syne-luxury font-bold">
                  <Calendar size={14} />
                  <span>{loanYears} Years</span>
                </div>
              </div>
              <input
                type="range"
                min={5}
                max={30}
                step={5}
                value={loanYears}
                onChange={(e) => setLoanYears(Number(e.target.value))}
                className="w-full accent-gold h-1 bg-[#171717] rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[9px] text-[#8E8E93] font-bold">
                <span>5 Years</span>
                <span>30 Years</span>
              </div>
            </div>
          </div>
        </div>

        {/* Advisory Warning Badge */}
        <div className="mt-4 flex items-start gap-3 bg-[#1E1A0F] border border-[#D4AF37]/20 p-4 rounded-2xl">
          <ShieldCheck className="text-gold shrink-0 mt-0.5" size={18} />
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
              LUXESTATE Private Treasury
            </span>
            <p className="text-[11px] text-white/70 leading-relaxed">
              These rates represent preferential high-net-worth portfolio financing. Private banking clients may qualify for custom interest structures. Consult your executive representative.
            </p>
          </div>
        </div>
      </div>

      {/* Outputs & Charts (Right Side) */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        {/* Output Cards */}
        <div className="glass-panel-heavy p-6 rounded-3xl flex flex-col gap-4 border border-[#D4AF37]/25 shadow-xl relative overflow-hidden">
          {/* Subtle gold back glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full" />

          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold tracking-widest text-gold">
              Estimated Monthly Retainer
            </span>
            <span className="text-3xl md:text-4xl font-extrabold font-syne-luxury text-white mt-1">
              {formatCurrency(monthlyPayment)}
              <span className="text-xs text-white/40 font-normal font-sans ml-1">/ mo</span>
            </span>
          </div>

          <div className="h-px bg-white/5 my-2" />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-[9px] uppercase font-bold tracking-wider text-[#8E8E93]">
                Principal Borrowed
              </span>
              <p className="text-sm font-bold font-syne-luxury text-white mt-0.5">
                {formatCurrency(principalAmount)}
              </p>
            </div>
            <div>
              <span className="text-[9px] uppercase font-bold tracking-wider text-[#8E8E93]">
                Total Lifetime Interest
              </span>
              <p className="text-sm font-bold font-syne-luxury text-gold mt-0.5">
                {formatCurrency(totalInterest)}
              </p>
            </div>
          </div>

          <div className="h-px bg-white/5 my-2" />

          <div>
            <span className="text-[9px] uppercase font-bold tracking-wider text-[#8E8E93]">
              Aggregate Investment (Principal + Interest)
            </span>
            <p className="text-base font-bold font-syne-luxury text-white mt-0.5">
              {formatCurrency(totalCost)}
            </p>
          </div>
        </div>

        {/* Custom Luxury Visual Pie/Donut Chart */}
        <div className="glass-panel p-6 rounded-3xl flex flex-col items-center gap-4 text-center">
          <span className="text-[10px] uppercase font-bold tracking-widest text-gold self-start">
            Financial Structure Allocation
          </span>

          <div className="relative w-44 h-44 flex items-center justify-center">
            {/* SVG Donut */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="10"
              />
              {/* Principal portion (white/light gold) */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#F5F5F5"
                strokeWidth="10"
                strokeDasharray={`${principalDash} 251.2`}
                strokeLinecap="round"
                className="transition-all duration-700"
              />
              {/* Interest portion (gold) */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#D4AF37"
                strokeWidth="10"
                strokeDasharray={`${interestDash} 251.2`}
                strokeDashoffset={`-${principalDash}`}
                strokeLinecap="round"
                className="transition-all duration-700"
              />
            </svg>

            {/* Inner Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xs text-white/50 uppercase tracking-widest">Rate</span>
              <span className="text-xl font-extrabold font-syne-luxury text-gold">{interestRate}%</span>
            </div>
          </div>

          {/* Chart Legend */}
          <div className="flex items-center justify-center gap-6 mt-2 w-full text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
              <div className="flex flex-col items-start">
                <span className="text-white font-medium">Principal</span>
                <span className="text-[10px] text-white/50">{Math.round(principalPercent)}%</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
              <div className="flex flex-col items-start">
                <span className="text-gold font-medium">Interest</span>
                <span className="text-[10px] text-white/50">{Math.round(interestPercent)}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA to representative */}
        <button className="group w-full py-4 rounded-2xl bg-white hover:bg-[#D4AF37] text-black font-bold uppercase text-xs tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/5">
          <span>Request Customized Advisory Quote</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

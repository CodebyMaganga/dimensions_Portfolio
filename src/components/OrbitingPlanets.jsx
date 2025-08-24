export default function OrbitingPlanets() {
    return (
      <section className="h-screen flex items-center justify-center relative bg-black overflow-hidden">
        <div className="relative w-[500px] h-[500px]">
          <div className="absolute inset-0 rounded-full border border-white/20 animate-spin-slow"></div>
  
          {/* Planet Example */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-xs text-white shadow-lg">
              React
            </div>
          </div>
        </div>
      </section>
    )
  }
  

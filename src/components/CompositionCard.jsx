const composition = [
  { name: "Narayan Oil", scientific: "Pharmacopoeial", value: "50%", icon: "🌿" },
  { name: "Erand Oil", scientific: "Ricinus communis (SD)", value: "20%", icon: "🫒" },
  { name: "Camphor Oil", scientific: "Cinnamomum camphora", value: "2%", icon: "❄️" },
  { name: "Peppermint Oil", scientific: "Mentha piperita", value: "2%", icon: "🍃" },
  { name: "Haldi", scientific: "Curcuma longa (Rhizome)", value: "2%", icon: "🌼" },
  { name: "Ajwain Sat", scientific: "Ammi copticum (Fruit)", value: "2%", icon: "🌰" },
  { name: "Lahsun", scientific: "Allium sativum (Bulb)", value: "2%", icon: "🧄" },
  { name: "Sarso Oil", scientific: "Brassica campestris (SD)", value: "q.s.", icon: "🌻" },
];

export default function CompositionCard({ image }) {
  return (
    <section className="relative max-w-7xl mx-auto p-6">
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 animate-pulse opacity-20 blur-2xl"></div>

      <div className="relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-[32px] shadow-2xl overflow-hidden">
        
        {/* Image */}
        {image && (
          <div className="relative h-80 overflow-hidden">
            <img
              src={image}
              alt="Product"
              className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

            <div className="absolute bottom-6 left-6">
              <span className="px-5 py-2 bg-white/90 text-green-700 font-bold rounded-full shadow-lg">
                🌿 100% Ayurvedic Formula
              </span>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-10">
          {/* Header */}
          <div className="mb-10 text-center">
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              Product Composition
            </h2>
            <p className="mt-3 text-gray-600 text-lg">
              Powerful blend of natural & therapeutic ingredients
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {composition.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/80 rounded-3xl p-6 border border-green-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-200 to-emerald-200 opacity-0 group-hover:opacity-20 blur-xl transition"></div>

                <div className="relative flex items-start gap-5">
                  {/* Icon */}
                  <div className="text-4xl">{item.icon}</div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 italic mt-1">
                      {item.scientific}
                    </p>
                  </div>

                  {/* Value */}
                  <div className="flex items-center">
                    <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold text-sm shadow-lg">
                      {item.value}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              ✔ No Chemicals &nbsp; • &nbsp; ✔ No Side Effects &nbsp; • &nbsp; ✔ Clinically Trusted
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



const benefits = [
  {
    title: "Improves Joints Mobility",
    desc: "Enriched with all-natural ingredients, this formulation supports bone health and improves overall joint flexibility and mobility.",
     image: "/assets/img/Knee-Pain.jpg",
  },
  {
    title: "Helps Reduce Inflammation",
    desc: "Powerful anti-inflammatory properties help reduce swelling and oxidative stress. Turmeric (Curcumin) aids faster recovery.",
    image: "/assets/img/Knee-Pain2.jpg",
  },
  {
    title: "Helps Reduce Joint Pain",
    desc: "Natural pain-relief ingredients ease joint stiffness and soreness, helping you move freely without discomfort.",
    image: "/assets/img/Knee-Pain3.jpg",
  },
];

export default function ProductBenefits() {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
            How It Helps You
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Targeted relief & long-term joint care
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-60 h-60 object-cover  border-4 border-green-100 group-hover:scale-110 transition"
                />
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

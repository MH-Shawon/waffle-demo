import React from "react";

const Branches = () => {
  const branches = [
    {
      id: 1,
      city: "Brooklyn",
      address: "123 Bedford Ave,\nBrooklyn, NY 11211",
      hours: "Open daily: 7AM – 7PM",
    },
    {
      id: 2,
      city: "Manhattan",
      address: "456 Spring St,\nNew York, NY 10012",
      hours: "Open daily: 7AM – 8PM",
    },
    {
      id: 3,
      city: "Queens",
      address: "789 Broadway,\nQueens, NY 11106",
      hours: "Open daily: 7AM – 6PM",
    },
    {
      id: 4,
      city: "Queens",
      address: "134-16 36th Road,\nFlushing, NY 11354",
      hours: "Open daily: 8AM – 6PM",
    },
  ];

  return (
    <section id="branches" className="py-20 bg-[#FAEBD6] text-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold mb-4 font-denk">Nearby Cafes</h2>
        <p className="text-lg opacity-80 font-bai-jamjuree">
          Find a Brewhaus nearby and stop in for your favorite drink.
        </p>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Map Placeholder */}
        <div className="w-full md:w-1/2 bg-[#C7C3B7] rounded-xl overflow-hidden shadow-lg aspect-w-16 aspect-h-9 md:aspect-h-auto">
          {/* Image of the map will go here */}
          <img
            src="/assets/Images/map.svg"
            alt="Map of cafes"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Branch Cards Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {branches.map((branch) => (
            <div key={branch.id} className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-sm text-gray-600 mb-2">{branch.city}</p>
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                {branch.address.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < branch.address.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h3>
              <p className="text-sm text-gray-700 mb-4">{branch.hours}</p>
              <button className="w-full bg-[#2D5434] text-white py-3 rounded-lg font-semibold hover:bg-[#3A6B43] transition-colors">
                Get Directions
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;

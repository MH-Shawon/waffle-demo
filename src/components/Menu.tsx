import SectionHeader from "./SectionHeader";

const Menu = () => {
  const menuCategories = [
    {
      id: 1,
      name: "Waffles",
      items: [
        {
          name: "Classic Waffle",
          price: "$8.99",
          description: "Served with maple syrup",
        },
        {
          name: "Strawberry Waffle",
          price: "$10.99",
          description: "Topped with fresh strawberries and cream",
        },
        {
          name: "Banana Nut Waffle",
          price: "$11.99",
          description: "With caramelized bananas and walnuts",
        },
      ],
    },
    {
      id: 2,
      name: "Beverages",
      items: [
        { name: "Fresh Coffee", price: "$3.99", description: "House blend" },
        {
          name: "Hot Chocolate",
          price: "$4.99",
          description: "With whipped cream",
        },
        {
          name: "Fresh Juice",
          price: "$5.99",
          description: "Seasonal selection",
        },
      ],
    },
    {
      id: 3,
      name: "Sides",
      items: [
        {
          name: "Fresh Fruit Bowl",
          price: "$6.99",
          description: "Seasonal fruits",
        },
        {
          name: "Hash Browns",
          price: "$4.99",
          description: "Crispy and golden",
        },
        { name: "Bacon", price: "$5.99", description: "Crispy strips" },
      ],
    },
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div>
        <SectionHeader
          title="Our Menu"
          subtitle="Explore our delicious selection of waffles, beverages, and sides. Made fresh daily with the finest ingredients."
        />
        <div className="space-y-12">
          {menuCategories.map((category) => (
            <div key={category.id} className="bg-[#FAEBD6] rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 font-[var(--font-denk)]">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-start border-b border-gray-200 pb-4"
                  >
                    <div>
                      <h4 className="text-lg font-semibold font-[var(--font-denk)]">
                        {item.name}
                      </h4>
                      <p className="text-gray-600 font-[var(--font-bai-jamjuree)]">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-lg font-bold font-[var(--font-bai-jamjuree)]">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;

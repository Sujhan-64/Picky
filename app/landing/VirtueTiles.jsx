const VirtueTiles = () => {
  const virtues = [
    {
      title: 'Quality Assured',
      description: 'Premium products with lifetime warranty',
      icon: '🏆',
      color: 'soft-blue'
    },
    {
      title: 'Fast Delivery',
      description: 'Express shipping within 24 hours',
      icon: '🚀',
      color: 'soft-green'
    },
    {
      title: 'Customer First',
      description: '24/7 support and easy returns',
      icon: '❤️',
      color: 'soft-red'
    }
  ];

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {virtues.map((virtue, index) => (
          <div
            key={virtue.title}
            className={`
              bg-white rounded-2xl p-8 shadow-lg border border-gray-100
              transform transition-all duration-300 hover:scale-105
              ${index === 0 ? 'animate-float' : index === 1 ? 'animate-float-delayed' : 'animate-float-delayed-2'}
            `}
            style={{
              background: `linear-gradient(135deg, ${
                virtue.color === 'soft-blue' ? '#E3F2FD' : 
                virtue.color === 'soft-green' ? '#E8F5E8' : 
                '#FFEBEE'
              } 0%, white 100%)`
            }}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">{virtue.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {virtue.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {virtue.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtueTiles;
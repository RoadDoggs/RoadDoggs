const InProgressCard = ({ trip }) => {
  return (
    <div className="group relative">
      <div className="tape w-24 h-8 -top-3 left-1/2 -translate-x-1/2 -rotate-1 z-20 opacity-90"></div>
      <div className="bg-white p-2 pb-6 shadow-paper-floating boarder border-gray-100 transition-all duration-300 hover:translate-y-[-4px] hover:rotate-1 h-full flex flex-col">
        <div className="relative w-full aspect-video bg-gray-200 mb-4 overflow-hidden border border-black/5">
          <div className="absolute top-2 left-2 z-10 bg-rust text-white text-[10px] font-mono font-bold uppercase px-2 py-1 shadow-sm border border-ink/20">
            In Progress
          </div>
          {trip.image && (
            <img
              src={trip.image}
              alt={trip.title}
              className="w-full h-full object-cover filter sepia-[.2] contrast-110 group-hover:scale-105 transition-transform duration-700"
            />
          )}
        </div>
        <div className="px-4 grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-serif font-bold text-2xl leading-none group-hover:text-rust transition-colors">
              {trip.title}
            </h3>
            <button type="button" className="text-gray-400 hover:text-ink">
              <i className="ph-bold ph-dots-three text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

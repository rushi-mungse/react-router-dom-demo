// eslint-disable-next-line react/prop-types
const ServeCard = ({ icon, title, description }) => {
  return (
    <div className="flex items-center justify-center w-full flex-col border border-n-4 rounded-lg py-6 px-5 h-full">
      {icon}
      <h3 className="text-2xl leading-normal py-2">{title}</h3>
      <p className="text-black/50 text-center">{description}</p>
    </div>
  );
};

export default ServeCard;

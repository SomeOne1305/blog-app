const Card = () => {
  return (
    <div className="p-1 mt-2 flex flex-col items-center">
      <div className="w-full max-h-52 h-full">
        <img
          className="w-full h-full object-fit-cover rounded-md"
          src="https://live-production.wcms.abc-cdn.net.au/18e570bbac2ada7350601b6875ea5d1e?impolicy=wcms_crop_resize&cropH=576&cropW=1024&xPos=0&yPos=0&width=862&height=485"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="w-full py-1">
        <h3
          className="text-xl font-bold py-1 tracking-wide line-clamp-3"
          style={{ wordSpacing: "5px" }}
        >
          How to make an awesome websites using AI: ChatGPT-4
        </h3>
        <div className="flex items-center my-2 py-2">
          <div className="relative w-9 h-9 rounded-full overflow-hidden flex shrink-0">
            <img
              className="w-full h-full aspect-square"
              src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
              alt=""
            />
          </div>
          <span className="text-sm text-gray-600 mx-1 px-1 flex">
            by
            <h4 className="text-md font-bold mx-2 text-black">John Wick</h4>•
            <span className="mx-1">7 mins read</span>
          </span>
        </div>
        <div className="flex items-center flex-wrap py-1 my-1">
          <span className="inline-block text-[13px] p-[3px] rounded-md border-2 border-gray-600 text-gray-600 transition duration-60 cursor-pointer hover:border-black hover:text-black font-bold mr-1 text-nowrap">
            Artificial Intelligence
          </span>
          <span className="inline-block text-[13px] p-[3px] rounded-md border-2 border-gray-600 text-gray-600 transition duration-60 cursor-pointer hover:border-black hover:text-black font-bold mr-1 text-nowrap">
            Education
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;

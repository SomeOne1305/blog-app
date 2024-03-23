import React from "react";
import { Input } from "../common";
import { IonIcon } from "@ionic/react";
import {
  logoFacebook,
  logoInstagram,
  addCircleOutline,
  closeOutline,
} from "ionicons/icons";
//https://gist.github.com/headzoo/8f4c6a5e843ec26abdcad87cd93e3e2e
const logoTelegram = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" fill="currentColor" viewBox="0 0 512 512"><path xmlns="http://www.w3.org/2000/svg" clip-rule="evenodd" d="m24 12c0 6.6274-5.3726 12-12 12-6.62742 0-12-5.3726-12-12 0-6.62742 5.37258-12 12-12 6.6274 0 12 5.37258 12 12zm-11.57-3.14107c-1.1671.48547-3.49985 1.49027-6.99809 3.01437-.56806.2259-.86563.4469-.89272.663-.04579.3652.41154.509 1.0343.7048.08471.0267.17249.0543.26247.0835.6127.1992 1.43688.4322 1.86535.4414.38865.0084.82244-.1518 1.30135-.4807 3.26854-2.2063 4.95574-3.32149 5.06164-3.34553.0748-.01696.1783-.03829.2485.02408.0701.06235.0633.18045.0558.21215-.0453.1931-1.8405 1.8621-2.7695 2.7258-.2896.2692-.495.4602-.537.5038-.0941.0978-.19.1902-.2821.279-.5692.5487-.99607.9602.0236 1.6322.4901.3229.8822.5899 1.2734.8563.4272.291.8533.5812 1.4046.9426.1405.0921.2746.1877.4053.2808.4972.3545.9439.6729 1.4957.6221.3207-.0295.6519-.331.8201-1.2302.3975-2.1252 1.1789-6.7299 1.3595-8.62742.0159-.16625-.004-.37901-.02-.4724-.016-.0934-.0494-.22647-.1708-.32498-.1438-.11666-.3657-.14126-.465-.13952-.4514.00796-1.1438.24874-4.4764 1.63485z" fill="currentColor" fill-rule="evenodd"/></svg>`;
//ibr.40
interface INetworks {
  type: string;
  url: string;
  icon: string;
}
// interface ISelectedNets extends INetworks{
//   icon:string
// }
const Register = () => {
  // const [social, setSocial] = React.useState<INetworks[]>([])
  const [selectedNets, setSelectedNets] = React.useState<INetworks[]>([]);
  const [select, setSelect] = React.useState<string>("instagram");
  const [input, setInput] = React.useState<string>("");
  const [error,setError] = React.useState<"empty"|"url"|false>(false)
  const field = React.useRef<HTMLInputElement>(null)

  React.useLayoutEffect(()=>{
    if(error === "empty" ||"url"){
      if(field.current){
        field.current.focus()
      }
    }
  },[error])
  console.log(error);
  
  
  const handleClick = () => {
    if(input){
      if(checkValue(input)){
        addNetwork()
      }else{
        setError('url')
      }
    }else{
      setError("empty")
    }
  };
  const iconDetector = (name: string): string => {
    if (name === "instagram") {
      return logoInstagram;
    } else if (name === "facebook") {
      return logoFacebook;
    } else if (name === "telegram") {
      return logoTelegram;
    }
    return "undefined";
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevents the default form submission
      if(input){
        if(checkValue(input)){
          addNetwork()
        }else{
          setError('url')
        }
      }else{
        setError("empty")
      }
    }
  };

  const addNetwork = () => {
    setSelectedNets([
      ...selectedNets,
      {
        type: select,
        url: input,
        icon: iconDetector(select),
      },
    ]);
    setInput("");
    console.log(selectedNets);
  };

  const checkValue = (url: string): boolean => {
    // Regular expressions for matching Instagram, Facebook, and Telegram profile URLs
    const instagramRegex =
      /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9_]+\/?$/;
    const facebookRegex =
      /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9_]+\/?$/;
    const telegramRegex = /^(https?:\/\/)?(www\.)?t\.me\/[a-zA-Z0-9_]+\/?$/;

    // Check if the URL matches any of the patterns
    if (instagramRegex.test(url)) {
      return true;
    } else if (facebookRegex.test(url)) {
      return true;
    } else if (telegramRegex.test(url)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <section className="w-full py-6">
      <div className="max-w-[800px] mx-auto">
        <div className="w-full py-4 text-center">
          <h1 className="text-3xl">Register</h1>
        </div>
        <form className="w-full p-1">
          <div className="w-full p-1 flex flex-col sm:flex-row gap-2">
            <Input id="name" label="Name" type="text" background="white" />
            <Input
              id="surname"
              label="Surname"
              type="text"
              background="white"
            />
          </div>
          <div className="w-full mt-3 p-1 flex flex-col sm:flex-row gap-2">
            <Input id="email" label="Email" type="email" background="white" />
            <Input
              id="password"
              label="Password"
              type="password"
              background="white"
            />
          </div>
          <h2 className="my-4 p-1 text-xl">Social Networks</h2>
          <div className="m-1 flex items-center rounded-lg overflow-hidden">
            <select
              name="options"
              className="block outline-none text-white bg-blue-500 py-2 sm:py-2.5 px-3 -ml-1"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setSelect(e.target.value)
              }
            >
              <option value="instagram">Instagram</option>
              <option value="facebook">Facebook</option>
              <option value="telegram">Telegram</option>
            </select>
            <input
              type="text"
              onKeyDown={handleKeyDown}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInput(e.target.value)
              }
              ref={field}
              value={input}
              placeholder="Insert your social chanel URL..."
              className={`block ${error !== false ? "text-red-600 focus:ring-red-600":""} outline-none p-2 sm:p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500`}
            />
            <div
              onClick={handleClick}
              className="cursor-pointer px-3 py-2 sm:py-2.5 inline-flex items-center text-white bg-blue-500"
            >
              Add
              <IonIcon
                icon={addCircleOutline}
                className="text-2xl text-white"
              />
            </div>
          </div>
          <div className="p-2">
            {/* <div className="flex items-center p-2 rounded-md bg-gray-50">
              <div className="p-2 pb-1 rounded-md bg-blue-100">
                <IonIcon icon={logoFacebook} className='text-2xl text-blue-700'/>
              </div>
              <a href='#' target='_blank' className='font-mono text-sky-500 hover:underline ml-3 inline-block w-1/2 text-ellipsis'>https://instagram.com/users/_hello_blogger</a>
              <div className='group cursor-pointer p-1 ml-auto'>
                <IonIcon icon={closeOutline} className='text-2xl text-gray-500 group-hover:text-gray-600 mt-1'/>
              </div>
            </div> */}
            {selectedNets.map((item: INetworks, index: number) => (
              <div
                key={item.type + index}
                className="flex items-center p-2 rounded-md mt-2 bg-gray-100"
              >
                <div className="p-2 pb-1 rounded-md bg-white">
                  <IonIcon
                    icon={item.icon}
                    className={`text-2xl ${item.type === "facebook" ? "text-blue-700" : item.type === "instagram" ? "text-pink-600" : "text-sky-500"}`}
                  />
                </div>  
                <a
                  href="#"
                  target="_blank"
                  className="font-mono text-sky-500 hover:underline ml-3 inline-block w-1/2 text-ellipsis"
                >
                  {item.url}
                </a>
                <div
                  className="group cursor-pointer p-1 ml-auto"
                  onClick={() =>
                    setSelectedNets(
                      selectedNets.filter((i: INetworks) => i.url !== item.url)
                    )
                  }
                >
                  <IonIcon
                    icon={closeOutline}
                    className="text-2xl text-gray-500 group-hover:text-gray-600 mt-1"
                  />
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;

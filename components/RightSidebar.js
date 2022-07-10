import React from "react";
import { RiVideoAddFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { CgMoreAlt } from "react-icons/cg";
import Contacts from "./Contacts";

const RightSidebar = () => {
  return (
    <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
      <div className="flex items-center text-gray-500">
        <p className="flex text-lg font-semibold flex-grow">Contacts</p>
        <div className="flex space-x-1 px-2">
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <RiVideoAddFill />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <BiSearch />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <CgMoreAlt />
          </div>
        </div>
      </div>
      <Contacts
        name="Fat"
        src="https://th.bing.com/th/id/OIP.0FeoBW_97KCYlNq6nUEZGQHaHa?pid=ImgDet&rs=1"
        status="Offline"
      />
      <Contacts
        name="Pevita Pearce"
        src="https://i0.lisimg.com/18955490/280full.jpg"
        status="Online"
      />
      <Contacts
        name="Nikita Willy"
        src="https://pbs.twimg.com/profile_images/753471149430878208/Py74g4xD.jpg"
        status="Online"
      />
    </div>
  );
};

export default RightSidebar;

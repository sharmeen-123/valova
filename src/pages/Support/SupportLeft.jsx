import React, { useState } from "react";
import SearchFiels from "../../components/inputFields/SearchFiels";
import Search from "../../assets/SearchTopBar.svg";
import Avatar from "../../assets/Avatar.svg";
import ChatCard from "../../components/cards/ChatCard";

const SupportLeft = () => {
  const [search, setSearch] = useState("");
  const [chats, setChats] = useState([
    {
      image: Avatar,
      name: "Sharmeen",
      message: "Hi! How are you?",
      date: "15:12",
      unread: 2,
    },
    {
      image: Avatar,
      name: "Sharmeen",
      message: "Hi! How are you?",
      date: "15:12",
      unread: 2,
    },
    {
      image: Avatar,
      name: "Sharmeen",
      message: "Hi! How are you?",
      date: "15:12",
      unread: 0,
    },
    {
      image: Avatar,
      name: "Sharmeen",
      message: "Hi! How are you?",
      date: "15:12",
      unread: 0,
    },
  ]);
  return (
    <div className="bg-white m-3 rounded-lg p-4 h-full">
      <div className="flex flex-col items-center justify-center">
        <p className="font-Nunitoo font-semibold text-16 sm:text-24">
          Messages
        </p>

        <SearchFiels
          setValue={setSearch}
          Bg="gray"
          Placeholder="Search..."
          PlaceholderColor="blue2"
          iconn={Search}
        />
      </div>

      {/* chats */}
      <div className="my-3">
        {chats.map((val, ind) => {
          return <ChatCard key={ind} data={val} />;
        })}
      </div>
    </div>
  );
};

export default SupportLeft;

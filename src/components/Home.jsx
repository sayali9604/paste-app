import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if(pasteId){
      const paste = allPastes.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
    
  }, [pasteId])

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId ||
          Date.now().toString(36),
        createdAt: new Date().toISOString(),
    }
   
    

    if(pasteId){
      //update
      dispatch(updateToPastes(paste));

    }
    else{
      //create
      dispatch(addToPastes(paste));

    }
    //after creation or updation 
    setTitle('');
    setValue('');
    setSearchParams({});
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-row gap-4 items-center mb-4">
        <input
          className="p-2 rounded-2xl w-full pl-4 border border-gray-300"
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={createPaste}
          className="p-2 px-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition"
        >
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>

      <textarea
        className="rounded-2xl w-full p-4 min-h-[300px] border border-gray-300"
        value={value}
        placeholder="Enter content here"
        onChange={(e) => setValue(e.target.value)}
        rows={20}
      />
    </div>
  );
};

export default Home;

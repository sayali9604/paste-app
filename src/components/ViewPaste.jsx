import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === id);

  if (!paste) {
    return <div className="p-6 text-red-500">Paste not found.</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">View Paste</h1>

      <input
        className="p-2 rounded-2xl w-full pl-4 border border-gray-300 text-black mb-4"
        type="text"
        value={paste.title}
        readOnly
      />

      <textarea
        className="rounded-2xl w-full p-4 min-h-[300px] border border-gray-300 text-black"
        value={paste.content}
        readOnly
        rows={20}
      />
    </div>
  );
};

export default ViewPaste;

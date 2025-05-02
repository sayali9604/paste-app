//import React from 'react'
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPaste } from '../redux/pasteSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Paste = () => {
  const pastes = useSelector((state)=>state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const filterData = pastes.filter(
    (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  function handleDelete(pasteId){
    dispatch(removeFromPaste(pasteId));

  }
  const navigate = useNavigate();
  const Paste = () => {
    const navigate = useNavigate();
    }
  
  
  return (
    <div className="text-white" >
   <input 
   className='p-2  rounded-2xl  min-w-[600px] mt-5 text-black'
    type='search'
    placeholder='Search here'
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
   />
   <div className='flex flex-col gap-5 mt-5'>
    {
      filterData.length > 0 &&
      filterData.map(
        (paste) =>{
          return (
            <div className='border' key={paste?._id}> 
              <div>
                {paste.title}
              </div>
              <div>
                {paste.content}
              </div>
              <div className='flex flex-row gap-4 place-content-evenly'>
              <button
  onClick={() => navigate(`/?pasteId=${paste._id}`)}
  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
>
  Edit
</button>

                

<button
  onClick={() => navigate(`/?pasteId=${paste._id}`)}
  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
>
  View
</button>

                <button onClick={ () =>handleDelete (paste?._id)}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                  Delete
                </button>
                <button onClick= {() =>{
                  navigator.clipboard.writeText(paste?.content)
                  toast.success("copied to clipboard")
  
                }}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                  Copy
                </button>
                
                <button
  onClick={() => {
    const shareUrl = `${window.location.origin}/?pasteId=${paste._id}`;
    navigator.clipboard.writeText(shareUrl);
    toast("Link copied to clipboard!");
  }}
  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
>
  Share
</button>

              </div>
              <div>
                {paste.createdAt}
              </div>
            </div>
          )
        }
      )
    }

   </div>
    </div>
  )
}

export default Paste

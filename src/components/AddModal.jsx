import React, { useState } from 'react'
import { useAddUsersMutation } from '../features/UsersSlice';
import { toast } from 'react-toastify';

const AddModal = ({ setAddModal }) => {
  const [addData , setAddData] = useState({
    image: "",
    name: "",
    username: "",   
    email: "",
    password: "",
    age: "",
  });

  const [addUsers] = useAddUsersMutation();

  const handleChange = (e) => {
    setAddData({
      ...addData,
      [e.target.name] : e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!addData.image || !addData.name || !addData.username || !addData.email || !addData.password || !addData.age) return toast.error(`bo'sh maydonni to'ldiring`)
    await addUsers(addData);
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50'>
        <form onSubmit={handleSubmit} className='w-[500px] bg-gray-950 border border-gray-700 rounded-[20px] p-8 flex flex-col gap-4 shadow-2xl'>
          <input onChange={handleChange} type="url" placeholder='image' name='image' value={addData.image}
            className='w-full h-[50px] bg-black rounded-[14px] px-4 text-white border border-gray-700 outline-none focus:border-green-600 duration-300' />
              
          <input onChange={handleChange} type="text" placeholder='name' name='name' value={addData.name}  
            className='w-full h-[50px] bg-black rounded-[14px] px-4 text-white border border-gray-700 outline-none focus:border-green-600 duration-300' />

          <input onChange={handleChange} type="text" placeholder='username' name='username' value={addData.username}
            className='w-full h-[50px] bg-black rounded-[14px] px-4 text-white border border-gray-700 outline-none focus:border-green-600 duration-300' />

          <input onChange={handleChange} type="email" placeholder='email' name='email' value={addData.email}
            className='w-full h-[50px] bg-black rounded-[14px] px-4 text-white border border-gray-700 outline-none focus:border-green-600 duration-300' />

          <input onChange={handleChange} type="password" placeholder='password' name='password' value={addData.password}
            className='w-full h-[50px] bg-black rounded-[14px] px-4 text-white border border-gray-700 outline-none focus:border-green-600 duration-300' />

          <input onChange={handleChange} type="number" placeholder='age' name='age' value={addData.age}
            className='w-full h-[50px] bg-black rounded-[14px] px-4 text-white border border-gray-700 outline-none focus:border-green-600 duration-300' />

          <div className='flex gap-4 mt-4'>
            <button  type='button' onClick={() => setAddModal(false)}
              className='w-full h-[50px] rounded-[14px] bg-black text-red-600 border-[3px] border-red-600 font-bold hover:bg-red-600 hover:text-white hover:border-white duration-300'>
              Cancel
            </button>

            <button className='w-full h-[50px] rounded-[14px] bg-black text-green-600 border-[3px] border-green-600 font-bold hover:bg-green-600 hover:text-white hover:border-white duration-300'> 
              Add+ 
            </button>
            </div>
        </form>
    </div>
  )
}
export default AddModal
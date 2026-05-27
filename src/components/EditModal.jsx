import React, { useState } from 'react'
import { useEditUsersMutation } from '../features/UsersSlice'

const EditModal = ({ setEditModal, selectedUser }) => {
  const [editData, setEditData] = useState({
    ...selectedUser
  })

  const [editUser] = useEditUsersMutation()

  const handleEdit = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await editUser(editData)
    setEditModal(false)
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50'>
      <form onSubmit={handleSubmit} className='w-[500px] bg-gray-950 border border-gray-700 rounded-[20px] p-8 flex flex-col gap-4'>
        <h1 className='text-white text-[30px] font-black text-center mb-2'> Edit User </h1>
        <img src={editData.image} alt="" className='w-[120px] h-[120px] rounded-full mx-auto border-[4px] border-yellow-400 object-cover' />
        <input className='bg-black h-[45px] rounded-[12px] px-4 text-white border border-gray-700'
          type="url"
          name='image'
          value={editData.image}
          onChange={handleEdit}
          placeholder='Image'
        />

        <input className='bg-black h-[45px] rounded-[12px] px-4 text-white border border-gray-700'
          type="text"
          name='name'
          value={editData.name}
          onChange={handleEdit}
          placeholder='Name'
        />

        <input className='bg-black h-[45px] rounded-[12px] px-4 text-white border border-gray-700'
          type="text"
          name='username'
          value={editData.username}
          onChange={handleEdit}
          placeholder='Username'
        />

        <input className='bg-black h-[45px] rounded-[12px] px-4 text-white border border-gray-700'
          type="email"
          name='email'
          value={editData.email}
          onChange={handleEdit}
          placeholder='Email'
        />

        <input className='bg-black h-[45px] rounded-[12px] px-4 text-white border border-gray-700'
          type="password"
          name='password'
          value={editData.password}
          onChange={handleEdit}
          placeholder='Password'
        />

        <input className='bg-black h-[45px] rounded-[12px] px-4 text-white border border-gray-700'
          type="number"
          name='age'
          value={editData.age}
          onChange={handleEdit}
          placeholder='Age'
        />

        <div className='flex gap-4 mt-4'>
          <button type='button' onClick={() => setEditModal(false)}
            className='w-full h-[45px] rounded-[12px] border-[3px] border-red-600 text-red-600 font-bold hover:bg-red-600 hover:text-white hover:border-white duration-300'>
            Cancel
          </button>

          <button className='w-full h-[45px] rounded-[12px] border-[3px] border-yellow-400 text-yellow-400 font-bold hover:bg-yellow-400 hover:text-white hover:border-white duration-300'>
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
export default EditModal
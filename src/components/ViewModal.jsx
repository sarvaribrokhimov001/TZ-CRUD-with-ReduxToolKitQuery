import React from 'react'

const ViewModal = ({ setViewModal, selectedUser }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50'>
      <div className='w-[450px] bg-gray-950 border border-gray-700 rounded-[20px] p-8'>
        <div className='flex flex-col items-center'>
          <img src={selectedUser.image} alt={selectedUser.name} className='w-[150px] h-[150px] rounded-full object-cover border-[5px] border-green-600' />
          <h1 className='text-white text-[30px] font-black mt-5'> {selectedUser.name} </h1>

          <div className='w-full mt-8 flex flex-col gap-4'>
            <div className='bg-black rounded-[12px] p-4 text-white'> Username: {selectedUser.username} </div>
            <div className='bg-black rounded-[12px] p-4 text-white'> Email: {selectedUser.email} </div>
            <div className='bg-black rounded-[12px] p-4 text-white'> Password: {selectedUser.password} </div>
            <div className='bg-black rounded-[12px] p-4 text-white'> Age: {selectedUser.age} </div>
          </div>

          <button onClick={() => setViewModal(false)}
            className='mt-8 w-full h-[45px] rounded-[12px] border-[3px] border-green-600 text-green-600 font-bold hover:bg-green-600 hover:text-white hover:border-white duration-300'>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
export default ViewModal
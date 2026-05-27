import React, { useState } from 'react'
import {useDeleteUsersMutation, useGetUsersQuery} from './features/UsersSlice'
import AddModal from './components/AddModal'
import EditModal from './components/EditModal'
import ViewModal from './components/ViewModal'

const App = () => {
  const [addModal , setAddModal] = useState(false)
  const [editModal , setEditModal] = useState(false)
  const [viewModal , setViewModal] = useState(false)
  const [selectedUser , setSelectedUser] = useState(null)

  const {
    data : users,
    isError,
    isLoading,
    isSuccess,
    error,
  } = useGetUsersQuery()

  const [deleteUsers , {isLoading : isDeleting}] = useDeleteUsersMutation()

  if(isLoading) return <h1 className='text-center text-red-600 text-4xl'> Loading... </h1>

  if(isError) return (
    <div>
      <h3> {error.message} </h3>
      <h3> {error.status} </h3>
    </div>
  )

  if(isSuccess)
    return (
      <div className="w-full min-h-screen bg-gray-950 px-10 py-10">
        <div className='max-w-[1400px] mx-auto'>
          <div className='flex items-center justify-between mb-10'>
            <h1 className='text-white text-[45px] font-black tracking-wide'> USERS </h1>

            <button onClick={() => setAddModal(true)}
              className='w-[140px] h-[45px] rounded-[14px] bg-black text-green-600 border-[3px] border-green-600 font-bold hover:bg-green-600 hover:text-white hover:border-white duration-300'>
              Add +
            </button>
          </div>

          {isDeleting && ( <h1 className='text-red-600 text-[28px] font-black mb-5'> Deleting... </h1> )}
          {addModal && ( <AddModal setAddModal={setAddModal} /> )}
          {editModal && ( <EditModal setEditModal={setEditModal} selectedUser={selectedUser} /> )}
          {viewModal && ( <ViewModal setViewModal={setViewModal} selectedUser={selectedUser} /> )}

          <div className='overflow-x-auto rounded-[20px] border border-gray-800 bg-black shadow-2xl'>
            <table className="w-full">
              <thead className="bg-gray-900">
                <tr>
                  <th className="px-6 py-5 text-center text-white"> T/r </th>
                  <th className="px-6 py-5 text-center text-white"> Image </th>
                  <th className="px-6 py-5 text-center text-white"> Name </th>
                  <th className="px-6 py-5 text-center text-white"> Username </th>
                  <th className="px-6 py-5 text-center text-white"> Email </th>
                  <th className="px-6 py-5 text-center text-white"> Password </th>
                  <th className="px-6 py-5 text-center text-white"> Age </th>
                  <th className="px-6 py-5 text-center text-white"> Actions </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className='border-t border-gray-800 hover:bg-gray-900 duration-300'>
                    <td className='text-center text-white py-5'> {user.id} </td>
                    <td className='py-5 flex justify-center'>
                      <img src={user.image} alt={user.name} className='w-[80px] h-[80px] rounded-full object-cover border-[3px] border-white' />
                    </td>
                    <td className='text-center text-white'> {user.name} </td>
                    <td className='text-center text-white'> {user.username} </td>
                    <td className='text-center text-white'> {user.email} </td>
                    <td className='text-center text-white'> {user.password} </td>
                    <td className='text-center text-white'> {user.age} </td>
                    <td className='py-5'>
                      <div className='flex justify-center gap-3'>
                        <button onClick={() => {
                          setSelectedUser(user)
                          setViewModal(true)
                        }}
                        className='w-[90px] h-[38px] rounded-[14px]  bg-black  border-[3px]  border-green-600 text-green-600 font-bold  hover:bg-green-600 hover:text-white 
                         hover:border-white duration-300'>
                          View
                        </button>

                        <button onClick={() => {
                            setSelectedUser(user)
                            setEditModal(true)
                          }}
                          className='w-[90px] h-[38px] rounded-[14px] bg-black border-[3px] border-yellow-400 text-yellow-400 font-bold hover:bg-yellow-400 hover:text-white
                           hover:border-white duration-300'>
                          Edit
                        </button>

                        <button onClick={() => deleteUsers(user.id)}
                          className='w-[90px] h-[38px] rounded-[14px] bg-black border-[3px] border-red-600 text-red-600 font-bold hover:bg-red-600 hover:text-white
                           hover:border-white duration-300'>
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
}
export default App
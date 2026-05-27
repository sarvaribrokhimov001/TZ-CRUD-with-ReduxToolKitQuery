import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

 export const usersAPI = createApi({
    reducerPath: "usersAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/',
    }),

    tagTypes : ["Users"],

    endpoints: (builders) => ({
        // getUsers
        getUsers: builders.query({
            query: () => "users",
            providesTags : ["Users"],
        }),

        // deleteUsers
        deleteUsers : builders.mutation({
            query : (id) => ({
                url : `users/${id}`,
                method : "DELETE",
            }),
            invalidatesTags : ["Users"],
        }),

        // addUsers
        addUsers : builders.mutation({
            query : (newUser) => ({
                url : `users/`,
                method : "POST",
                body: newUser,
            }),
            invalidatesTags : ["Users"],
        }),

        // editUsers
        editUsers : builders.mutation({
            query : (editUser) => ({
                url : `users/${editUser?.id}`,
                method : "PUT",
                body : editUser,
            })
        }),

        // editUsers id
        editUsers : builders.mutation({
            query : (editUser) => ({
                url : `users/${editUser?.id}`,
                method : "PUT",
                body : editUser,
            }),
            invalidatesTags : ["Users"]
        }),
    }),
});
export const {useGetUsersQuery , useDeleteUsersMutation , useAddUsersMutation , useEditUsersMutation} = usersAPI;
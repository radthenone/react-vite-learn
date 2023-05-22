// import { userCreate } from "../features/users/data/users"
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
//
// export const usersApi = createApi({
//     reducerPath: "usersApi",
//     baseQuery: fetchBaseQuery({
//         baseUrl: "/"
//     }),
//     endpoints: (builder) => ({
//         register: builder.mutation({
//             query: {userData} => userCreate(userData)
//         })
//
//         getAllUsers: builder.query({
//             query: () => "users",
//         }),
//         getUser: builder.query({
//             query: (userId) => `users/${userId}`
//         })
//
//     })
// })
//
// export const { useGetAllUsersQuery, useGetUserQuery } = usersApi
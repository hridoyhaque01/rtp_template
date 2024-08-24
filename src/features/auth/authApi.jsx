import moment from "moment";
import { apiSlice } from "../api/apiSlice";
import { saveAuthData } from "./authSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllAdmin: builder.query({
      query: () => ({
        url: "/admins/all",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/admins/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const responseData = result?.data;
          if (responseData) {
            const currentDate = moment();
            const futureDate = currentDate.add(30, "days");
            const expireAt = futureDate.unix();
            const data = {
              ...responseData?.data,
              expireAt,
            };
            dispatch(saveAuthData(data));
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/admins/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const responseData = result?.data;
          if (responseData) {
            const currentDate = moment();
            const futureDate = currentDate.add(30, "days");
            const expireAt = futureDate.unix();
            const data = {
              ...responseData?.data,
              expireAt,
            };
            dispatch(saveAuthData(data));
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
    sendForgotEmail: builder.mutation({
      query: (data) => ({
        url: "/admins/send-otp",
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/admins/reset",
        method: "PATCH",
        body: data,
      }),
    }),
    updateAdmin: builder.mutation({
      query: ({ data, id }) => ({
        url: `/admins/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result?.data) {
            dispatch(saveAuthData(result?.data?.admin));
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
    updateAdminPassword: builder.mutation({
      query: ({ data, email }) => ({
        url: `/admins/resetpassword/${email}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllAdminQuery,
  useRegisterMutation,
  useLoginMutation,
  useSendForgotEmailMutation,
  useResetPasswordMutation,
  useUpdateAdminMutation,
  useUpdateAdminPasswordMutation,
} = authApi;

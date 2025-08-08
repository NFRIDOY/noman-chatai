import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function Chat() {
    const [chats, setChats] = useState([])
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        // setChats({ ...data })
        setChats(prevState => (
            [...prevState, { ...data, sender: 'u' }]))
        console.log("data", data)
        const res = await axios.post("http://10.10.13.26:9001/chat/Ai/", { ...data, session_id: '' }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("access")}`
            }
        })
        if (!res?.data) {
            console.log("Something Went Wrong");
        }
        // localStorage.setItem("access", res?.data?.access);
        // localStorage.setItem("refresh", res?.data?.refresh);
        console.log("AI res body =", res?.data)
        const ai = res?.data
        // setChats(prevState => { message: ai })
        setChats(prevState => (
            [...prevState, { message: ai, sender: 'a' }]))


        // if (res?.data?.user) {
        //     navigate('/dashboard/chat')
        // }

        // setUser(res?.data?.user)
        // console.log("user", user)
        // console.log("Res?.data", res?.data)
    };
    console.log("chats clg", chats)
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='h-[900px] flex flex-col justify-between'>
                    {
                        (chats?.length == 0) ? <div className='flex justify-center items-center h-full'>
                            No messages yet. Start a new conversation!
                        </div> : <>
                    <div className='px-2'>
                        {
                            chats?.map((msg, index) => <div key={index} className='py-2 my-2 relative'>
                                <div className={(msg?.sender === 'u') ? 'text-right rounded-lg p-4 text-black ' : 'text-left max-w-[70%] rounded-lg p-4 bg-indigo-50 dark:bg-opacity-0 border border-indigo-500 text-indigo-500 dark:text-white'}>
                                    {msg?.message}
                                </div>
                            </div>
                            )
                        }
                    </div>
                        </>
                    }
                    {/* <input {...register("message", { required: true })} placeholder="Type your message (Shift + Enter for new line)" class="flex-1 p-3 py-5 border dark:border-gray-600 dark:placeholder:text-gray-100 rounded-lg resize-none focus:outline-none focus:ring focus:border-indigo-500  dark:bg-gray-700 dark:text-white placeholder:text-sm" style="overflow: hidden;"></input> */}
                    {/* {errors.messageRequired && <span>This field is required</span>} */}
                    <div className='w-full p-2 space-y-2'>
                        <div className='flex space-x-2'>
                            <div className='w-[90%]'>
                                <input {...register("message")} className='w-full p-2 border rounded-3xl' />
                            </div>
                            <div className='w-[10%]'>
                                <input type="submit" className='w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' />
                            </div>
                        </div>
                    </div>
                </form>

            </div>

        </div>
    )
}

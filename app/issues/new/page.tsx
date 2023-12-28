'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import { useForm, Controller } from 'react-hook-form'
import axios from "axios"
import { useRouter } from 'next/navigation'
interface issueForm  {
    title:string;
    description:string;
}
const  NewIssuesPage =() =>{
    const router = useRouter()
   const {register,control,handleSubmit} = useForm<issueForm>()

 
  return (
    <form className='max-w-xl space-y-3' 
    onSubmit={handleSubmit(async(data)=>{
         await axios.post('/api/issues',data);
         router.push("/issues")

})}
    >
     
      <TextField.Root>
        <TextField.Input  placeholder='title' {...register('title')}/>
      </TextField.Root>
      <Controller
        name='description'
        control={control}
        render={({field})=><SimpleMDE  placeholder="description" {...field}  />}
      />
      
      <Button>Submit new Issue</Button>
    </form>
  )
}

export default NewIssuesPage
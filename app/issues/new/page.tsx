'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
const  NewIssuesPage =() =>{
  return (
    <div className='max-w-xl space-y-3'>
     
      <TextField.Root>
        <TextField.Input  placeholder='title'/>
      </TextField.Root>
      <SimpleMDE  placeholder="description" />
      <Button>Submit new Issue</Button>
    </div>
  )
}

export default NewIssuesPage
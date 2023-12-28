'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const  NewIssuesPage =() =>{
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root>
        <TextField.Input  placeholder='title'/>
      </TextField.Root>
      <TextArea placeholder="description"/>
      <Button>Submit new Issue</Button>
    </div>
  )
}

export default NewIssuesPage
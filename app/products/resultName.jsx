import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
const ResultName = () => {
  return (
    <div className='flex justify-between mr-20 p-3'>
        {/*Result name*/}
        <div>
            Result
            (Number)
        </div>

        <div className='flex gap-20'>
            {/*Filtering dropdown - 1
            ->Need to do using map function*/}
            <div>
                <p>Show Products : </p>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/*Filtering dropdown - 2
            ->Need to do using map function*/}
            <div>
                <p>Sort by : </p>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    </div>
  )
}

export default ResultName

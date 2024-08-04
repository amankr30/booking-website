import React from 'react'

import { CalendarIcon } from "@radix-ui/react-icons"
import { format ,addDays} from "date-fns"
 

import { Popover,PopoverContent,PopoverTrigger, } from '@radix-ui/react-popover'
import { Calendar } from '../../components/ui/calendar'
import { Button } from '../../components/ui/button'
import {cn} from '../../lib/utils'

import {
  Select,
} from "../../components/ui/select"

export const DatePicker: React.FC = () => {

  const [date, setDate] = React.useState<Date>()
 
    return (
      <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[100%] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="flex w-auto flex-col space-y-2 p-2"
      >
        <Select
          onValueChange={(value) =>
            setDate(addDays(new Date(), parseInt(value)))
          }
        >
<<<<<<< HEAD
          {/* <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="0">Today</SelectItem>
            <SelectItem value="1">Tomorrow</SelectItem>
            <SelectItem value="3">In 3 days</SelectItem>
            <SelectItem value="7">In a week</SelectItem>
          </SelectContent> */}
        </Select>
        <div className="rounded-md border text-black bg-opacity-0">
=======
        </Select>
        <div className="rounded-md border text-black">
>>>>>>> e42d9975bcfed5619148b3a55a00e4195d693cc6
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </div>
      </PopoverContent>
    </Popover>
    )
}

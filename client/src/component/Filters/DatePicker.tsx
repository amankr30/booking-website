import React from 'react'

import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
 

import { Popover,PopoverContent,PopoverTrigger, } from '@radix-ui/react-popover'
import { Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
  

export const DatePicker: React.FC = () => {

  const [date, setDate] = React.useState<Date>()
 
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
      </Popover>
    )
}

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import React from "react"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger
  } from "../../components/ui/dropdown-menu"
import { Button } from "../../components/ui/button"

  type Checked = DropdownMenuCheckboxItemProps["checked"]
  
function Dropdown_test() {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(false)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)
  return (
    <div>
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full ">
        {/* <DropdownMenuLabel className="w-full">Appearance</DropdownMenuLabel> */}
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}

export default Dropdown_test
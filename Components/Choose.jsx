import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

const Choose = () => {
  return (
    <div className="bg-white">
    <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
            <h1 className="text-white"><DrawerTitle>Are you absolutely sure?</DrawerTitle></h1>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
                <Button variant="outline">Cancel</Button>
            </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
    </div>
  )
}

export default Choose
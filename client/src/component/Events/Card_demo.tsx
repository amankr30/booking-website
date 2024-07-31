import { cn } from "../../lib/utils";

export function CardDemo() {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-80 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-[url(https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-V2VkLCAyIE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00394911-qqerxyvwgc-portrait.jpg)] bg-cover"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        {/* <div className="flex flex-row items-center space-x-4 z-10"></div>
        <div className="text content">
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            Card with Author avatar, complete name and time to read - most
            suitable for blogs.
          </p>
        </div> */}
      </div>
    </div>
  );
}

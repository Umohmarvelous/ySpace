import Image from "next/image"

interface StoreItemsProps {
  title: string
  label: string
  image?: string
}

interface Store {
   store : StoreItemsProps
}


export default function CarretItem({ store }: Store) {
  return (
    <div className="text-left flex items-center flex-col w-fit ">
      <div className="text-center md:text-left flex flex-col mx-2">
        <h3 className="text-2xl md:text-2xl font-bold text-black m-0 p-0 my-4">{store.title}</h3>
        <p className="text-black font-extralight w-80 py-3 pt-0 self-start text-center md:text-left mb-6 md:mb-0 text-md md:text-[12px]">{store.label}</p>
      </div>

      {store.image && (
        <div className=" mx-0 relative mb-4 overflow-hidden w-80 h-80">
          <Image src={store.image || "/placeholder.svg"} alt={store.title} width={500} height={500} className="object-cover rounded-0 w-80 h-full transform scale-x-[-1]" />
        </div>
      )}
      
    </div>
  )
}

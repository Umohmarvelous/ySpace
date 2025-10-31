import Image from "next/image"


interface BenefitData {
   image?: string
   title: string
}


export default function AllBenefitFeature({ image, title }: BenefitData){
   return(
      <>
         <div className="w-auto pt-20 md:pt-5 pl-5 md:pl-0">
            <Image src={image || "/placeholder.svg"} alt={title} width={500} height={500} className="object-cover rounded-0 w-10 h-10 " />

            <h4 className="font-semibold text-lg">{title}</h4>
         </div>
      </>
   )
}
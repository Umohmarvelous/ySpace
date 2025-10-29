import React from 'react';

interface ContactInfoData {
   email: string;
   phone: string;
   hours: string;
}

interface ContactInfoProps {
   data : ContactInfoData
}

const ContactInfo: React.FC<ContactInfoProps> = ({ data }) => {  

  return (
    <div className='flex flex-col'>
      {/* Email */}
      <div className='flex flex-row space-x-1 justify-start items-center'>
         <span className='py-[1px] text-zinc-400 text-sm md:text-lg font-normal'>Email:</span> 
         <p className='font-medium text-lg text-zinc-700'>{data.email}</p>
      </div>

      {/* Phone */}
      <div className='flex flex-row space-x-1 justify-start items-center'>
         <span className='py-[1px] text-zinc-400 text-sm md:text-lg font-normal'>Phone:</span>
         <p className='font-medium text-lg text-zinc-700'>{data.phone}</p>
      </div>
      
      {/* Address */}
      <div className='flex flex-row space-x-1 justify-start items-center'>
         <span className='py-[1px] text-zinc-400 text-sm md:text-lg font-normal'>Hours:</span>
         <p className='font-medium text-lg text-zinc-700'>{data.hours}</p>
      </div>

    </div>
  );
};

export default ContactInfo;
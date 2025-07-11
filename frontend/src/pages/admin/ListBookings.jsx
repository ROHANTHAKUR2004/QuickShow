import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading';
import { dummyBookingData } from '../../assets/assets';
import Tilte from '../../components/admin/Tilte';
import { dateFormat } from '../../lib/Dateformat';

const ListBookings = () => {

   const currency = import.meta.env.VITE_CURRENCY
  
     const [bookings, setbookings] = useState([]);
     const [loading, setLoading] = useState(true);

     const getallbookings = async () => {
        setbookings(dummyBookingData);
        setLoading(false);
     }

     useEffect(() => {
          getallbookings();
     }, []);

  return !loading ? (

    <>
    <Tilte text1="Booking" text2="List"/>
      <div className='w-full border-collapse rounded-md overflow-hidden text-nowrap'>
        <table className='w-full border-collapse rounded-md overflow-hidden text-nowrap'>
               <thead>
                  <tr className='bg-primary/20 text-left text-white'>
                  <th className='p-2 font-medium pl-5'>User Name</th>
                  <th className='p-2 font-medium '>Movie Name</th>
                  <th className='p-2 font-medium '>Show Time</th>
                  <th className='p-2 font-medium '>Seats</th>
                  <th className='p-2 font-medium '>Amount</th>
               </tr>
               </thead>

                <tbody className='text-sm font-light'>
                             {bookings.map((item, index) => (
                               <tr
                                key={index}
                                className='border-b border-primary/10 bg-primary/5 even:bg-primary/10'
                               >
                                   <td className='p-2 min-w-45 pl-5'>{item.user.name}</td>
                                    <td className='p-2 '>{item.show.movie.title}</td>
                                   <td className='p-2 '>{dateFormat(item.show.showDateTime)}</td>
                                   <td className='p-2 '>{Object.keys(item.bookedSeats).map(seat => item.bookedSeats[seat]).join(", ")}</td>
                                   <td className='p-2 '>{currency}{item.amount}</td>
                               </tr>
                             ))}    
                           </tbody>



        </table>
      </div>
    </>
  ) : 
    <Loading/>
  
}

export default ListBookings

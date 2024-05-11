import React,{useState,useEffect} from 'react'
import axios from 'axios';
import AuthChecker from '../AuthChecker';
import CardHotel from './CardHotel';
export default function ListHotelS() {
    const [hotels,setHotels] = useState([])
    const imgs = ['P1','P2','P3','P4','P5','P6','P7','P8']
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        try{
            const resultat = await axios("http://127.0.0.1:8000/api/hotels");
            setHotels(resultat.data.resultats);
        }catch(err){
            console.log('Something wrong');
        }

    }
    console.log(hotels)
  return (
    <div className="row">
        <AuthChecker userType={'employe'}/>
    {hotels.map((hotel, i) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
            <CardHotel
                nom_hotel={hotel.nom_hotel}
                adresse={hotel.adresse}
                ville={hotel.ville}
                contact={hotel.contact}
                equipement={hotel.equipement}
                photo={`/Images/hotelVS/${imgs[i % imgs.length]}.jpg`}
            />
        </div>
    ))}
</div>
  )
}

import React,{useState,useEffect} from 'react'
import axios from 'axios';
import CardHop from './CardHop';
export default function ListHopitaux() {
    const [hopitaux,setHopitaux] = useState([])
    const imgs = ['H1','H2','H3','H4','H5','H6','H7','H8']
    useEffect(()=>{
        fetchData();

    },[])
    const fetchData=async()=>{
        try{
            const resultat = await axios("http://127.0.0.1:8000/api/hopitaux");
            setHopitaux(resultat.data.resultats);
        }catch(err){
            console.log('Something wrong');
        }

    }
    console.log(hopitaux)
  return (
    <div className="row">
    {hopitaux.map((hopital, i) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
            <CardHop
                nomHopital={hopital.nomHopitale}
                adresse={hopital.adresse}
                contact={hopital.contact}
                ville={hopital.ville}
                service_medicaux={hopital.service_medicaux}
                photo={`/Images/Hospital/${imgs[i % imgs.length]}.jpg`}
                
            />
            
        </div>
        
    ))}
</div>
  )
}

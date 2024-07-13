import React ,{useState} from 'react';

const CardDish = ({dish})=>{

const[quanity,setQuantity]=useState(0);


    const handleAddQuantity=()=>{
        
        setQuantity(prev=>prev+1);

    }
    
        const handleReduceQuantity=()=>{
            
            if(quanity === 1){

                setQuantity(0);

            }
            else if (quanity>0){
                setQuantity( prev=> prev - 1 );
            }


        }



            return(
                <div className="max-w-sm rounded shadow-lg flex-column md:flex-row items-center justify-center px-8 text-white ">
                    <div>

                        <img className="w-full h-min" src={dish.src} alt={dish.name}/>

                        <h2 className="font-bold text-l md:text-xl">
                                    {dish.name}
                            </h2>


                    </div>


                            <div className="flex flex-wrap"> 
                                <div className="px-4 flex items-center justify-center">
                                    <button className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" onClick={handleReduceQuantity}>-</button>

                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{quanity}</span>

                                    <button className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700" onClick={handleAddQuantity}>+</button>

                                </div>

                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">Add to Cart</button>

                            </div>

                </div>

            );


}

export default CardDish;
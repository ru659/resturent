import React ,{useState} from 'react';

const CardCopy = ({dish})=>{

const[quanity,setQuantity]=useState(0);

const [cart,setCart]=useState([]);


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

        const handleCart=()=>{

            if(quanity>0){
                setCart(prev=>[...prev,{quanity,name:setQuantity.name}]);
                setQuantity(0);
            }
        }

        return(
            <div className="bg-white rounded-lg shadow-lg p-8" >
            <div>
                <img src={dish.src} alt={dish.name} className="object-cover w-full h-full"/>
            </div>
                    <div className="flex item-center justify-between mt-2"> 
                        <h3 className="text-xl font-bold text-grey-900">{dish.name}</h3>
                            <button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"onClick={handleCart}>Add to Cart</button>

                    </div>

                        <div className="flex item-center justify-between mt-4">
                            <button className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" onClick={handleReduceQuantity}>-</button>

                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{quanity}</span>

                                    <button className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700" onClick={handleAddQuantity}>+</button>

            </div>

            </div>





                        



        );
    }

    export default CardCopy;

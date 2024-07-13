import { dishes } from "../quantity/dishes";
import CardCopy from "./CardCopy";

const Menu = ()=>{

    return(
        <div className="">

                    <div><h2 className="text-3xl font-bold text-black mt-8  text-center bg-slate-200 p-2">Breakfast Menu</h2></div>

                    <div className="bg-slate-700 py-16 ">
                <div className="container mx-auto px-4 ">



                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {dishes.map(dish=>(<CardCopy dish={dish} key={dish.id}/>))}
                </div>
            </div>
            </div>
            </div>


            
    );
}
export default Menu;
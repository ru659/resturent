import CardCategory from './CardCategory.js';
import {category} from '../quantity/category.js';

 
 const Container = ()=>{


    return(

        <div className="grid grid-cols-1 md:grid-cols-3  gap-2 items-center w-full md:h-full h-[350px] md:overflow-hidden overflow-auto">

                {category.map(cate=>(<CardCategory cate={cate} key={cate.id}/>))}


        </div>

    );


 }
  export default Container;
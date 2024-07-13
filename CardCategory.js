
const CardCategory = ({cate})=>{


    return(
        <div className="flex flex-col item-center justify-center bg-white rounded-lg shadow-md p-2 md:m-4 m-1 ">
            <div>
                <img src={cate.src} alt={cate.name} className="w-full h-[100%] md:h-[50%] object-cover mb-2" />
                    </div>
                        <div>
                            <h3 className="text-lg font-semibold text-center">{cate.name}</h3>
                        </div>
        </div>
      );



}
export default CardCategory;
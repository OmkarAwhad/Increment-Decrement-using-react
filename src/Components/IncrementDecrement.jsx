import React, { useState } from "react";

function IncrementDecrement(){

    const [count , setCount] = useState(0);

    function minusHandler(){
        setCount(prev=> prev-1);
    }

    function plusHandler(){
        setCount(prev => prev+1);
    }

    function resetHandler(){
        setCount(0);
    }

    return(
        <div className=" w-[20%] mx-auto text-center my-auto flex flex-col gap-10 " >
            <h1 className="text-3xl font-bold text-blue-400 ">Increment & Decrement</h1>
            <div className="w-[50%] h-18 text-[40px] bg-white mx-auto  ">
                <div className="flex h-[80%] justify-evenly items-center py-2">

                    {/* // minus */}
                    <button onClick={minusHandler} className=" border-r-4 border-black ml-2 pr-4">-</button>

                    <button>{count}</button>

                    {/* // plus */}
                    <button onClick={plusHandler} className="border-l-4 border-black pl-4">+</button>

                </div>
            </div>

            <div>
                <button onClick={resetHandler} className="bg-blue-400 px-5 py-2 font-bold text-xl ">Reset</button>
            </div>
        </div>
    )
}

export default IncrementDecrement;
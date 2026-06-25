import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/Featues/serachSlice';

const Tabs = () => {

    const dispatch = useDispatch();

    const tabs = ['photos', 'videos', 'gif']
    const activeTab = useSelector((state)=> state.search.activeTab);

  return (
    <div className='flex gap-5 p-10'>
      {
         tabs.map((tab)=>
         ( <button
          onClick={()=>(dispatch(setActiveTab(tab)))}
          className={`${activeTab == tab ? "bg-amber-700" : "bg-gray-900"} px-5 py-3 font-mono font-semibold cursor-pointer text-amber-200 rounded-sm uppercase transition-all ease-in-out duration-500 active:scale-95`}>
             {tab}
         </button>))
      }
    </div>
  )
}

export default Tabs

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "gif"];

  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);
  return (
    <div className="flex gap-5 p-10">
      {tabs.map((tab, i) => (
        <button
          className={`${activeTab == tab ? "bg-amber-600" : "bg-gray-900"} font-mono text-amber-200 font-semibold transition-all cursor-pointer active:scale-95 px-5 py-3 uppercase rounded-sm`}
          onClick={() => {
            dispatch(setActiveTabs(tab));
          }}
          key={i}
        >
          {" "}
          {tab}{" "}
        </button>
      ))}
    </div>
  );
};

export default Tabs;

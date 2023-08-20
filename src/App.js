import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from "./redux/slice/data-slice";

import ServiceHead from "./components/service-head";
import ServiceBody from "./components/service-body";

const App = () => {
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const sortedDataArray = [...data].sort((a,b) => a.service_order - b.service_order);


  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="text-text-primary">
      <ServiceHead info={sortedDataArray}/>
      <ServiceBody info={sortedDataArray}/>
    </div>
  );
}

export default App;

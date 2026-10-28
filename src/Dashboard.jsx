import supabase from "./supabase-client"; //import supabase client "./" current directory
import { useEffect, useState } from "react";

function Dashboard() {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    //useEffect(setupFunction|exe after render, dependencyArray|reactivate value)
    fetchMetrics();
  }, []); //empty dependecy array, runs after initial render

  //async function return promise, Promise result that may become available later.
  //await pauses the execution until the Promise settles
  async function fetchMetrics() {
    try {
      const { data, error } = await supabase.from("sales_deals").select(`
        name,
        value.sum()
        `);
      if (error) {
        throw error;
      }
      console.log(data);
      setMetrics(data);
    } catch (error) {
      console.error("Error fetching metrics: ", error);
    }
  }

  return (
    <div className="dashboard-wrapper">
      <div className="chart-container">
        <h2>Total Sales This Quarter ($)</h2>
      </div>
    </div>
  );
}

export default Dashboard;

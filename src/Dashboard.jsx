import supabase from "./supabase-client"; //import supabase client "./" current directory
import { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    //useEffect(setupFunction|exe after render, dependencyArray|reactivate value)
    fetchMetrics();
  }, []); //empty dependecy array, runs after initial render

  async function fetchMetrics() {
    //async function return promise, Promise result that may become available later.
    //await pauses the execution until the Promise settles

    const response = await supabase.from("sales_deals").select(`
      name,
      value.sum()
      `);

    console.log(response);
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

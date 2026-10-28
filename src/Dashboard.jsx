import supabase from "./supabase-client"; //import supabase client "./" current directory
import { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    //useEffect(setupFunction, dependencyArray)
    fetchMetrics();
  }, []); //empty dependecy array, runs in initial render

  async function fetchMetrics() {
    //async function return promise, Promise result that may become available later.
    //await pauses the execution until the Promise settles
    const response = await supabase
      .from("sales_deals") //specifies the database you want to query
      .select(
        //Choose the columns
        `
      name,
      value
      `,
      )
      .order("value", { ascending: false }) //sort the results (column name, option)
      .limit(1); //how many rows
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

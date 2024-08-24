import React, { useState } from "react";
import AdminLayoutHelper from "../components/layout/AdminLayoutHelper";
import AreaChart from "../components/shared/AreaChart";
import DashboardCard from "../components/shared/DashboardCard";
import { breadcrumbs } from "../lib/enums";

function Dashboard() {
  const [cards, setCards] = useState([]);
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <AdminLayoutHelper breadcrumb={breadcrumbs.dashboard} isShow={true}>
      <div className="w-full flex flex-col gap-6 overflow-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-y-6 sm:gap-x-4">
          {cards?.map((item, index) => (
            <DashboardCard
              key={index}
              title={item?.title}
              amount={item?.amount}
              icon={item?.icon}
            />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <AreaChart title="Contacts" data={data} />
          <AreaChart title="Invoice Amount" data={data} />
        </div>
      </div>
    </AdminLayoutHelper>
  );
}

export default Dashboard;

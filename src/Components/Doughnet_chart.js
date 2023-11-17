// import React from 'react'
import { PieChart, Pie, Tooltip } from "recharts";
// import {Doughnut} from 'react-chartjs-2';



// const data = {
//     labels: ['Mon','Tue','Wed','Thurs','Fri'],
//     datasets: [
//         {
//             label: 'Attendance for Week 1',
//             data: [25,24,25,25,3],
//             borderColor: ['rgba(255,206,86,0.2)'],
//             backgroundColor: ['rgba(232,99,132,1)',
//             'rgba(232,211,6,1)',
//             'rgba(54,162,235,1)',
//             'rgba(255,159,64,1)',
//             'rgba(153,102,255,1)' ],
//             pointBackgroundColor: 'rgba(255,206,86,0.2)',
//         }
        
//     ]
// }

// const options = {
//     plugins: {
//         title: {
//             display: true,
//             text: 'Doughnut Chart',
//             color:'blue',
//             font: {
//                 size:34
//             },
//             padding:{
//                 top:30,
//                 bottom:30
//             },
//             responsive:true,
//             animation:{
//                 animateScale: true,
//                            }
//         }
//     }
    
// }

// const Doughnet_chart = () => {
//   return (
//     <div><Doughnut data={data} options={options} /></div>
//   )
// }

// export default Doughnet_chart


import React from 'react'

const Doughnet_chart = () => {
    const data = [
        { staff: "staff1", age: 400 },
        { staff: "staff2", age: 700 },
        { staff: "staff3", age: 200 },
        { staff: "staff4", age: 100 },
    ];
  return (
    <div
    style={{
        textAlign: "center",
        margin: "auto 10%",
    }}
>
    <h4 style={{ color: "Blue" }}>
        Staff chart by age
    </h4>
   
    <PieChart width={700} height={500}>
        <Tooltip />
        <Pie
            data={data}
            dataKey="staff"
            outerRadius={250}
            innerRadius={150}
            fill="grey"
            label={({ staff, age }) =>
                `${staff}: ${age}`
            }
        />
    </PieChart>
</div>
  )
}

export default Doughnet_chart
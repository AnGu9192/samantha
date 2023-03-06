import styles from "./Expenses.module.scss";
import Person1 from "../../assets/img1.png";
import Person2 from "../../assets/img2.png";
import Person3 from "../../assets/img3.png";
import Add from "../../assets/add.png";
import optionIcon from '../../assets/optionIcon.png'

import cartIcon from '../../assets/cartIcon.png'
import transportationIcon from '../../assets/transportationIcon.png'
import housingIcon from '../../assets/housingIcon.png'


import { Bar, BarChart, ResponsiveContainer, Cell } from "recharts";
import { useState } from 'react';

export default function Expenses() {

    const[activeIndex, setActiveIndex] = useState(0)
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
  const onMouseOver = (data: any, index: number) => setActiveIndex(index)
  
  const todayExpenses = [
    {
        id: 1,
        expenses: "Grocery",
        time: "5:12 pm",
        location:  "Belanja di pasar",
        price: 326.8,
        icon: cartIcon,
        iconBgColor: " #32A7E2",
    },
    {
        id: 2,
        expenses: "Transportation",
        time: "5:12 pm",
        location:  "Belanja di pasar",
        price: 326.8,
        icon: transportationIcon,
        iconBgColor: "#B548C6",
    },
    {
        id: 3,
        expenses: "Housing",
        time: "5:12 pm",
        location:  "Belanja di pasar",
        price: 326.8,
        icon: housingIcon,
        iconBgColor: "#FF8700",
    },
  ]
  return (
    <>
      <main className={styles.expenses}>
        <div className={styles.expensesCard}>
          <section className={styles.expensesOverview}>
            <div className={styles.expensesHeader}>
              <p className={styles.expensesTitle}>Expenses</p>
              <div className={styles.expensesActions}>
                <div className={styles.personImages}>
                  <img src={Person1} alt="Person1" className={styles.personOne} />
                  <img src={Person2} alt="Person2" className={styles.personTwo}/>
                  <img src={Person3} alt="Person3" className={styles.personThree} />
                </div>
                <button>
                  <img src={Add} alt="add" className={styles.addIcon} />
                </button>
              </div>
            </div>

            <p className={styles.dateRange}>01 - 25 March, 2020</p>
            <ResponsiveContainer width="100%" minHeight="9vh">
              <BarChart width={150} height={40} data={data}>
                <Bar dataKey="uv" fill="rgba(21, 122, 255,  .2)"
                onMouseOver={onMouseOver}>
                    
                    {data.map((entry, index) =>(
                        <Cell cursor="pointer"
                        fill={index === activeIndex
                        ? "rgb(21, 122, 255)"
                        : "rgba(21, 122, 255,  .2)"
                    }
                    key={index}
                     />
                    ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <div className={styles.expensesOverviewHeader}>
                <p className={styles.expensesOverviewTitle}>Today</p>
                <button>
                    <img src={optionIcon} alt="options" />
                </button>
            </div>

            <ul>
                {todayExpenses.flatMap((expense => 
                       <li className={styles.expenseItem} key={expense.id}>
                       <div className={styles.expenseItemLeft}>
                        <div 
                        style={{backgroundColor:expense.iconBgColor}}
                        className={styles.expenseItemDiv}>
                        <img src={expense.icon} alt={expense.expenses}/>
                        </div>
                        <div className={styles.expenseItemDetails}>
                            <p className={styles.expenseItemTitle}>{expense.expenses}</p>
                            <p className={styles.expenseItemTime}>
                           {expense.time} • {expense.location}
                            </p>
                       </div>
                       </div>
                       <p className={styles.expenseItemPrice}>{expense.price}</p>
                    </li>
                    ))}
         
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

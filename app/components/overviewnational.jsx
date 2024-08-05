

import { client } from "../lib/sanity";
import Image from "next/image";
import image3 from '../images/logo.svg'; // Assuming you need this image somewhere in the component

async function getNational() {
  const query = `
    *[_type == 'result_national'] | order(_createdAt desc) {
      dateandtime,
      amount,
      winningnumber,
      winner
    }`;
    return client.fetch(query,{},
      {
        cache:'no-store',
      }
    )
    }

async function National() {
  const national = await getNational();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-24">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-100 dark:text-gray-100">
          <caption className="p-5 text-lg font-light text-left rtl:text-right text-gray-100 dark:bg-gray-100">
            National Results
            <p className="mt-1 text-sm font-thin text-gray-100 dark:text-gray-400">
            ALS National game results - Nigeria
            </p>
          </caption>
          <thead className="text-xs text-gray-100 font-thin uppercase dark:bg-gray-100 dark:text-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3 font-normal">
                Date of Draw
              </th>
              <th scope="col" className="px-6 py-3 font-normal">
                Winning Numbers
              </th>
              <th scope="col" className="px-6 py-3 font-normal">
                Winning Amount
              </th>
              <th scope="col" className="px-6 py-3 font-normal">
                Winners
              </th>
            </tr>
          </thead>
          <tbody>
            {national.map((post, idx) => (
              <tr key={idx} className="border-b dark:bg-gray-100 dark:border-gray-100">
                <th scope="row" className="px-6 py-4 font-thin text-gray-100 whitespace-nowrap dark:text-white">
                  {post.dateandtime}
                </th>
                <td className="px-6 py-4 font-thin">
                  {post.winningnumber}
                </td>
                <td className="px-6 py-4 font-thin">
                  {post.amount}
                </td>
                <td className="px-6 py-4 font-thin">
                  {post.winner}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default National;



import { client } from "../lib/sanity";
import Image from "next/image"; // Assuming you need this image somewhere in the component

async function getCareers() {
  const query = `
    *[_type == 'careers'] | order(_createdAt desc) {
      role,
      location,
      "documentUrl": document.asset->url
    }
  `;
return client.fetch(query,{},
  {
    cache:'no-store',
  }
)
}

async function Careers() {
  const careers = await getCareers();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-24">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-100 dark:text-gray-100">
          <thead className="text-xs text-gray-100 font-thin uppercase dark:bg-gray-100 dark:text-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3 font-normal">
                Role
              </th>
              <th scope="col" className="px-6 py-3 font-normal">
                Location
              </th>
              <th scope="col" className="px-6 py-3 font-normal">
                Document
              </th>
            </tr>
          </thead>
          <tbody>
            {careers.map((post, idx) => (
              <tr key={idx} className="border-b dark:bg-gray-100 dark:border-gray-100">
                <th scope="row" className="px-6 py-4 font-thin text-gray-100 whitespace-nowrap dark:text-white">
                  {post.role}
                </th>
                <td className="px-6 py-4 font-thin">
                  {post.location}
                </td>
                <td className="px-6 py-4 font-thin">
                  <a href={post.documentUrl} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    View Document
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Careers;

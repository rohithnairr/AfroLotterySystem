import { client } from "../lib/sanity";

async function getData() {
    const query = `
    *[_type == 'faq'] | order(_createdAt desc) {
      question,
      answer
    }`;
    return client.fetch(query,{},
        {
          cache:'no-store',
        }
      )
      }

  async function Faqs() {
    const data = await getData();
  
    return (
        <div className="p-8">
        {data.map((post, idx) =>
        (
          <div key={idx} >
        <ul className="text-white">
          <li  className="list-disc mt-8">{post.question}<br/><span className="font-thin ">{post.answer}</span></li>
        </ul>
        </div>
        ))}
        </div>
    );
  }
  
  export default Faqs;
  
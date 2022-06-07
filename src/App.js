import './App.css';
import Blogs from './Components/Blogs';
import Pagination from './Components/Pagination';
import Search from './Components/Search';
import { useEffect, useState } from "react"


function App() {

  // *********************************************//
  //   const [data,setData] = useState();

  //   useEffect(()=>{
  //     async function getdata(){
  //         let api = await fetch('https://logibricks.com/api/blogCategories')
  //         // let api = await fetch('https://logibricks.com/api/blogs/marketplace-management?page=1 ')
  //         api = await api.json();
  //         console.log(api);
  //         // setData(api)
  //         setData(api.first_page_url)
  //         // setData(api.last_page_url)
  //     }
  //     getdata();

  // },[])
  // **********************************************//

  const [posts, setPosts] = useState([{ "id": 1, "title": "Logistics Management", "detail": "Logistics Management", "image": "https:\/\/d2cblobms.blob.core.windows.net\/logibricks\/blogs\/category\/lToTQuoe07c5kNu3q3nAnTAbZm5TfKgSHgj4HbkQ.png", "created_at": "2021-08-10T01:18:07.000000Z", "updated_at": "2022-04-04T12:50:35.000000Z", "slug": "logistics-management" }, { "id": 2, "title": "Marketplace Management", "detail": "Marketplace Management", "image": "https:\/\/d2cblobms.blob.core.windows.net\/logibricks\/blogs\/category\/L4MVtRCQA0bFnbKiclyvnXBbcCeSlSykFvp0UwGA.png", "created_at": "2021-08-10T01:18:45.000000Z", "updated_at": "2022-04-04T12:51:11.000000Z", "slug": "marketplace-management" }, { "id": 3, "title": "Inventory Management", "detail": "Inventory Management", "image": "https:\/\/d2cblobms.blob.core.windows.net\/logibricks\/blogs\/category\/YjlhzGiMsoh6u0mG2MyEJWmeaEi0rR6mKN48eFUR.jpeg", "created_at": "2021-08-10T01:19:55.000000Z", "updated_at": "2022-04-04T12:58:36.000000Z", "slug": "inventory-management" }, { "id": 4, "title": "Supply Chain Management", "detail": "Supply Chain Management", "image": "https:\/\/d2cblobms.blob.core.windows.net\/logibricks\/blogs\/category\/W86LFULMwWSbCrfwA4lYOXi98RpWzw6wODcHemk1.jpeg", "created_at": "2021-08-10T01:20:18.000000Z", "updated_at": "2022-04-04T12:59:33.000000Z", "slug": "supply-chain-management" }, { "id": 5, "title": "Brand Awareness", "detail": "Brand Awareness", "image": "https:\/\/d2cblobms.blob.core.windows.net\/logibricks\/blogs\/category\/CUoAhh147d7eTCIuNGUit4HonweH7qC8LabybzZ5.jpeg", "created_at": "2021-08-10T01:20:39.000000Z", "updated_at": "2022-04-04T13:00:03.000000Z", "slug": "brand-awareness" }, { "id": 6, "title": "Emerging Trends", "detail": "Emerging Trends", "image": "https:\/\/d2cblobms.blob.core.windows.net\/logibricks\/blogs\/category\/DjSHVQtlAkliIzvBEeeCtZJzoWv6BnrASW8DhXoI.jpeg", "created_at": "2021-08-10T01:20:56.000000Z", "updated_at": "2022-04-04T13:00:40.000000Z", "slug": "emerging-trends" }, { "id": 7, "title": "Payment Reconciliation", "detail": "Payment Reconciliation", "image": "https:\/\/d2cblobms.blob.core.windows.net\/logibricks\/blogs\/category\/l6s03oldG2PtR1aNhSMddSZiPzQmAUPlCXFacp0M.png", "created_at": "2022-05-24T05:48:41.000000Z", "updated_at": "2022-05-24T05:49:58.000000Z", "slug": "payment-reconciliation" }])

  const [showPerPage, setShowPerPage] = useState(3);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1 className='header my-5'>Welcome to Logibricks</h1>
        <Search />
        <Blogs />

        <div className="container py-4">
          <div className="row">
            {posts.slice(pagination.start, pagination.end).map((post) => (
              <div className="col-md-4 mb-3 " key={post.id}>
                <div className="card card_style" >
                  <div className="card-body" >
                    <h5>
                      #{post.id} {post.title}
                    </h5>
                    <p>{post.body}</p>
                    <img src={post.image} width="150px" />
                    <p>{post.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>


          <Pagination
            showPerPage={showPerPage}
            onPaginationChange={onPaginationChange}
            total={posts.length}
          />

        </div>

      </header>

    </div>
  );
}

export default App;

import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <div className="w-1/4 h-screen border border-black poppins">
                <div>
                    <h1 className="w-1/2 py-1 mt-5 text-xl text-center bg-black text-white m-auto rounded-lg">All Todos</h1>
                    <div className="w-4/5 xl:flex xl:flex-row flex flex-col m-auto mt-10  gap-2">
                        <input className="border  rounded-lg" type="text" placeholder="Search..." />
                        <button className="bg-black text-white px-3 py-1 rounded-lg">New</button>
                    </div>
                </div>

                <nav className="mt-5">
                    <ul className="flex flex-col gap-3 px-5">
                        <li>
                            <Link to={`/contacts/1`}>Your Name</Link>
                        </li>
                        <li>
                            <Link to={`/contacts/2`}>Your Friend</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>



        </>
    );
}


















//   <div id="sidebar">
//           <h1>React Router Contacts</h1>
//           <div>
//             <form id="search-form" role="search">
//               <input
//                 id="q"
//                 aria-label="Search contacts"
//                 placeholder="Search"
//                 type="search"
//                 name="q"
//               />
//               <div
//                 id="search-spinner"
//                 aria-hidden
//                 hidden={true}
//               />
//               <div
//                 className="sr-only"
//                 aria-live="polite"
//               ></div>
//             </form>
//             <form method="post">
//               <button type="submit">New</button>
//             </form>
//           </div>
//           <nav>
//             <ul>
//               <li>
//                 <Link href={`/contacts/1`}>Your Name</Link>
//               </li>
//               <li>
//                 <Link href={`/contacts/2`}>Your Friend</Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//         <div id="detail">
//             <Outlet/>
//         </div>
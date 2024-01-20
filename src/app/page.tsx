import Link from "next/link";
import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import "~/styles/main.css" 

export default async function Home(){
  return(<>
    <div className="scrolling-container">
      <div className="scrolling-content"></div>
        {/* <img src="assets/wall.jpg" alt="My Image" className="rounded-lg w-full h-auto" /> */}
        {/* <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl subpixel-antialiased font-black shadow-lg shadow-cyan-500/50 hover:shadow-indigo-500/50" src="assets/1x/Asset.png"/> */}
    </div>
  </>)
}


//some goood techniques...


//https://youtu.be/v6TPcU23wP8?si=6WVkxkA7qZDmCqpX


// export default async function Home() {
//   const hello = await api.post.hello.query({ text: "from tRPC" });
//   const session = await getServerAuthSession();

//   return (
//     <main>
//             {hello ? hello.greeting : "Loading tRPC query..."}
        

          
//               {session && <span>Logged in as {session.user?.name}</span>}
            
//             <Link
//               href={session ? "/api/auth/signout" : "/api/auth/signin"}
//               className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
//             >
//               {session ? "Sign out" : "Sign in"}
//             </Link>
        

//         <CrudShowcase />
     
//     </main>
//   );
// }

// async function CrudShowcase() {
//   const session = await getServerAuthSession();
//   if (!session?.user) return null;

//   const latestPost = await api.post.getLatest.query();

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }

import {
  Bell,
  Bookmark,
  Hash,
  Home,
  Mail,
  MoreHorizontal,
  Twitter,
  User,
} from 'lucide-react';
import Link from 'next/link';

const App = () => {
  const NAVIGATION_ITEMS = [
    { title: 'Twitter', icon: Twitter },
    { title: 'Home', icon: Home },
    { title: 'Explore', icon: Hash },
    { title: 'Notifications', icon: Bell },
    { title: 'Messages', icon: Mail },
    { title: 'Bookmarks', icon: Bookmark },
    { title: 'Twitter Blue', icon: Twitter },
    { title: 'Profile', icon: User },
    { title: 'More', icon: MoreHorizontal },
  ];
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* left Sidebar */}
        <aside className="fixed w-[275px] flex flex-col items-stretch h-screen">
          <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                className="hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-star t w-fit space-x-4 rounded-3xl py-2 px-6"
                href={`/${item.title.toLocaleLowerCase()}`}
                key={item.title}
              >
                <div>
                  <item.icon />
                </div>
                {item.title !== 'Twitter' && <div>{item.title}</div>}
              </Link>
            ))}
            <button className="rounded-full bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200 ">
              Tweet
            </button>
          </div>
          <button className="rounded-full flex items-center space-x-2 m-4 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between ">
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-slate-400 w-8 h-8"></div>
              <div className="text-left text-sm">
                <div className="font-semibold">Abdullah Ghani</div>
                <div>@AbdullahGhani</div>
              </div>
            </div>
            <div>
              <MoreHorizontal />
            </div>
          </button>
        </aside>
        {/* Main Timeline */}
        <main className="">News Fead</main>
        {/* Right Sidebar  */}
        <aside className="">Right Sidebar</aside>
      </div>
    </div>
  );
};
export default App;

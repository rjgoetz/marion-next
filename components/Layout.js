import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';

export default function Layout({ children }) {
  return (
    <div>
      <div className="h-screen flex flex-col justify-between 2xl:container">
        <div className="flex-grow lg:grid lg:grid-cols-12 lg:gap-4">
          <div className="lg:col-span-9">
            <Header></Header>

            <main className="pb-8 h-full sm:pb-16">{children}</main>
          </div>
          <div className="lg:col-span-3">
            <Aside></Aside>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

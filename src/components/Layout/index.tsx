import Header from 'components/Navbar/Header'
import Footer from 'components/Navbar/Footer'

interface PropsType {
  children: React.ReactNode
}

const Layout = (props: PropsType) => {
  return (
    <div className="w-full h-screen bg-[#F2F2F2]">
      <Header />
      <div className="h-[calc(100vh-60px-55px)] z-10 overflow-y-auto">{props?.children}</div>
      <Footer />
    </div>
  )
}

export default Layout

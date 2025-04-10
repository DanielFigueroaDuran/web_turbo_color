import Container from "./Container"
import HeaderMenu from "./HeaderMenu"
import Logo from "./Logo"

const Header = () => {
      return (
            <header className="border-b border-b-gray-400 py-5">
                  <Container className="flex items-center justify-between gap-7 text-gray-700 ">
                        {/* logo */}
                        <Logo />
                        {/* leftBar */}
                        <HeaderMenu />

                        {/* RighBar */}
                        <div className="text-lightColor">
                              <div className="lg:hidden md:hidden">Rigth</div>
                        </div>
                  </Container >
            </header >
      )
}

export default Header
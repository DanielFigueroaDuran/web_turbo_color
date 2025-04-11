import Container from "./Container"
import HeaderMenu from "./HeaderMenu"
import Logo from "./Logo"
import MobileMenu from "./MobileMenu"
import SearchBar from "./SearchBar"

const Header = () => {
      return (
            <header className="border-b border-b-gray-400 py-5">
                  <Container className="flex items-center justify-between gap-7 text-gray-700 border-2">
                        {/* logo */}
                        <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5 border-2">
                              <Logo />
                        </div>
                        {/* leftBar */}
                        <HeaderMenu />

                        {/* 
                        <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">
                        </div> */}
                        <MobileMenu />

                        {/* RighBar */}
                        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5 border-2">
                              <SearchBar />
                        </div>
                  </Container >
            </header >
      )
}

export default Header
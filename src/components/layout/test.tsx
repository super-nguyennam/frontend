import { Search } from "lucide-react";
import styled from "styled-components";

// Theme (có thể tách ra file riêng nếu cần)
const theme = {
  colors: {
    primary: "#D96CF4",
    textPrimary: "#ffffff",
    textDisabled: "#9ca3af",
    textMuted: "#6b7280",
    darkCard: "#1a1a1a"
  }
};

// Styled Components
const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  width: 100%;
  height: 4rem;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(12px);
`;

const HeaderContainer = styled.div`
  max-width: 1536px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0;
`;

const LogoText = styled.span`
  color: ${props => props.color || "white"};
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-left: 4rem;
  }
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.colors.textPrimary};
  transition: color 0.2s;
  padding: 0.5rem;
  
  &:hover {
    color: ${theme.colors.primary};
  }
`;

const NavText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SearchContainer = styled.div`
  position: relative;
  display: none;
  
  @media (min-width: 768px) {
    display: block;
  }
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.darkCard};
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  width: 2rem;
  transition: all 0.3s;
  
  &:focus-within {
    width: 20rem;
  }
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: 0.875rem;
  color: ${theme.colors.textPrimary};
  margin-left: 0.5rem;
  width: 0;
  transition: all 0.3s;
  
  &::placeholder {
    color: ${theme.colors.textDisabled};
  }
  
  ${SearchInputWrapper}:focus-within & {
    width: 100%;
  }
`;

const LanguageFlag = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 9999px;
  overflow: hidden;
`;

const FlagImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfileImage = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PrimaryIcon = styled.span`
  display: inline-flex;
  color: ${theme.colors.primary};
`;

const SearchIcon = styled(Search)`
  width: 1rem;
  height: 1rem;
  color: ${theme.colors.textDisabled};
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        {/* Logo */}
        <LogoWrapper>
          <LogoLink href="/">
            <LogoText>JAV</LogoText>
            <LogoText color={theme.colors.primary}>XX</LogoText>
          </LogoLink>
        </LogoWrapper>

        {/* Navigation */}
        <Nav>
          <NavLink href="#">
            <PrimaryIcon>
            <svg width="14" height="12" viewBox="0 0 14 12" fill="currentColor">
              <path d="M11.91 0.169998C12.1833 0.189998 12.33 0.336665 12.35 0.609999V1.92H13.66C13.9333 1.94 14.08 2.08667 14.1 2.36C14.08 2.63333 13.9333 2.78 13.66 2.8H12.35V4.11C12.33 4.38333 12.1833 4.53 11.91 4.55C11.6367 4.53 11.4933 4.38333 11.48 4.11V2.8H10.16C9.88667 2.78 9.74334 2.63333 9.73001 2.36C9.74334 2.08667 9.88667 1.94 10.16 1.92H11.48V0.609999C11.4933 0.336665 11.6367 0.189998 11.91 0.169998ZM11.91 8.05C12.1833 8.07 12.33 8.21666 12.35 8.49V9.8H13.66C13.9333 9.82 14.08 9.96666 14.1 10.24C14.08 10.5133 13.9333 10.6567 13.66 10.67H12.35V11.99C12.33 12.2633 12.1833 12.41 11.91 12.43C11.6367 12.41 11.4933 12.2633 11.48 11.99V10.67H10.16C9.88667 10.6567 9.74334 10.5133 9.73001 10.24C9.74334 9.96666 9.88667 9.82 10.16 9.8H11.48V8.49C11.4933 8.21666 11.6367 8.07 11.91 8.05ZM3.85001 5.23V5.21L1.58001 6.27L3.85001 7.31C4.03001 7.40333 4.16667 7.54 4.26001 7.72L5.32001 9.99L6.36001 7.72C6.45334 7.54 6.59001 7.40333 6.77001 7.31L9.04001 6.27L6.77001 5.23C6.59001 5.12333 6.45334 4.98 6.36001 4.8L5.32001 2.53L4.26001 4.8C4.16667 4.98 4.03001 5.12333 3.85001 5.23ZM3.46001 8.1L0.350006 6.66C0.183339 6.58667 0.100006 6.45666 0.100006 6.27C0.100006 6.09 0.183339 5.95333 0.350006 5.86L3.46001 4.41L4.91001 1.3C5.00334 1.13333 5.14001 1.05 5.32001 1.05C5.48667 1.05 5.61667 1.13333 5.71001 1.3L7.15001 4.41L10.27 5.86C10.4367 5.95333 10.52 6.09 10.52 6.27C10.52 6.43666 10.4367 6.56667 10.27 6.66L7.15001 8.1L5.71001 11.22C5.63667 11.3867 5.50667 11.47 5.32001 11.47C5.14001 11.47 5.00334 11.3867 4.91001 11.22L3.46001 8.1Z" fill="#D96CF4"/>
            </svg>
            </PrimaryIcon>
            <NavText>Mới</NavText>
          </NavLink>

          <NavLink href="#">
            <PrimaryIcon>
            <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor">
              <path d="M7.47248 3.27674C7.65914 3.49674 7.88914 3.60675 8.16248 3.60675C8.43581 3.60675 8.66248 3.49674 8.84248 3.27674C9.08248 2.97008 9.31914 2.68675 9.55248 2.42675C10.3191 3.24675 10.9558 4.16675 11.4625 5.18675C11.9958 6.32008 12.2725 7.21341 12.2925 7.86675C12.2525 9.44008 11.7325 10.7434 10.7325 11.7767C9.74581 12.8367 8.51581 13.3867 7.04248 13.4267C5.54248 13.3867 4.30248 12.8367 3.32248 11.7767C2.33581 10.7434 1.82581 9.44008 1.79248 7.86675C1.80581 7.01341 2.17914 5.95675 2.91248 4.69675C3.60581 3.53008 4.51581 2.39008 5.64248 1.27674C6.28248 1.89674 6.89248 2.56341 7.47248 3.27674Z"/>
            </svg>
            </PrimaryIcon>
            <NavText>Nổi bật</NavText>
          </NavLink>

          <NavLink href="#">
            <PrimaryIcon>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <path d="M5.59998 11.673C5.59998 11.4197 5.51664 11.213 5.34998 11.053C5.18998 10.8864 4.98331 10.803 4.72998 10.803H2.09998C1.84664 10.803 1.63664 10.7197 1.46998 10.553C1.30998 10.393 1.22998 10.183 1.22998 9.92304V2.05304C1.22998 1.79971 1.30998 1.58971 1.46998 1.42304C1.63664 1.25638 1.84664 1.17304 2.09998 1.17304H12.6C12.8533 1.17304 13.0633 1.25638 13.23 1.42304C13.3966 1.58971 13.48 1.79971 13.48 2.05304V9.92304C13.48 10.183 13.3966 10.393 13.23 10.553C13.0633 10.7197 12.8533 10.803 12.6 10.803H8.79998C8.61998 10.803 8.44664 10.8564 8.27998 10.963L5.59998 12.993V11.673Z"/>
            </svg>
            </PrimaryIcon>
            <NavText>Gần đây</NavText>
          </NavLink>

          <NavLink href="#">
            <NavText>Xu hướng</NavText>
          </NavLink>

          <NavLink href="#">
            <NavText>Loại</NavText>
          </NavLink>

          <NavLink href="#">
            <NavText>Bộ sưu tập</NavText>
          </NavLink>

          <NavLink href="#">
            <NavText>Nghiệp dư</NavText>
          </NavLink>

          <NavLink href="#">
            <NavText>Không kiểm duyệt</NavText>
          </NavLink>
        </Nav>

        {/* Right section */}
        <RightSection>
          {/* Search */}
          <SearchContainer>
            <SearchInputWrapper className="group">
              <SearchIcon />
              <SearchInput
                type="text"
                placeholder="Tìm kiếm bất kỳ JAV nào.."
              />
            </SearchInputWrapper>
          </SearchContainer>

          {/* Language flag */}
          <LanguageFlag>
            <FlagImage 
              src="https://api.builder.io/api/v1/image/assets/TEMP/7dd8e9c3b1edf68f2807babb334a24426e3dcd37?width=51" 
              alt="Vietnamese flag" 
            />
          </LanguageFlag>

          {/* Profile */}
          <ProfileImage>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" fill="#F5EEE5"/>
              <path d="M20.16 23.008C20.16 24.288 21.664 24.672 22.432 24.864C24.864 25.504 29.728 26.752 29.728 26.752C30.752 27.104 31.552 27.872 32 28.864V32H0V28.864C0.416 27.872 1.248 27.104 2.272 26.752C2.272 26.752 7.136 25.504 9.568 24.864C10.336 24.672 11.84 24.288 11.84 23.008V19.52H20.16V23.008Z" fill="#E6C19C"/>
              <path d="M16.064 3.52H16.128C17.184 3.52 18.752 3.584 19.776 4.16C20.832 4.768 22.112 5.952 22.496 8.032C23.264 12.416 21.824 19.36 20.48 21.6C19.2 23.744 17.344 24.544 16.16 24.608H16H15.968C14.784 24.544 12.928 23.744 11.648 21.6C10.304 19.36 8.86398 12.416 9.63198 8.032C10.016 5.952 11.296 4.768 12.352 4.16C13.376 3.584 14.944 3.52 16 3.52H16.064Z" fill="#D4B08C"/>
              <path d="M15.872 5.12C21.984 5.12 22.496 9.536 22.528 9.952C22.88 13.76 21.568 18.944 20.352 20.736C19.072 22.624 17.216 23.328 16.032 23.392H15.872C14.656 23.296 12.8 22.592 11.52 20.704C10.304 18.912 8.99201 13.728 9.34401 9.888C9.37601 9.504 9.76001 5.12 15.872 5.12Z" fill="#F2CEA5"/>
            </svg>
          </ProfileImage>
        </RightSection>
      </HeaderContainer>
    </StyledHeader>
  );
};

export { Header };
export default Header;
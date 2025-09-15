import type { JSX } from "react";
import styled from "styled-components";
import {
    FaWandMagicSparkles,
    FaFire,
    FaMessage,
    FaChartSimple,
    FaLayerGroup,
    FaFolderOpen,
    FaMagnifyingGlass,
    FaBars,
} from "react-icons/fa6";

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #000c;
    backdrop-filter: blur(10px);
`;

const Wrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.a`
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
    display: flex;
    align-items: center;

    strong {
        color: #fff;
    }
    span {
        color: #d96cf5;
    }
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        color: #eee;
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        white-space: nowrap;

        &:hover {
        color: #d96cf5;
        }
    }
`;

const SearchBox = styled.form`
    background: #232323;
    border-radius: 8px;
    padding: 0 0.5rem;
    height: 32px;
    display: flex;
    align-items: center;
    gap: 0.4rem;

    input {
        background: transparent;
        border: none;
        outline: none;
        color: #eee;
        font-size: 13px;
        width: 160px;

        &::placeholder {
        color: #757575;
        }
    }

    svg {
        color: #aaa;
    }
`;

const RightControls = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Flag = styled.div`
    width: 26px;
    height: 26px;
    background: url("./flag-flag-vi.png") center/cover no-repeat;
    border-radius: 50%;
`;

const UserMenu = styled.div`
    width: 32px;
    height: 32px;
    background: gray;
    border-radius: 50%;
`;

export const Header = (): JSX.Element => {
    return (
    <HeaderContainer>
        <Wrapper>
        {/* Logo */}
        <Logo href="/">
            <strong>JAV</strong>
            <span>XX</span>
        </Logo>

        {/* Menu */}
        <Nav>
            <a href="/vi/new">
                <FaWandMagicSparkles /> Mới
            </a>
            <a href="/vi/hot">
                <FaFire /> Nổi bật
            </a>
            <a href="/vi/recent">
                <FaMessage /> Gần đây
            </a>
            <a href="/"> <FaChartSimple /> Xu hướng </a>
            <a href="/"> <FaLayerGroup /> Loại </a>
            <a href="/"> <FaFolderOpen /> Bộ sưu tập </a>
            <a href="/"> <FaFolderOpen /> Nghiệp dư </a>
            <a href="/"> <FaFolderOpen /> Không kiểm duyệt </a>
        </Nav>

        {/* Right controls */}
        <RightControls>
            <SearchBox action="/vi/search">
                <FaMagnifyingGlass />
                <input type="text" name="keyword" placeholder="Tìm kiếm bất kỳ JAV nào.." />
            </SearchBox>

            <Flag />
            <UserMenu />
            <FaBars style={{ color: "#fff", cursor: "pointer" }} />
            </RightControls>
        </Wrapper>
    </HeaderContainer>
    );
};

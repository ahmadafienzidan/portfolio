import { useState } from "react";
import { Navbar as HeroUINavbar, Button, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, DropdownSection } from "@heroui/react";
import { ChevronDown } from "lucide-react";

import Logo from "./Logo";
function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <HeroUINavbar>
        <NavbarBrand>
          <Logo />
          <h1 className="font-bold">Afien Zidan</h1>
        </NavbarBrand>
        <NavbarContent>
          <NavbarItem>Home</NavbarItem>
          <NavbarItem>Experience</NavbarItem>
          <Dropdown onOpenChange={(open) => setIsDropdownOpen(open)}>
            <NavbarItem>
              <DropdownTrigger>
                <Button disableRipple className="p-0 bg-transparent data-[hover=true]:bg-transparent flex items-center gap-1 transition" radius="sm" variant="light">
                  Projects
                  <ChevronDown size={16} className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu aria-label="Projects">
              <DropdownItem>Software Engineering</DropdownItem>
              <DropdownItem>Electrical Engineering</DropdownItem>
              <DropdownSection>
                <DropdownItem key="all" description="Get to Know My Projects">
                  All Projects
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
          <NavbarItem>Skills</NavbarItem>
          <NavbarItem>Achievement</NavbarItem>
        </NavbarContent>
      </HeroUINavbar>
    </>
  );
}

export default Navbar;

import { useState } from "react";
import { Navbar as HeroUINavbar, Button, NavbarBrand, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, DropdownSection } from "@heroui/react";
import { ChevronDown } from "lucide-react";
import { useSectionScroll } from "../hooks/useSectionScroll";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const scrollTo = useSectionScroll(80);
  return (
    <>
      <HeroUINavbar className="backdrop-blur-lg shadow-md z-100">
        <NavbarBrand>
          <h1 className="font-bold">Afien Zidan</h1>
        </NavbarBrand>
        <NavbarContent>
          <NavbarItem>
            <a onClick={scrollTo("home")} className="cursor-pointer" href="#">
              Home
            </a>
          </NavbarItem>

          <NavbarItem>
            <a onClick={scrollTo("experience")} className="cursor-pointer" href="#">
              Experience
            </a>
          </NavbarItem>
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
          <NavbarItem>
            <a onClick={scrollTo("skills")} className="cursor-pointer" href="#">
              Skills
            </a>
          </NavbarItem>
          <NavbarItem>
            <a onClick={scrollTo("achievement")} className="cursor-pointer" href="#">
              Achievement
            </a>
          </NavbarItem>
        </NavbarContent>
      </HeroUINavbar>
    </>
  );
}

export default Navbar;

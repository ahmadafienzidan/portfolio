import { GithubFilled, GitlabFilled, LinkedinFilled, HeartFilled, LinkOutlined, EnvironmentFilled, PhoneFilled, MailFilled, InstagramFilled } from "@ant-design/icons";
import { Divider } from "@heroui/react";

const Footer = () => {
  return (
    <>
      <footer className="relative  max-w-7xl mx-auto px-8 py-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <span className=" text-2xl font-bold">Let's Work Together</span>
            </div>
            <p className=" text-lg leading-relaxed mb-6 max-w-md">I'm a passionate developer who loves turning ideas into beautifully crafted digital solutions. Ready to collaborate and bring your next project to life</p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/ahmad-afien-zidan/" target="_blank" className="bg-bluesoft w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <LinkedinFilled size={20} />
              </a>
              <a href="https://github.com/ahmadafienzidan" target="_blank" className="bg-pinksoft w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <GithubFilled size={20} />
              </a>
              <a href="https://gitlab.com/ahmadafienzidan" target="_blank" className="bg-limelight w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <GitlabFilled size={20} />
              </a>
              <a href="https://instagram.com/afienzidan" target="_blank" className="bg-purplesoft w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <InstagramFilled size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Experience", "Project", "Skills", "Achievement"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="transition-colors duration-300 flex items-center group">
                    <span>{item}</span>
                    <LinkOutlined size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className=" font-semibold text-lg mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center ">
                <EnvironmentFilled size={18} className="mr-3 flex-shrink-0" />
                <span>Surabaya, Indonesia</span>
              </div>
              <div className="flex items-center ">
                <PhoneFilled size={18} className="mr-3 flex-shrink-0" />
                <span>+62 852 3118 5013</span>
              </div>
              <div className="flex items-center ">
                <MailFilled size={18} className="mr-3 flex-shrink-0" />
                <span>afienzidan227@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <Divider />
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
          <div className="flex items-center  mb-4 md:mb-0">
            <span>Made with</span>
            <HeartFilled style={{ color: "#f87171", margin: "0 8px" }} />
            <span>using React & Tailwind CSS</span>
          </div>
          <div className="text-sm">© 2025 Portfolio. All rights reserved</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#1c1e21] text-white text-center py-[70px]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        
        <div className="text-left mb-4 md:mb-0 md:ml-20"> 
          <Image
            src="/assets/footer-logo.svg"
            alt="EquiBloc Logo"
            width={150}
            height={50}
            className="mb-2"
          />
          <p>EquiBloc Copyright © 2024</p>
          <p>EquiBloc - All rights Reserved.</p>
        </div>

        {/* Contact Information */}
        <div className="text-left mb-4 md:mb-0">
          <h3 className="font-bold">Reach us</h3>
          <div className="flex items-center">
            <Image
              src="/assets/call.svg"
              alt="Call Icon"
              width={20}
              height={20}
              className="mr-2"
            />
            <span>+234 XXX XXX XXX</span>
          </div>
          <div className="flex items-center">
            <Image
              src="/assets/email.svg"
              alt="Email Icon"
              width={20}
              height={20}
              className="mr-2"
            />
            <span>mail@gmail.com</span>
          </div>
        </div>

        {/* Legal Information */}
        <div className="text-left mb-4 md:mb-0">
          <h3 className="font-bold">Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Return Policy</li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="text-left md:mr-[90px]">
          <h3 className="font-bold">Follow Us</h3>
          <div className="flex space-x-2">
            <Image
              src="/assets/LinkedIn.svg"
              alt="LinkedIn Icon"
              width={24}
              height={24}
            />
            <Image
              src="/assets/TwitterX.svg"
              alt="Twitter Icon"
              width={24}
              height={24}
            />
            <Image
              src="/assets/Instagram.svg"
              alt="Instagram Icon"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

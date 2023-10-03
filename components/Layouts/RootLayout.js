import Navbar from "@/components/shared/Navbar";
import Link from "next/link";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>

      {children}
    </div>
  );
};

export default RootLayout;

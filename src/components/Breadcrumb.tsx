import { Link } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";

type breadcrumbItem = {
   label: string
   link: string
}

type BreadcrumbsProps = {
   items: breadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbsProps) => {
   return (
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
         {items.map((item, index) => (
            <div key={index} className="flex items-center">
               {index < items.length - 1 ? (
                  <>
                     <Link
                        to={item.link}
                        className="hover:text-indigo-600 transition-colors duration-200"
                     >
                        {item.label}
                     </Link>
                     <span className="ml-2"><IoIosArrowForward /></span>
                  </>
               ) : (
                  <span className="text-gray-900 font-medium">{item.label}</span>
               )}
            </div>
         ))}
      </nav>
   )
}

export default Breadcrumb
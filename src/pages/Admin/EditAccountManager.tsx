import Breadcrumb from "@/components/Breadcrumb"
import TitlePage from "@/components/TitlePage"


const EditAccountManager = () => {


   const breadcrumbItems = [
      { label: 'Dashboard', link: '/dashboard/admin' },
      { label: 'Managers', link: '/dashboard/admin/managers' },
      { label: 'Edit', link: '/dashboard/admin/managers' },
   ];
   return (
      <div>
         <TitlePage title='Edit Manager' />
         <div className="container mx-auto p-6 max-w-6xl">
            <Breadcrumb items={breadcrumbItems} />

         </div>
      </div>
   )
}

export default EditAccountManager
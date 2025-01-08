
import { ReactNode } from "react";
import AdminDashboadr from "../pages/admin/AdminDashboadr";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { NavLink } from "react-router-dom";



type TRoute = {

  path: string,
  element: ReactNode;

};
type TsidebarItem = {

  key: string;
  label: ReactNode;
  children?: TsidebarItem[];

};

const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboaed',
        element: <AdminDashboadr />,

    },
    {
        name: 'User Management',
        Children: [
            
            {
                name: 'Create Admin',
                path: 'create-admin',
                element: <CreateAdmin />,
        
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: <CreateFaculty />,
        
            },
            {
                name: 'Create Student',
                path: 'create-student',
                element: <CreateStudent />,
        
            },
        ],
       
    },

];



 export const adminSidebarIteam = adminPaths.reduce((acc: TsidebarItem[], item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: <NavLink to={`/admin/${item.path}`}>{ item.name}</NavLink>,
    });
  }

  if (item.Children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.Children.map((child) => ({
        key: item.name,
        label: <NavLink to={`/admin/${child.path}`}>{ child.name}</NavLink>,
      })),
    });
  }

  return acc;
}, []);








// PROGRAMATICAL WAY
export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.Children) {
      item.Children.forEach((child) => {
        acc.push({
          path: child.path,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);






// export const adminPaths = [



//     {

//         path: 'dashboaed',
//         element: <AdminDashboadr />,
//     },
//     {

//         path: '/create-student',
//         element: <CreateStudent />,
//     },
//     {

//         path: '/create-admin',
//         element: <CreateAdmin />,
//     },
//     {

//         path: '/create-faculty',
//         element: <CreateFaculty />,
//     },


// ];


 
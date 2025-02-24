import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import AdminDashboadr from "../pages/admin/AdminDashboadr";
import Courses from "../pages/admin/courseManagement/Course";
import CreateCourse from "../pages/admin/courseManagement/CreateCourse";
import OfferCourse from "../pages/admin/courseManagement/OfferCourse";
import OfferedCourses from "../pages/admin/courseManagement/OfferedCourses";
import RegisteredSemesters from "../pages/admin/courseManagement/RegisteredSemesters";
import SemesterRegistration from "../pages/admin/courseManagement/SemesterRegistration";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import StudentData from "../pages/admin/userManagement/StudentData";
import StudentDetails from "../pages/admin/userManagement/StudentDetails";





// type TRoute = {

//   path: string,
//   element: ReactNode;

// };
// type TsidebarItem = {

//   key: string;
//   label: ReactNode;
//   children?: TsidebarItem[];

// };



export const adminPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboadr />,

    },
    {
        name: 'Academic Management',
        Children: [
        
            {
                name: 'Create A. Semester',
                path: 'create-academic-semester',
                element: <CreateAcademicSemester />,
              },
              {
                name: 'Academic Semester',
                path: 'academic-semester',
                element: <AcademicSemester />,
              },
              {
                name: 'Create A. Faculty',
                path: 'create-academic-faculty',
                element: <CreateAcademicFaculty />,
              },
              {
                name: 'Academic Faculty',
                path: 'academic-faculty',
                element: <AcademicFaculty />,
              },
              {
                name: 'Create A. Department',
                path: 'create-academic-department',
                element: <CreateAcademicDepartment />,
              },
              {
                name: 'Academic Department',
                path: 'academic-department',
                element: <AcademicDepartment />,
              },
           
  
        ],
  },
    {
        name: 'User Management',
        Children: [
        
          {
            name: 'Create Student',
            path: 'create-student',
            element: <CreateStudent />,
    
          },
          {
            name: 'Students',
            path: 'student-data',
            element: <StudentData />,
    
          },
          {
            path: 'student-data/:studentId',
            element: <StudentDetails />,
          },
              
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
              
           
  
        ],
  },
    
    {
        name: 'Coursee Management',
        Children: [
          {
            name: 'Semester Registration',
            path: 'semester-registration',
            element: <SemesterRegistration />,
          },
          {
            name: 'Registered Semesters',
            path: 'registered-semesters',
            element: <RegisteredSemesters />,
          },
          {
            name: 'Create Course',
            path: 'create-course',
            element: <CreateCourse />,
          },
          {
            name: 'Courses',
            path: 'courses',
            element: <Courses />,
          },
          {
            name: 'Offer Course',
            path: 'offer-course',
            element: <OfferCourse />,
          },
          {
            name: 'Offered Courses',
            path: 'offered-courses',
            element: <OfferedCourses />,
          },
            
           
  
        ],
  },
  
    

];






//  export const adminSidebarIteam = adminPaths.reduce((acc: TsidebarItem[], item) => {
//   if (item.path && item.name) {
//     acc.push({
//       key: item.name,
//       label: <NavLink to={`/admin/${item.path}`}>{ item.name}</NavLink>,
//     });
//   }

//   if (item.Children) {
//     acc.push({
//       key: item.name,
//       label: item.name,
//       children: item.Children.map((child) => ({
//         key: item.name,
//         label: <NavLink to={`/admin/${child.path}`}>{ child.name}</NavLink>,
//       })),
//     });
//   }

//   return acc;
// }, []);


// PROGRAMATICAL WAY
// export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
//     if (item.path && item.element) {
//       acc.push({
//         path: item.path,
//         element: item.element,
//       });
//     }
//     if (item.Children) {
//       item.Children.forEach((child) => {
//         acc.push({
//           path: child.path,
//           element: child.element,
//         });
//       });
//     }
//     return acc;
//   }, []);






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


 
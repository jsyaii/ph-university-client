const adminPaths2 = [
  {
    name: "Dashboard",
    path: "/admin/dashboaed",
    element: "ADMIN_DASHBOARD",
  },
  {
    name: "User Management",
    Children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CREATE_ADMIN",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "CREATE_FACULTY",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "CREATE_STUDENT",
      },
    ],
  },
];
const newArray = adminPaths2.reduce((acc, item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: "NAVLINK",
    });
  }

  if (item.Children) {
    acc.push({
      key: item.name,
      label: item.name,
      Children: item.Children.map((child) => ({
        key: item.name,
        label: "NAVLINK",
      })),
    });
  }

  return acc;
}, []);

// const newArray = adminPaths2.reduce((acc, item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.Children) {
//     item.Children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }
//   return acc;
// }, []);
console.log(JSON.stringify(newArray));

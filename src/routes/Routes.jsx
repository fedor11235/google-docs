import { Routes, Route } from "react-router-dom";
// import Home from "../../pages/Home";
// import Login from "../../pages/Login";
// import Registration from "../../pages/Registration";
// import Profile from "../../components/Profile";
import NotFound from "../components/NotFoundPage";
import Login from "../components/Login";
import Main from "../components/Main";
import Register from "../components/Registration";
// import useAuth from "../../hooks/useAuth";
// import PrivateRoute from "../components/PrivateRoute";
// import GuestRoute from "../components/GuestRoute";
// import {
//   CircularProgress,
//   makeStyles,
//   Container,
//   Grid,
// } from "@material-ui/core";

function AppRoutes(){
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/main" element={<Main />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    ) 
}

  
export default AppRoutes;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: theme.spacing(3),
//   },
// }));

// function AppRoutes() {
//   const classes = useStyles();
//   const auth = useAuth();

//   return auth.isLoaded ? (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route
//         path="/profile"
//         element={
//           <PrivateRoute>
//             <Profile />
//           </PrivateRoute>
//         }
//       />
//       <Route
//         path="/login"
//         element={
//           <GuestRoute>
//             <Login />
//           </GuestRoute>
//         }
//       />
//       <Route
//         path="/registration"
//         element={
//           <GuestRoute>
//             <Registration />
//           </GuestRoute>
//         }
//       />

//       <Route path="/not-found-404" element={<NotFound />} />
//       <Route path="*" element={<Navigate to="/not-found-404" />} />
//     </Routes>
//   ) : (
//     <Container maxWidth="md" className={classes.root}>
//       <Grid container spacing={3} alignItems="center" justifyContent="center">
//         <Grid item>
//           <CircularProgress color="inherit" />
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default AppRoutes;
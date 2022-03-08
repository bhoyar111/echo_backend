import express from "express";
const apiRouter = express.Router();

import authToken from '../middleware/authToken'; // Auth token Middleware
// Routes for Login
import loginControl from '../controllers/auth/LoginController';
apiRouter.route('/login').post(loginControl.getLogin);
apiRouter.route('/logout').post(loginControl.getLogout);
// Routes for User
import userControl from '../controllers/UserController';
apiRouter.route('/users').get(authToken, userControl.getUsers);
apiRouter.route('/user-add').post(authToken, userControl.addUser);
apiRouter.route('/user-get/:id').get(authToken, userControl.getUser);
apiRouter.route('/user-update/:id').put(authToken, userControl.updateUser);
apiRouter.route('/user-delete/:id').delete(authToken, userControl.deleteUser);
// Routes for Doctor
import doctorControl from '../controllers/DoctorController';
apiRouter.route('/doctors').get(authToken, doctorControl.getDoctors);
apiRouter.route('/doctor-add').post(authToken, doctorControl.addDoctor);
apiRouter.route('/doctor-get/:id').get(authToken, doctorControl.getDoctor);
apiRouter.route('/doctor-update/:id').put(authToken, doctorControl.updateDoctor);
apiRouter.route('/doctor-delete/:id').delete(authToken, doctorControl.deleteDoctor);

export default apiRouter;
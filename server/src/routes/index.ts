import * as User from "../controllers/User";
import * as Auth from "../controllers/Auth";

import express, { Router } from "express";
const router: Router = express.Router();

// content routes
router.get('/show-all', User.showAll);
router.get("/detail-user", User.detailUser);
router.delete("/delete-user", User.deleteUser);

// authenticate routes
router.post('/auth/register', Auth.register);
router.post('/auth/login', Auth.login);


export default router;
import ticketController from "../controllers/ticketController.js";
import express  from "express";


const router = express.Router();

router.get("/tickets", ticketController.getAllTicket)
router.get("/tickets/:id", ticketController.getTicketById)
router.post("/ticket", ticketController.addTicket)
router.delete("/ticket/:id", ticketController.deleteTicket)



export default router
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const projects = [
  { id: 1, title: 'E-Bus Management', eyebrow: 'Smarter public transport', desc: 'A streamlined bus-management website designed to make transport information and operations easier to access and understand.', tags: ['HTML', 'CSS', 'JavaScript'], highlights: ['Clear transport information', 'Responsive, easy-to-use interface'], accent: 'from-amber-300 via-orange-400 to-rose-500', liveUrl: 'https://imcharan17.github.io/E-Bus-managment/' },
  { id: 2, title: 'CropCare AI', eyebrow: 'Smart agriculture platform', desc: 'A crop-management application that helps farmers keep field records organised, monitor crop health, and make better decisions from one simple dashboard.', tags: ['Spring Boot', 'Java', 'MySQL', 'JDBC', 'REST API'], highlights: ['Centralised crop and field records', 'Secure database-driven workflows'], accent: 'from-emerald-400 via-lime-300 to-cyan-400', liveUrl: 'https://crop-care-frontend-568o.onrender.com/' },
  { id: 3, title: 'Travel Planner', eyebrow: 'Plan every journey with clarity', desc: 'A responsive trip-planning website that lets users explore destinations, organise itineraries, and view travel details in a clean, easy-to-use experience.', tags: ['HTML', 'CSS', 'JavaScript', 'JSON'], highlights: ['Interactive destination discovery', 'Structured itinerary and travel data'], accent: 'from-sky-400 via-cyan-300 to-indigo-500', liveUrl: 'https://imcharan17.github.io/Travel_Planer/' },
  { id: 4, title: 'Invoice Generator', eyebrow: 'Professional invoices in moments', desc: 'A fast, polished invoice tool that helps users create itemised invoices, calculate totals automatically, and present billing details professionally.', tags: ['React.js', 'HTML', 'CSS', 'JavaScript'], highlights: ['Automatic totals and line items', 'Clear, client-ready invoice layout'], accent: 'from-violet-500 via-fuchsia-400 to-rose-400', liveUrl: 'https://invoice-generator-react-lime.vercel.app/' },
  { id: 5, title: 'AI Chatbot', eyebrow: 'Conversational assistance', desc: 'An interactive AI chatbot experience that gives users a simple, engaging way to ask questions and receive helpful responses.', tags: ['HTML', 'CSS', 'JavaScript', 'AI'], highlights: ['Natural conversational interface', 'Fast, accessible user experience'], accent: 'from-fuchsia-500 via-violet-500 to-cyan-400', liveUrl: 'https://imcharan17.github.io/ai-chatbot/' }
];
const experience = [
  { id:2, role:'Project Lead', company:'College Project', period:'2024', bullets:['Led 4 devs','Deployed app to cloud','Built realtime features'] }
];

app.get('/api/projects', (req,res)=> res.json(projects));
app.get('/api/experience', (req,res)=> res.json(experience));
app.post('/api/contact', async (req,res)=>{
  const { name, email, subject, message } = req.body || {};
  if(!name || !email || !message) return res.status(400).json({ success:false, error:'name,email,message required' });
  try{
    const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS } });
    await transporter.sendMail({
      from: `Portfolio Contact <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject || "No subject"}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`
    });
    return res.json({ success:true, message:'Message sent' });
  }catch(err){
    console.error('mail error', err?.message || err);
    return res.status(500).json({ success:false, error:'Failed to send message' });
  }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));
app.get('*', (req,res)=> res.sendFile(path.join(__dirname,'..','frontend','dist','index.html')));
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Backend running on ${PORT}`));

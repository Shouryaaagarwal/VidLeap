# VidLeap 🎥  
A secure, scalable, and AI-powered video-sharing platform  

🌐 [Live Demo](https://vidleap.netlify.app/)

## 📌 Overview

**VidLeap** is a next-generation video-sharing platform built with performance, scalability, and accessibility in mind. Whether you're sharing internal team demos, screen recordings, or public videos, VidLeap enables a smooth and secure content distribution experience.  

The platform integrates **real-time streaming**, **screen recording**, **AI-powered transcripts**, and **role-based access controls**, making it ideal for education, remote work, and content collaboration use cases.

---

## 🚀 Features

- 🔴 **Real-time Video Streaming**  
- 🖥️ **One-Click Screen Recording**  
- 👥 **Role-Based Access Control** (Admins, Viewers, Creators, etc.)  
- 🤖 **AI-Powered Transcripts & Captions**  
- 🕒 **Timestamped Highlights** for quick navigation  
- 🔗 **Sharable Video Links** for collaboration  
- ☁️ **Cloud Storage + Serverless Architecture**  
- 📱 **Responsive UI** for seamless experience on all devices  

---

## 🛠️ Tech Stack

- **Frontend**: Next.js, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **Video Infrastructure**: Bunny.net (CDN & Stream)  
- **AI Services**: Automatic Speech Recognition (ASR) for transcripts  
- **Deployment**: Netlify (Frontend), Vercel/Serverless (Backend APIs)

---

## 🧠 How It Works

1. **Upload or Record Video**: Users can either upload a video or record their screen directly from the browser.
2. **Stream via Bunny.net**: Videos are securely streamed with adaptive quality via Bunny.net’s CDN.
3. **Transcription & Highlighting**: AI auto-generates a transcript and timestamped highlights.
4. **Access Control**: Only authorized users (based on roles) can view, edit, or share content.
5. **Sharable Link Generation**: A unique link is created for easy content distribution.

---

## 🔐 Security & Scalability

- Authenticated routes for video upload and playback  
- Access policies enforce role-level permissions  
- Serverless functions scale with user load  
- Secure video delivery with tokenized URLs (optional)


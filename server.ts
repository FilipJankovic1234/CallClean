import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;
    
    console.log("New Contact Request:", { name, email, message });

    // Here you would normally integrate an email service like Resend, SendGrid, etc.
    // For now, we simulate success.
    
    try {
      // Logic for sending email could go here
      // const { data, error } = await resend.emails.send({...})

      res.status(200).json({ 
        success: true, 
        message: "Poruka je uspešno poslata! Naš tim će vas ubrzo kontaktirati." 
      });
    } catch (error) {
      console.error("Error handling contact form:", error);
      res.status(500).json({ 
        success: false, 
        message: "Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovo." 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

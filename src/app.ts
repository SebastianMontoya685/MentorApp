// app.ts is where we configure and start the HTTP server
import express from 'express';
import mentorRoutes from './routes/mentorRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Global middleware that applies to ALL routes
app.use(express.json());        // Parse JSON bodies
// app.use(cors());                // Enable CORS
// app.use(helmet());              // Security headers
// app.use(morgan('combined'));    // Request logging

// Connect all your route modules
app.use('/mentors', mentorRoutes);

// Global error handler
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

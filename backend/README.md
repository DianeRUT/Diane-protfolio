# Portfolio Backend Server

This is the backend server for Diane's portfolio contact form.

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=5000
   FRONTEND_URL=http://localhost:3000
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

3. **Gmail App Password Setup:**
   - Go to your Google Account settings
   - Enable 2-factor authentication
   - Generate an App Password for "Mail"
   - Use this App Password in the EMAIL_PASS variable

4. **Run the server:**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

- `GET /` - Test endpoint
- `POST /api/contact` - Contact form submission

### Contact Form Request Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I would like to discuss a project..."
}
```

## Features

- Contact form validation
- Email notifications to portfolio owner
- Auto-reply emails to contact form users
- CORS enabled for frontend integration
- Error handling and logging 
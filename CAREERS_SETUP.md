# Careers Page - Complete Implementation

## ✅ Features Implemented

### **Job Opening Dropdown**
- Interactive dropdown with 5 predefined job positions:
  - Frontend Developer (Engineering, Remote/Hyderabad)
  - UI/UX Designer (Design, Remote/Mumbai) 
  - Brand Strategist (Strategy, Bangalore)
  - Digital Marketing Specialist (Marketing, Remote)
  - Content Writer (Content, Remote/Delhi)

### **Styled with ContactSection Design**
- Borrowed styling from `ContactSection.tsx`
- Dark hero section with gradient text
- Rounded form inputs (`rounded-xl`)
- Gray background (`bg-gray-50`)
- Modern card design with shadows

### **Form Features**
- Job position selection (required)
- Personal info: Name, Email, Phone, Gender
- Address: Full address, Country, State, City, Pincode
- Motivation text area
- Resume upload (PDF/DOCX, max 10MB)
- Form validation with error messages
- Success/error status notifications

### **Backend Integration**
- Added `jobOpening` field to form data
- Email includes selected job position in subject
- File upload with multer
- Email sent to careers@dolfynbrands.com

## Installation Instructions

### Backend Setup

1. Navigate to backend directory using Command Prompt (not PowerShell):

   ```cmd
   cd backend
   npm install
   ```

2. Create `.env` file in backend directory:

   ```env
   GMAIL_USER=your-email@gmail.com
   GMAIL_PASS=your-app-password
   ```

3. Start backend server:

   ```cmd
   npm run dev
   ```

### Frontend Setup

1. Navigate to root directory:

   ```cmd
   cd ../
   npm install
   ```

2. Start development server:

   ```cmd
   npm run dev
   ```

### PowerShell Issues

If you encounter PowerShell execution policy errors:
- Use Command Prompt (cmd) instead of PowerShell
- Or run: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

## Route Access

- **URL**: `/careers`
- **Navigation**: Company > Careers (in header menu)

## Email Configuration

Applications are sent to `careers@dolfynbrands.com` with:
- Subject: "New Career Application: [Job Position] - [Applicant Name]"
- Complete applicant information
- Resume attachment
- Job position details

## UI Components

### Job Dropdown
- Custom dropdown with job details
- Shows position, department, location, type
- Expandable job description on selection
- Smooth animations with Framer Motion

### Form Styling
- ContactSection-inspired design
- Consistent rounded corners (`rounded-xl`)
- Proper focus states and validation
- Responsive grid layout

## Technical Details

### Files Modified
1. `src/components/Careers.tsx` - Main careers page
2. `src/router/routes.tsx` - Added careers route
3. `backend/server.js` - Added careers endpoint
4. `backend/package.json` - Added multer dependency

### New Dependencies
- `multer` - File upload handling
- Added to backend package.json

The careers page is now fully functional with job opening selection and ContactSection styling!

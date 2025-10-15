# Jarurat Care – Patient Records Dashboard

A modern, responsive React application for managing patient records efficiently. Built to demonstrate **React**, **Redux Toolkit** state management, API integration, and local storage persistence.

---

## 🚀 Features

### Core Features
- **Landing Page / Home**  
  - Hero section with call-to-action button  
  - Features overview section  
  - Fully responsive and mobile-friendly

- **Patients Dashboard**  
  - Fetch patient data from a public API (JSONPlaceholder)  
  - Display patients in a responsive grid/card layout  
  - Search patients by name in real-time  
  - View detailed patient information in a modal  
  - Add new patients locally (stored in **localStorage**)  
  - Remove patients dynamically  

- **State Management**  
  - Redux Toolkit for global state management  
  - `patients` slice handles list, filtered results, selected patient, and search query  
  - Local storage persistence ensures data is not lost on refresh  

- **Responsive Design**  
  - Fully responsive layout for desktop, tablet, and mobile  
  - Mobile sidebar navigation  
  - Smooth transitions and hover effects

- **User Experience**  
  - Loading and error states for API fetch  
  - Smooth modal transitions  
  - Interactive hover effects on buttons and cards

---

## 🛠 Technologies Used
- **Frontend**: React.js (Functional Components + Hooks)  
- **State Management**: Redux Toolkit  
- **Styling**: Tailwind CSS  
- **Icons**: React Icons  
- **API**: JSONPlaceholder for mock patient data  
- **Local Storage**: Persistent patient data  

---

## 📂 Project Structure
 ```
 src/
 │
 ├─ components/
 │ ├─ Header.jsx
 │ ├─ PatientCard.jsx
 │ ├─ PatientModal.jsx
 │ ├─ AddPatientForm.jsx
 │
 ├─ features/
 │ └─ patients/
 │ └─ patientSlice.js
 │
 ├─ pages/
 │ ├─ HomePage.jsx
 │ └─ Patients.jsx
 │
 ├─ App.jsx
 └─ index.js

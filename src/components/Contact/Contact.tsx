import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

export function Contact() {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const validateForm = () => {
    let valid = true;
    let errors = { name: "", email: "", phoneNumber: "", message: "" };

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Regular expression for phone number validation (simple version)
    const phoneRegex = /^\d{10}$/;

    if (!name) {
      errors.name = "Name is required";
      valid = false;
    }

    if (!email && !phoneNumber) {
      errors.email = "Either email or phone number is required";
      errors.phoneNumber = "Either email or phone number is required";
      valid = false;
    } else {
      if (email && !emailRegex.test(email)) {
        errors.email = "Invalid email address";
        valid = false;
      }
      if (phoneNumber && !phoneRegex.test(phoneNumber)) {
        errors.phoneNumber = "Invalid phone number";
        valid = false;
      }
    }

    if (!message) {
      errors.message = "Message is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Handle form submission
      console.log("Form submitted:", { name, email, phoneNumber, message });
      handleClose();
    }
  };

  const theme = createTheme({
    typography: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className='contact-container'>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin='dense'
              label='Name'
              type='text'
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              margin='dense'
              label='Email'
              type='email'
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              margin='dense'
              label='Phone Number'
              type='tel'
              fullWidth
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
            />
            <TextField
              margin='dense'
              label='Message'
              type='text'
              fullWidth
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={!!errors.message}
              helperText={errors.message}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={handleSubmit} color='primary'>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}

export default Contact;

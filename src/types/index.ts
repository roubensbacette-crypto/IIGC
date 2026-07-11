// Type definitions for the application

export interface TimeZoneData {
  timezone: string;
  label: string;
  time: string;
  date: string;
}

export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  organizationType: string;
  inquiryType: string;
  service: string;
  preferredContact: string;
  timeline: string;
  message: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
}

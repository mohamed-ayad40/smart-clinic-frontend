import { Doctor, Patient, AppointmentSlot } from './types';

export let mockDoctors: Doctor[] = [
  { id: 'd1', name: 'Dr. Ahmed', specialization: 'Dermatologist' },
  { id: 'd2', name: 'Dr. Sara', specialization: 'General Practice' },
  { id: 'd3', name: 'Dr. Kareem', specialization: 'Internal Medicine' },
];

export let mockPatients: Patient[] = [
  { id: 'p1', name: 'Ali Mahmoud', history: ['Eczema treated in 2023'] },
  { id: 'p2', name: 'Mona Zaki', history: ['No major history'] },
];

// Let's create some fake slots
export let mockSlots: AppointmentSlot[] = [
  { id: 's1', doctorId: 'd1', patientId: null, date: '2024-05-20T10:00:00Z', status: 'available' },
  { id: 's2', doctorId: 'd1', patientId: null, date: '2024-05-20T10:30:00Z', status: 'available' },
  { id: 's3', doctorId: 'd2', patientId: null, date: '2024-05-21T09:00:00Z', status: 'available' }];
// أنواع المستخدمين
export type UserRole = 'patient' | 'doctor';

// بيانات الدكتور
export interface Doctor {
  id: string;
  name: string;
  specialization: string;
}

// بيانات المريض
export interface Patient {
  id: string;
  name: string;
  history: string[]; // مثلاً: ["Asthma", "Allergy to Penicillin"]
}

// حالة الموعد
export type SlotStatus = 'available' | 'locked' | 'done';

// المواعيد (Appointments)
export interface AppointmentSlot {
  id: string;
  doctorId: string;
  patientId: string | null; // null لو لسة available
  date: string; // ISO String (e.g., "2024-05-20T10:00:00Z")
  status: SlotStatus;
}

// نموذج التشخيص للـ CV Model
export interface CVDiagnosis {
  id: string;
  imageUrl: string;
  predictedLabel: string;
  confidenceScore: number;
  isConfirmedByDoctor: boolean;
  correctedLabel?: string;
}
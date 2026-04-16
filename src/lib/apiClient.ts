import { mockSlots, mockDoctors } from './mockDb';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const MODE = process.env.NEXT_PUBLIC_API_MODE;

export const apiClient = {
  // 1. جلب المواعيد
  getSlots: async () => {
    if (MODE === 'mock') {
      return mockSlots;
    }
    const res = await fetch(`${BASE_URL}/Doctors/GetAllSlots`); 
    return res.json();
  },

  // 2. حجز موعد
  reserveSlot: async (slotId: string, patientId: string) => {
    if (MODE === 'mock') {
      const index = mockSlots.findIndex(s => s.id === slotId);
      if (index !== -1) {
        mockSlots[index].status = 'locked';
        mockSlots[index].patientId = patientId;
      }
      return { success: true };
    }
    const res = await fetch(`${BASE_URL}/Appointments/Reserve`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slotId, patientId }),
    });
    return res.json();
  },

  // 3. جلب الدكاترة
  getDoctors: async () => {
    if (MODE === 'mock') {
      return mockDoctors;
    }
    const res = await fetch(`${BASE_URL}/Doctors/GetAllDoctors`); 
    return res.json();
  },

  // 4. جلب بيانات مريض
  getPatientHistory: async (id: string) => {
    if (MODE === 'mock') {
      return { history: ["Eczema treated in 2023"] };
    }
    const res = await fetch(`${BASE_URL}/Patient/${id}/history`);
    return res.json();
  },

  // 👇 5. الدالة الجديدة: إنهاء الكشف
  completeSlot: async (slotId: string) => {
    if (MODE === 'mock') {
      const index = mockSlots.findIndex(s => s.id === slotId);
      if (index !== -1) {
        mockSlots[index].status = 'done'; // 👈 بنحول الحالة هنا
      }
      return { success: true };
    }
    // مسار افتراضي للباك إند الحقيقي
    const res = await fetch(`${BASE_URL}/Appointments/Complete`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slotId }),
    });
    return res.json();
  }
};
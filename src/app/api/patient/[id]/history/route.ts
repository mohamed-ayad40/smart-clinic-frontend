import { NextResponse } from 'next/server';
import { mockPatients } from '@/lib/mockDb';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // بنجيب الـ ID من الـ URL ونضور على المريض في الداتا الوهمية
  const patient = mockPatients.find((p) => p.id === params.id);

  if (!patient) {
    return NextResponse.json({ error: 'Patient not found' }, { status: 404 });
  }

  return NextResponse.json(patient);
}
export type Role = 'admin' | 'teacher' | 'parent'

export type AttendanceStatus = 'present' | 'absent' | 'late' | 'leave'

export type NotificationStatus = 'sent' | 'pending' | 'failed'

export type Student = {
  id: string
  admissionNumber: string
  rollNumber: number
  fullName: string
  dateOfBirth: string
  gender: 'Male' | 'Female'
  className: string
  section: string
  parentName: string
  parentPhone: string
  parentEmail: string
  address: string
  photoUrl?: string
  status: 'active' | 'archived'
}

export type AttendanceEntry = {
  id: string
  studentId: string
  studentName: string
  date: string
  status: AttendanceStatus
  remarks: string
  teacher: string
  className: string
  section: string
  notificationSent: boolean
  notificationStatus: NotificationStatus
}

export type NotificationRecord = {
  id: string
  studentName: string
  parentName: string
  message: string
  channel: 'SMS' | 'WhatsApp' | 'Email' | 'In-App'
  status: NotificationStatus
  sentAt: string
  className: string
  section: string
}

export type ClassRecord = {
  id: string
  className: string
  section: string
  academicYear: string
  classTeacher: string
}

export type ParentRecord = {
  id: string
  fullName: string
  phone: string
  email: string
  relationship: string
  children: string[]
}

export type DashboardCard = {
  label: string
  value: string
  change: string
}

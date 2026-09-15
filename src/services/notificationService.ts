export type NotificationProvider = 'SMS' | 'WhatsApp' | 'Email' | 'In-App'

export type SendNotificationInput = {
  studentName: string
  parentName: string
  className: string
  section: string
  date: string
  phone?: string
  email?: string
  provider: NotificationProvider
}

export const notificationService = {
  async sendAbsentNotification(input: SendNotificationInput) {
    const message = `Dear Parent/Guardian, your child ${input.studentName} from Class ${input.className}-${input.section} has been marked absent today, ${input.date}.`

    if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
      return {
        success: false,
        status: 'pending',
        provider: input.provider,
        message,
        reason: 'Notification provider not configured',
      }
    }

    return {
      success: true,
      status: 'sent',
      provider: input.provider,
      message,
    }
  },
}

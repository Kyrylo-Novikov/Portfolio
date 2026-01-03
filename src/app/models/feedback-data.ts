/**
 * Definiert die Struktur der Feedback-Nachrichten.
 */
export interface FeedbackData {
  titleKey: string; // Translation-Key für den Titel
  messageKey: string; // Translation-Key für die Nachricht
  type: 'success' | 'error';
}

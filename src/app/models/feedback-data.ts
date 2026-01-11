/**
 * Defines the structure of the feedback text after submitting
 */
export interface FeedbackData {
  titleKey: string;
  messageKey: string;
  type: 'success' | 'error';
}

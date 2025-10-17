/**
 * Utility functions for managing contact form messages
 * These messages are stored locally until you set up a real email service
 */

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  timestamp: string;
  id: number;
}

/**
 * Get all stored contact messages
 */
export const getStoredMessages = (): ContactMessage[] => {
  try {
    const messages = localStorage.getItem('portfolioContacts');
    return messages ? JSON.parse(messages) : [];
  } catch (error) {
    console.error('Error reading stored messages:', error);
    return [];
  }
};

/**
 * Clear all stored messages
 */
export const clearStoredMessages = (): void => {
  localStorage.removeItem('portfolioContacts');
};

/**
 * Export messages as CSV for easy viewing
 */
export const exportMessagesAsCSV = (): string => {
  const messages = getStoredMessages();
  if (messages.length === 0) return '';

  const headers = ['Name', 'Email', 'Message', 'Date'];
  const csvContent = [
    headers.join(','),
    ...messages.map(msg => [
      `"${msg.name}"`,
      `"${msg.email}"`,
      `"${msg.message.replace(/"/g, '""')}"`,
      `"${new Date(msg.timestamp).toLocaleString()}"`
    ].join(','))
  ].join('\n');

  return csvContent;
};

/**
 * Download messages as CSV file
 */
export const downloadMessagesAsCSV = (): void => {
  const csv = exportMessagesAsCSV();
  if (!csv) {
    alert('No messages to export');
    return;
  }

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `portfolio-contacts-${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
  window.URL.revokeObjectURL(url);
};

/**
 * Console helper to view messages in browser dev tools
 */
export const logStoredMessages = (): void => {
  const messages = getStoredMessages();
  console.log('📧 Stored Contact Messages:', messages);
  console.log(`Total messages: ${messages.length}`);
  
  if (messages.length > 0) {
    console.log('To export as CSV, run: downloadMessagesAsCSV()');
  }
};

// Make functions available globally for console access
if (typeof window !== 'undefined') {
  (window as any).getContactMessages = getStoredMessages;
  (window as any).downloadContactMessages = downloadMessagesAsCSV;
  (window as any).logContactMessages = logStoredMessages;
  (window as any).clearContactMessages = clearStoredMessages;
}
import { useState, useEffect } from "react";
import { Download, Trash2, Mail, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  getStoredMessages, 
  clearStoredMessages, 
  downloadMessagesAsCSV,
  type ContactMessage 
} from "@/utils/contactMessages";

/**
 * Admin panel to view and manage contact form submissions
 * Add this component to your app temporarily to check messages
 * 
 * Usage: Import and add <ContactAdmin /> to your main page
 */
const ContactAdmin = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);

  useEffect(() => {
    setMessages(getStoredMessages());
  }, []);

  const handleClearMessages = () => {
    if (window.confirm('Are you sure you want to clear all messages?')) {
      clearStoredMessages();
      setMessages([]);
    }
  };

  const handleDownload = () => {
    downloadMessagesAsCSV();
  };

  if (messages.length === 0) {
    return (
      <Card className="p-6 m-4">
        <div className="text-center">
          <Mail className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">No Messages Yet</h3>
          <p className="text-muted-foreground">
            Contact form submissions will appear here until you set up email sending.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Contact Messages ({messages.length})</h2>
        <div className="space-x-2">
          <Button onClick={handleDownload} variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download CSV
          </Button>
          <Button onClick={handleClearMessages} variant="destructive">
            <Trash2 className="h-4 w-4 mr-2" />
            Clear All
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {messages.map((message) => (
          <Card key={message.id} className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  <span className="font-semibold">{message.name}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {new Date(message.timestamp).toLocaleString()}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href={`mailto:${message.email}`}
                  className="text-primary hover:underline"
                >
                  {message.email}
                </a>
              </div>
              
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="whitespace-pre-wrap">{message.message}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ContactAdmin;
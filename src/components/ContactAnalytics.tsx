import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, User, Clock, MessageSquare, Download, X, Eye, TrendingUp } from "lucide-react";

interface ContactSubmission {
  name: string;
  email: string;
  message: string;
  timestamp: string;
  id: number;
  emailSent: boolean;
  error?: string;
}

interface VisitorData {
  timestamp: string;
  userAgent: string;
  referrer: string;
  screenResolution: string;
  language: string;
  timezone: string;
  sessionId: string;
  pageViews: number;
  timeOnSite: number;
}

const ContactAnalytics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [visitors, setVisitors] = useState<VisitorData[]>([]);
  const [stats, setStats] = useState({
    totalContacts: 0,
    totalVisitors: 0,
    conversionRate: 0,
    recentContacts: [] as ContactSubmission[],
    topDomains: [] as { domain: string; count: number }[]
  });

  // Secret key combination to show contact analytics (Ctrl+Shift+M)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'M') {
        setIsVisible(!isVisible);
        if (!isVisible) {
          loadContactAnalytics();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible]);

  const loadContactAnalytics = () => {
    try {
      // Load contact form submissions
      const contactData = JSON.parse(localStorage.getItem('portfolioContacts') || '[]');
      setContacts(contactData);

      // Load visitor analytics
      const visitorData = JSON.parse(localStorage.getItem('portfolio_analytics') || '[]');
      setVisitors(visitorData);

      // Calculate stats
      const totalContacts = contactData.length;
      const totalVisitors = visitorData.length;
      const conversionRate = totalVisitors > 0 ? ((totalContacts / totalVisitors) * 100) : 0;

      // Recent contacts (last 10)
      const recentContacts = contactData.slice(-10).reverse();

      // Top email domains
      const domainCounts = contactData.reduce((acc: any, contact: ContactSubmission) => {
        const domain = contact.email.split('@')[1];
        acc[domain] = (acc[domain] || 0) + 1;
        return acc;
      }, {});

      const topDomains = Object.entries(domainCounts)
        .map(([domain, count]) => ({ domain, count: count as number }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      setStats({
        totalContacts,
        totalVisitors,
        conversionRate: Math.round(conversionRate * 100) / 100,
        recentContacts,
        topDomains
      });
    } catch (error) {
      console.error('Error loading contact analytics:', error);
    }
  };

  const exportContactData = () => {
    const dataStr = JSON.stringify(contacts, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `contact-submissions-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const clearContactData = () => {
    if (confirm('Are you sure you want to clear all contact data?')) {
      localStorage.removeItem('portfolioContacts');
      setContacts([]);
      loadContactAnalytics();
    }
  };

  const getEmailProvider = (email: string) => {
    const domain = email.split('@')[1];
    if (domain.includes('gmail')) return 'Gmail';
    if (domain.includes('yahoo')) return 'Yahoo';
    if (domain.includes('outlook') || domain.includes('hotmail')) return 'Outlook';
    if (domain.includes('company') || !domain.includes('.')) return 'Corporate';
    return 'Other';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className="bg-background border border-primary/20 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-primary">Contact & Lead Analytics</h2>
            <div className="flex gap-2">
              <Button onClick={exportContactData} size="sm" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Contacts
              </Button>
              <Button onClick={clearContactData} size="sm" variant="destructive">
                Clear Data
              </Button>
              <Button onClick={() => setIsVisible(false)} size="sm" variant="ghost">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Total Contacts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{stats.totalContacts}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  Total Visitors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{stats.totalVisitors}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Conversion Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{stats.conversionRate}%</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  This Week
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">
                  {contacts.filter(c => {
                    const contactDate = new Date(c.timestamp);
                    const weekAgo = new Date();
                    weekAgo.setDate(weekAgo.getDate() - 7);
                    return contactDate > weekAgo;
                  }).length}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Top Email Domains */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Top Email Providers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {stats.topDomains.map((domain, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-sm">{domain.domain}</span>
                      <Badge variant="secondary">{domain.count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Contacts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Contact Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-64 overflow-auto">
                  {stats.recentContacts.map((contact, idx) => (
                    <div key={idx} className="border-b border-border/50 pb-3">
                      <div className="flex justify-between items-start mb-1">
                        <div className="font-medium text-sm">{contact.name}</div>
                        <Badge variant={contact.emailSent ? "default" : "destructive"} className="text-xs">
                          {contact.emailSent ? "Sent" : "Failed"}
                        </Badge>
                      </div>
                      <div className="text-xs text-primary font-mono">{contact.email}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {new Date(contact.timestamp).toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 truncate">
                        "{contact.message.substring(0, 60)}..."
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Full Contact List */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">All Contact Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Date</th>
                      <th className="text-left p-2">Name</th>
                      <th className="text-left p-2">Email</th>
                      <th className="text-left p-2">Provider</th>
                      <th className="text-left p-2">Status</th>
                      <th className="text-left p-2">Message Preview</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.slice(-20).reverse().map((contact, idx) => (
                      <tr key={idx} className="border-b hover:bg-muted/50">
                        <td className="p-2 text-xs">
                          {new Date(contact.timestamp).toLocaleDateString()}
                        </td>
                        <td className="p-2 font-medium">{contact.name}</td>
                        <td className="p-2 font-mono text-xs">{contact.email}</td>
                        <td className="p-2">
                          <Badge variant="outline" className="text-xs">
                            {getEmailProvider(contact.email)}
                          </Badge>
                        </td>
                        <td className="p-2">
                          <Badge variant={contact.emailSent ? "default" : "destructive"} className="text-xs">
                            {contact.emailSent ? "✓" : "✗"}
                          </Badge>
                        </td>
                        <td className="p-2 text-xs text-muted-foreground max-w-xs truncate">
                          {contact.message.substring(0, 50)}...
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="mt-4 text-xs text-muted-foreground text-center">
            Press Ctrl+Shift+M to toggle this dashboard • Only shows emails from contact form submissions
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAnalytics;
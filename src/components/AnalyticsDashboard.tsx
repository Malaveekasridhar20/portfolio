import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Clock, Globe, Monitor, Calendar, Download, X } from "lucide-react";

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

const AnalyticsDashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [analytics, setAnalytics] = useState<VisitorData[]>([]);
  const [stats, setStats] = useState({
    totalVisits: 0,
    uniqueVisitors: 0,
    avgTimeOnSite: 0,
    topReferrers: [] as { name: string; count: number }[],
    topCountries: [] as { name: string; count: number }[],
    recentVisits: [] as VisitorData[]
  });

  // Secret key combination to show dashboard (Ctrl+Shift+E)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'E') {
        setIsVisible(!isVisible);
        if (!isVisible) {
          loadAnalytics();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible]);

  const loadAnalytics = () => {
    try {
      const data = JSON.parse(localStorage.getItem('portfolio_analytics') || '[]');
      setAnalytics(data);
      
      // Calculate stats
      const totalVisits = data.length;
      const uniqueVisitors = new Set(data.map((v: VisitorData) => v.sessionId)).size;
      const avgTimeOnSite = data.reduce((acc: number, v: VisitorData) => acc + v.timeOnSite, 0) / data.length || 0;
      
      // Top referrers
      const referrerCounts = data.reduce((acc: any, v: VisitorData) => {
        const ref = v.referrer === '' ? 'Direct' : new URL(v.referrer || 'direct://').hostname;
        acc[ref] = (acc[ref] || 0) + 1;
        return acc;
      }, {});
      
      const topReferrers = Object.entries(referrerCounts)
        .map(([name, count]) => ({ name, count: count as number }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      // Recent visits (last 10)
      const recentVisits = data.slice(-10).reverse();

      setStats({
        totalVisits,
        uniqueVisitors,
        avgTimeOnSite: Math.round(avgTimeOnSite),
        topReferrers,
        topCountries: [], // Would need IP geolocation for this
        recentVisits
      });
    } catch (error) {
      console.error('Error loading analytics:', error);
    }
  };

  const exportData = () => {
    const dataStr = JSON.stringify(analytics, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `portfolio-analytics-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const clearData = () => {
    if (confirm('Are you sure you want to clear all analytics data?')) {
      localStorage.removeItem('portfolio_analytics');
      setAnalytics([]);
      setStats({
        totalVisits: 0,
        uniqueVisitors: 0,
        avgTimeOnSite: 0,
        topReferrers: [],
        topCountries: [],
        recentVisits: []
      });
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const getBrowserName = (userAgent: string) => {
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Edge';
    return 'Other';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className="bg-background border border-primary/20 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-primary">Portfolio Analytics Dashboard</h2>
            <div className="flex gap-2">
              <Button onClick={exportData} size="sm" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button onClick={clearData} size="sm" variant="destructive">
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
                  <Eye className="h-4 w-4" />
                  Total Visits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{stats.totalVisits}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Unique Visitors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{stats.uniqueVisitors}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Avg. Time on Site
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{formatTime(stats.avgTimeOnSite)}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Today's Visits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">
                  {analytics.filter(v => new Date(v.timestamp).toDateString() === new Date().toDateString()).length}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Top Referrers */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Top Referrers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {stats.topReferrers.map((ref, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-sm">{ref.name}</span>
                      <Badge variant="secondary">{ref.count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Visits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Visits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-64 overflow-auto">
                  {stats.recentVisits.map((visit, idx) => (
                    <div key={idx} className="border-b border-border/50 pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-sm font-medium">
                            {getBrowserName(visit.userAgent)} • {visit.screenResolution}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {new Date(visit.timestamp).toLocaleString()}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Time: {formatTime(visit.timeOnSite)} • {visit.language}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-4 text-xs text-muted-foreground text-center">
            Press Ctrl+Shift+E to toggle this dashboard • Data stored locally in browser
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
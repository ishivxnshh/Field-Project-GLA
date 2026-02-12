import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileDown, FileText } from 'lucide-react';

const reports = [
    { id: 1, title: 'Weekly Performance Summary', date: 'May 19, 2024', status: 'Generated' },
    { id: 2, title: 'Regression Analysis - Q2', date: 'May 12, 2024', status: 'Pending Review' },
    { id: 3, title: 'Cache Optimization Report', date: 'May 05, 2024', status: 'Approved' },
];

export function Reports() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
                <Button>Generate Report</Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {reports.map((report) => (
                    <Card key={report.id}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">#{report.id}</CardTitle>
                            <FileText className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent className="pt-4">
                            <div className="text-2xl font-bold">{report.title}</div>
                            <p className="text-xs text-muted-foreground">{report.date}</p>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-sm text-green-500">{report.status}</span>
                                <Button variant="outline" size="sm">
                                    <FileDown className="mr-2 h-4 w-4" /> Download
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GitCommit, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const baselines = [
    { commit: 'a1b2c3', date: 'May 20, 2024', author: 'Shivansh', metrics: 'CPU: +2%', status: 'Current' },
    { commit: 'd4e5f6', date: 'May 18, 2024', author: 'Shivansh', metrics: 'Latency: -5%', status: 'Stable' },
    { commit: '7890ab', date: 'May 15, 2024', author: 'Shivansh', metrics: 'Cache: +10%', status: 'Regressed' },
];

export function Baselines() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Baselines</h2>
                <div className="flex items-center space-x-2">
                    <Button variant="outline">Compare</Button>
                    <Button>Snapshot</Button>
                </div>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Commit History</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Commit</TableHead>
                                <TableHead>Author</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Metrics Summary</TableHead>
                                <TableHead className="text-right">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {baselines.map((baseline) => (
                                <TableRow key={baseline.commit}>
                                    <TableCell className="font-mono flex items-center">
                                        <GitCommit className="mr-2 h-4 w-4 text-muted-foreground" />
                                        {baseline.commit}
                                    </TableCell>
                                    <TableCell>{baseline.author}</TableCell>
                                    <TableCell>{baseline.date}</TableCell>
                                    <TableCell>{baseline.metrics}</TableCell>
                                    <TableCell className="text-right">
                                        <Badge variant="outline">{baseline.status}</Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}

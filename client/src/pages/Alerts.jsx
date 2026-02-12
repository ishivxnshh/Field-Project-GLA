import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const alertsData = [
    { id: 1, severity: "Critical", metric: "API Latency", deviation: "+45%", timestamp: "2024-05-20 14:32" },
    { id: 2, severity: "High", metric: "Cache Miss Rate", deviation: "+22%", timestamp: "2024-05-20 13:15" },
    { id: 3, severity: "Medium", metric: "Throughput Drop", deviation: "-15%", timestamp: "2024-05-20 12:45" },
    { id: 4, severity: "Low", metric: "Memory Usage", deviation: "+5%", timestamp: "2024-05-20 10:00" },
];

export function Alerts() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <h2 className="text-3xl font-bold tracking-tight">Regression Alerts</h2>
            <Table>
                <TableCaption>A list of recent performance regressions.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Severity</TableHead>
                        <TableHead>Metric</TableHead>
                        <TableHead>Deviation</TableHead>
                        <TableHead className="text-right">Timestamp</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {alertsData.map((alert) => (
                        <TableRow key={alert.id}>
                            <TableCell>
                                <Badge variant={alert.severity === "Critical" ? "destructive" : alert.severity === "High" ? "destructive" : "secondary"}>
                                    {alert.severity}
                                </Badge>
                            </TableCell>
                            <TableCell className="font-medium">{alert.metric}</TableCell>
                            <TableCell className="text-red-500">{alert.deviation}</TableCell>
                            <TableCell className="text-right">{alert.timestamp}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button';
import { ListFilter } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const metrics = [
    { name: 'GET /api/v1/users', latency: '45ms', throughput: '1200 rpm', errors: '0.01%', p99: '120ms' },
    { name: 'POST /api/v1/auth', latency: '120ms', throughput: '300 rpm', errors: '0.00%', p99: '250ms' },
    { name: 'GET /api/v1/products', latency: '65ms', throughput: '800 rpm', errors: '0.12%', p99: '180ms' },
    { name: 'GET /health', latency: '5ms', throughput: '5000 rpm', errors: '0.00%', p99: '10ms' },
];

export function Metrics() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Metrics Explorer</h2>
                <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                        <ListFilter className="mr-2 h-4 w-4" /> Filter
                    </Button>
                    <Button size="sm">Export</Button>
                </div>
            </div>
            <Tabs defaultValue="latency" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="latency">Latency</TabsTrigger>
                    <TabsTrigger value="throughput">Throughput</TabsTrigger>
                    <TabsTrigger value="errors">Errors</TabsTrigger>
                    <TabsTrigger value="cpu">CPU</TabsTrigger>
                </TabsList>
                <TabsContent value="latency" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Endpoint Latency</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[300px]">Endpoint</TableHead>
                                        <TableHead>Avg Latency</TableHead>
                                        <TableHead>Throughput</TableHead>
                                        <TableHead>Error Rate</TableHead>
                                        <TableHead className="text-right">P99</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {metrics.map((m) => (
                                        <TableRow key={m.name}>
                                            <TableCell className="font-medium">{m.name}</TableCell>
                                            <TableCell>{m.latency}</TableCell>
                                            <TableCell>{m.throughput}</TableCell>
                                            <TableCell>{m.errors}</TableCell>
                                            <TableCell className="text-right">{m.p99}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}

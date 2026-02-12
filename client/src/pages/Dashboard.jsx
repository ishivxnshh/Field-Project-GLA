import React, { useState, useEffect } from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip as RechartsTooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    AreaChart,
    Area,
} from "recharts"
import { Activity, Clock, Database, TrendingDown, TrendingUp, Zap, Calendar, ArrowDownRight, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const latencyData = [
    { time: "00:00", latency: 120 },
    { time: "04:00", latency: 135 },
    { time: "08:00", latency: 240 },
    { time: "12:00", latency: 180 },
    { time: "16:00", latency: 150 },
    { time: "20:00", latency: 210 },
    { time: "23:59", latency: 130 },
]

const cacheData = [
    { time: "Mon", misses: 400 },
    { time: "Tue", misses: 300 },
    { time: "Wed", misses: 550 },
    { time: "Thu", misses: 450 },
    { time: "Fri", misses: 380 },
    { time: "Sat", misses: 200 },
    { time: "Sun", misses: 250 },
]

const cpuData = [
    { time: "00:00", cpu: 30 },
    { time: "04:00", cpu: 45 },
    { time: "08:00", cpu: 75 },
    { time: "12:00", cpu: 60 },
    { time: "16:00", cpu: 55 },
    { time: "20:00", cpu: 80 },
    { time: "23:59", cpu: 40 },
]

const recentActivity = [
    { id: 1, event: "High CPU Usage Detected", time: "2 mins ago", type: "warning" },
    { id: 2, event: "Cache Clearance Routine", time: "15 mins ago", type: "info" },
    { id: 3, event: "New Deployment (v2.1.0)", time: "1 hour ago", type: "success" },
    { id: 4, event: "Database Backup Completed", time: "3 hours ago", type: "success" },
]

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-lg border bg-background p-2 shadow-sm">
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                            {label}
                        </span>
                        <span className="font-bold text-muted-foreground">
                            {payload[0].value}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
    return null
}

export function Dashboard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-4 p-8 pt-6"
        >
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                <div className="flex items-center space-x-2">
                    <Button variant="outline" className="h-8 w-[240px] justify-start text-left font-normal text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        Last 7 days
                    </Button>
                    <Button size="sm">Download Report</Button>
                </div>
            </div>
            <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                    <TabsTrigger value="reports">Reports</TabsTrigger>
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Total Throughput
                                </CardTitle>
                                <Zap className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">45,231 req/s</div>
                                <div className="flex items-center pt-1 text-xs text-green-500">
                                    <ArrowUpRight className="mr-1 h-3 w-3" />
                                    +20.1% from last month
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Avg Latency
                                </CardTitle>
                                <Clock className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">145ms</div>
                                <div className="flex items-center pt-1 text-xs text-green-500">
                                    <ArrowDownRight className="mr-1 h-3 w-3" />
                                    -4% from last hour
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Cache Misses</CardTitle>
                                <Database className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">12.5%</div>
                                <div className="flex items-center pt-1 text-xs text-red-500">
                                    <ArrowUpRight className="mr-1 h-3 w-3" />
                                    +2% from yesterday
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Regression Score
                                </CardTitle>
                                <Activity className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">98.2</div>
                                <div className="flex items-center pt-1 text-xs text-green-500">
                                    <ArrowUpRight className="mr-1 h-3 w-3" />
                                    +1 since last deploy
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <Card className="col-span-4">
                            <CardHeader>
                                <CardTitle>Latency Trend</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <ResponsiveContainer width="100%" height={350}>
                                    <LineChart data={latencyData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-muted" />
                                        <XAxis
                                            dataKey="time"
                                            stroke="#888888"
                                            fontSize={12}
                                            tickLine={false}
                                            axisLine={false}
                                        />
                                        <YAxis
                                            stroke="#888888"
                                            fontSize={12}
                                            tickLine={false}
                                            axisLine={false}
                                            tickFormatter={(value) => `${value}ms`}
                                        />
                                        <RechartsTooltip content={<CustomTooltip />} />
                                        <Line
                                            type="monotone"
                                            dataKey="latency"
                                            stroke="hsl(var(--primary))"
                                            strokeWidth={2}
                                            dot={false}
                                            activeDot={{ r: 4, strokeWidth: 0 }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                        <Card className="col-span-3">
                            <CardHeader>
                                <CardTitle>Cache Performance</CardTitle>
                                <CardDescription>
                                    Daily cache misses over the last week.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={350}>
                                    <BarChart data={cacheData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-muted" />
                                        <XAxis
                                            dataKey="time"
                                            stroke="#888888"
                                            fontSize={12}
                                            tickLine={false}
                                            axisLine={false}
                                        />
                                        <YAxis
                                            stroke="#888888"
                                            fontSize={12}
                                            tickLine={false}
                                            axisLine={false}
                                        />
                                        <RechartsTooltip content={<CustomTooltip />} />
                                        <Bar
                                            dataKey="misses"
                                            fill="hsl(var(--primary))"
                                            radius={[4, 4, 0, 0]}
                                            classNames={{ fill: "opacity-80" }}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <Card className="col-span-4">
                            <CardHeader>
                                <CardTitle>CPU Usage Cycles</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={300}>
                                    <AreaChart data={cpuData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-muted" />
                                        <XAxis dataKey="time" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                                        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} unit="%" />
                                        <RechartsTooltip content={<CustomTooltip />} />
                                        <Area
                                            type="monotone"
                                            dataKey="cpu"
                                            stroke="#ffc658"
                                            fill="#ffc658"
                                            fillOpacity={0.2}
                                            strokeWidth={2}
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                        <Card className="col-span-3">
                            <CardHeader>
                                <CardTitle>Recent Activity</CardTitle>
                                <CardDescription>
                                    Latest system events and logs.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {recentActivity.map((activity) => (
                                        <div key={activity.id} className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0">
                                            <div className="flex items-center space-x-2">
                                                <div className={`h-2 w-2 rounded-full ${activity.type === 'warning' ? 'bg-yellow-500' : activity.type === 'error' ? 'bg-red-500' : 'bg-green-500'}`} />
                                                <span className="text-sm font-medium">{activity.event}</span>
                                            </div>
                                            <span className="text-xs text-muted-foreground">{activity.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </motion.div>
    )
}

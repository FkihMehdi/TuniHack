import React, { useState } from "react";
import { BusinessLayout } from "../../../common";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import {
  TrendingUp,
  People,
  AttachMoney,
  Business,
  Lightbulb,
  Warning,
} from "@mui/icons-material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("6m");

  const performanceData = [
    { month: "Jan", revenue: 4000, profit: 2400 },
    { month: "Feb", revenue: 3000, profit: 1398 },
    { month: "Mar", revenue: 2000, profit: 9800 },
    { month: "Apr", revenue: 2780, profit: 3908 },
    { month: "May", revenue: 1890, profit: 4800 },
    { month: "Jun", revenue: 2390, profit: 3800 },
  ];

  const productMix = [
    { name: "Product A", value: 35, color: "#1976d2" },
    { name: "Product B", value: 25, color: "#388e3c" },
    { name: "Product C", value: 20, color: "#9c27b0" },
    { name: "Product D", value: 20, color: "#f57c00" },
  ];

  const metrics = [
    {
      title: "Revenue",
      value: "$72,000",
      change: "+12%",
      trend: "up",
      icon: <AttachMoney />,
    },
    {
      title: "Customers",
      value: "220",
      change: "+10%",
      trend: "up",
      icon: <People />,
    },
    {
      title: "Market Share",
      value: "23%",
      change: "-2%",
      trend: "down",
      icon: <Business />,
    },
    {
      title: "Growth Rate",
      value: "15%",
      change: "+5%",
      trend: "up",
      icon: <TrendingUp />,
    },
  ];

  const aiInsights = [
    {
      title: "Revenue Optimization",
      description:
        "AI suggests increasing prices by 5% for Product A based on demand elasticity.",
      impact: "Potential 12% revenue increase",
      icon: <Lightbulb color="success" />,
    },
    {
      title: "Inventory Alert",
      description:
        "Product B stock levels are predicted to be insufficient for next month.",
      impact: "Order 500 units to prevent stockout",
      icon: <Warning color="warning" />,
    },
    {
      title: "Customer Segment Opportunity",
      description:
        "New high-value customer segment identified in market analysis.",
      impact: "Potential 15% customer base growth",
      icon: <Lightbulb color="Blue" />,
    },
  ];

  return (
    <BusinessLayout>
      <div
        style={{
          padding: "24px",
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
        }}
      >
        {/* Header Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "24px",
          }}
        >
          <div>
            <Typography variant="h4" fontWeight="bold">
              Business Simulator Dashboard
            </Typography>
            <Typography variant="body2" color="textSecondary">
              AI-Powered Business Intelligence
            </Typography>
          </div>
          <div>
            {["1m", "3m", "6m", "1y"].map((period) => (
              <Button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                variant={selectedPeriod === period ? "contained" : "outlined"}
                color={selectedPeriod === period ? "primary" : "inherit"}
                style={{ margin: "0 4px" }}
              >
                {period.toUpperCase()}
              </Button>
            ))}
          </div>
        </div>

        {/* Metrics Section */}
        <Grid container spacing={2} style={{ marginBottom: "24px" }}>
          {metrics.map((metric) => (
            <Grid item xs={12} sm={6} md={3} key={metric.title}>
              <Card>
                <CardContent>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <Typography variant="subtitle2" color="textSecondary">
                        {metric.title}
                      </Typography>
                      <Typography variant="h5" fontWeight="bold">
                        {metric.value}
                      </Typography>
                    </div>
                    {metric.icon}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "8px",
                    }}
                  >
                    <Typography
                      variant="body2"
                      style={{
                        color: metric.trend === "up" ? "green" : "red",
                        marginLeft: "8px",
                      }}
                    >
                      {metric.change}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* AI Insights */}
        <Card style={{ marginBottom: "24px" }}>
          <CardHeader title="AI Insights & Recommendations" />
          <CardContent>
            {aiInsights.map((insight) => (
              <div key={insight.title} style={{ marginBottom: "16px" }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {insight.icon} {insight.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {insight.description}
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  {insight.impact}
                </Typography>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Charts Section */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Financial Performance" />
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <RechartsTooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#1976d2"
                      isAnimationActive={true} // This enables animation
                    />
                    <Line
                      type="monotone"
                      dataKey="profit"
                      stroke="#388e3c"
                      isAnimationActive={true} // This enables animation
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Product Mix" />
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={productMix}
                      dataKey="value"
                      innerRadius={60}
                      outerRadius={80}
                      isAnimationActive={true}
                    >
                      {productMix.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </BusinessLayout>
  );
};

export default Dashboard;

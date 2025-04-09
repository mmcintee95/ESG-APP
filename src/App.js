// ESG Radar - React Frontend Mockup
// Note: This is a basic structure for a sustainability case competition demo app.
// It includes a dashboard with ESG alerts, company profiles, and a basic layout.

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, AlertTriangle, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function ESGRadarApp() {
  const [watchlist, setWatchlist] = useState(["Tesla", "Nestle", "ExxonMobil"]);
  const [searchTerm, setSearchTerm] = useState("");

  const alerts = [
    { company: "Nestle", type: "Social", message: "Allegations of labor abuse in supply chain." },
    { company: "ExxonMobil", type: "Environmental", message: "Oil spill reported in Gulf region." },
    { company: "Tesla", type: "Governance", message: "Executive pay controversy surfaces." },
  ];

  const filteredWatchlist = watchlist.filter(company =>
    company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <motion.h1 className="text-3xl font-bold mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>ESG Radar Dashboard</motion.h1>

      <div className="mb-4 flex items-center gap-2">
        <Search className="text-muted-foreground" />
        <Input
          placeholder="Search your watchlist..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredWatchlist.map((company, index) => (
          <Card key={index} className="shadow-lg">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{company}</h2>
              <p className="text-sm text-muted-foreground mb-2">Current ESG Pulse Score: {Math.floor(Math.random() * 50) + 50}</p>
              <ul className="text-sm list-disc pl-5">
                {alerts.filter(alert => alert.company === company).map((alert, i) => (
                  <li key={i} className="text-red-600 flex items-center gap-1">
                    <AlertTriangle className="w-4 h-4" />
                    <span><strong>{alert.type}:</strong> {alert.message}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Button onClick={() => alert("Feature coming soon: Add new companies to your watchlist!")}>
          + Add Company
        </Button>
      </div>
    </div>
  );
}

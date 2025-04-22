import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

export default function GasFeeTracker() {
  const [gasData, setGasData] = useState([]);
  const [timestamps, setTimestamps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [debugInfo, setDebugInfo] = useState({});

  // API Keys (normally these would be in environment variables)
  const ETHERSCAN_API_KEY = "7ZAH6KQ2FAPMXJ2PDKBCRMEJ43NYK2J396";
  const OPTIMISM_API_KEY = "8JEMPD4IEA7E9QPGQMJVQM8XB2PVRQY9J6";
  const ARBITRUM_API_KEY = "3W9ACK48QMR3ARA7DDUSC7IQTYEIWMMBM8";
  
  // Max data points to display
  const MAX_DATA_POINTS = 10;

  async function fetchGasPrices() {
    setError(null);
    try {
      // Ethereum L1
      const responseL1 = await fetch(
        `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${ETHERSCAN_API_KEY}`
      );
      const dataL1 = await responseL1.json();
      
      if (dataL1.status !== "1") {
        throw new Error(`Ethereum API error: ${dataL1.message || "Unknown error"}`);
      }

      // Optimism
      const responseOptimism = await fetch(
        `https://api-optimistic.etherscan.io/api?module=proxy&action=eth_gasPrice&apikey=${OPTIMISM_API_KEY}`
      );
      const dataOptimism = await responseOptimism.json();
      
      // Arbitrum - FIXED: Using the proxy module with eth_gasPrice action, similar to Optimism
      const responseArbitrum = await fetch(
        `https://api.arbiscan.io/api?module=proxy&action=eth_gasPrice&apikey=${ARBITRUM_API_KEY}`
      );
      const dataArbitrum = await responseArbitrum.json();
      
      // Save raw response for debugging
      setDebugInfo({
        l1: dataL1,
        optimism: dataOptimism,
        arbitrum: dataArbitrum
      });

      const currentTime = new Date().toLocaleTimeString();
      
      // Update timestamps, keeping only the most recent MAX_DATA_POINTS
      setTimestamps(prevTimestamps => {
        const newTimestamps = [...prevTimestamps, currentTime];
        return newTimestamps.slice(-MAX_DATA_POINTS);
      });
      
      // Update gas data with proper parsing for all networks
      setGasData(prevData => {
        const newData = [
          ...prevData,
          {
            L1: parseFloat(dataL1.result.SafeGasPrice),
            Optimism: parseFloat(parseInt(dataOptimism.result, 16) / 1e9),
            // Fix for Arbitrum: Parse hex gas price similar to Optimism
            Arbitrum: dataArbitrum.result ? parseFloat(parseInt(dataArbitrum.result, 16) / 1e9) : null,
            timestamp: currentTime
          }
        ];
        return newData.slice(-MAX_DATA_POINTS);
      });
      
      setLoading(false);
    } catch (error) {
      console.error("Error fetching gas prices:", error);
      setError("Failed to fetch gas prices. Please try again later.");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGasPrices();
    
    // Fetch new data every 30 seconds
    const interval = setInterval(fetchGasPrices, 30000);
    
    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: "Ethereum L1",
        data: gasData.map(d => d.L1),
        borderColor: "#FF5733",
        backgroundColor: "rgba(255, 87, 51, 0.2)",
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.1, // Slightly smooth line
      },
      {
        label: "Optimism",
        data: gasData.map(d => d.Optimism),
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.1,
      },
      {
        label: "Arbitrum",
        data: gasData.map(d => d.Arbitrum !== null ? d.Arbitrum : NaN),
        borderColor: "#4285F4",
        backgroundColor: "rgba(66, 133, 244, 0.2)",
        borderWidth: 2,
        pointRadius: 3,
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
          color: "#666",
        },
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Gas Price (Gwei)",
          font: {
            weight: "bold",
          },
        },
        ticks: {
          color: "#666",
        },
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
            weight: "bold",
          },
          usePointStyle: true,
          padding: 20,
        },
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 13,
        },
        padding: 10,
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.raw ? context.raw.toFixed(2) : 'N/A'} Gwei`;
          }
        }
      },
      title: {
        display: true,
        text: "Layer 1 & Layer 2 Gas Prices",
        font: {
          size: 18,
          weight: "bold",
        },
        padding: {
          top: 10,
          bottom: 20,
        },
      },
    },
    animation: {
      duration: 1000,
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };

  // Function to manually refresh data
  const handleRefresh = () => {
    setLoading(true);
    fetchGasPrices();
  };

  // Function to toggle debug panel
  const [showDebug, setShowDebug] = useState(false);
  const toggleDebug = () => setShowDebug(!showDebug);

  // Format last updated time
  const lastUpdated = timestamps.length > 0 
    ? `Last updated: ${timestamps[timestamps.length - 1]}` 
    : "";

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Real-Time Gas Fee Tracker</h2>
        <div className="flex space-x-2">
          <button 
            onClick={toggleDebug}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            {showDebug ? "Hide Debug" : "Debug"}
          </button>
          <button 
            onClick={handleRefresh}
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>
      </div>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {showDebug && (
        <div className="mb-4 p-3 bg-gray-100 rounded overflow-auto max-h-40">
          <p className="font-bold">Debug Info:</p>
          <pre className="text-xs">{JSON.stringify(debugInfo, null, 2)}</pre>
        </div>
      )}
      
      <div className="text-sm text-gray-500 mb-2">{lastUpdated}</div>
      
      {loading && gasData.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg">Loading Gas Prices...</p>
        </div>
      ) : (
        <div className="h-96 w-full">
          <Line data={chartData} options={chartOptions} />
        </div>
      )}
      
      {gasData.length > 0 && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {chartData.datasets.map((dataset, index) => {
            const networkKey = dataset.label.includes("Ethereum") ? "L1" : 
                               dataset.label.includes("Optimism") ? "Optimism" : "Arbitrum";
            const latestValue = gasData[gasData.length - 1][networkKey];
            
            return (
              <div key={index} className="p-4 rounded-lg border" style={{borderColor: dataset.borderColor}}>
                <div className="text-lg font-semibold" style={{color: dataset.borderColor}}>
                  {dataset.label}
                </div>
                <div className="text-2xl font-bold mt-1">
                  {latestValue !== null && !isNaN(latestValue) ? `${latestValue.toFixed(2)} Gwei` : "N/A"}
                </div>
              </div>
            );
          })}
        </div>
      )}
      
      <div className="mt-6 text-sm text-gray-500">
        <p>Data refreshes every 30 seconds. Click "Refresh" for immediate updates.</p>
      </div>
    </div>
  );
}

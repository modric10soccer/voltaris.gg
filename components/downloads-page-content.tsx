// This file contains the downloads page content component
// It manages the display and functionality of the downloads section

'use client';

import { useState } from 'react';
import { Download, ExternalLink, AlertCircle } from 'lucide-react';
import Link from 'next/link';

interface DownloadItem {
  id: string;
  name: string;
  description: string;
  category: string;
  fileSize?: string;
  version?: string;
}

interface DownloadLink {
  [key: string]: string;
}

export default function DownloadsPageContent() {
  const [downloadedItems, setDownloadedItems] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState('all');

  const downloads: DownloadItem[] = [
    {
      id: 'rocket-league-mech-ssl-1v1-bot',
      name: 'Rocket League Mech SSL 1v1 Bot',
      description: 'Advanced SSL-level bot for 1v1 matches with mechanical precision',
      category: 'bots',
      fileSize: '24.5 MB',
      version: '2.1.0'
    },
    {
      id: 'novabot-flip-reset',
      name: 'NovaBot (Flip Reset)',
      description: 'Specialized bot with advanced flip reset mechanics for competitive play',
      category: 'bots',
      fileSize: '18.3 MB',
      version: '1.8.5'
    },
    {
      id: 'rocket-league-requiem-ssl-bot',
      name: 'Rocket League Requiem SSL Bot',
      description: 'High-performance SSL bot with strategic gameplay algorithms',
      category: 'bots',
      fileSize: '31.2 MB',
      version: '3.0.1'
    },
    {
      id: 'training-pack-ultimate-mechanics',
      name: 'Training Pack: Ultimate Mechanics',
      description: 'Comprehensive training pack covering all essential mechanics',
      category: 'training',
      fileSize: '12.8 MB',
      version: '1.5.0'
    },
    {
      id: 'replay-analysis-tool',
      name: 'Replay Analysis Tool',
      description: 'Analyze your replays with detailed statistics and insights',
      category: 'tools',
      fileSize: '8.6 MB',
      version: '2.3.0'
    }
  ];

  const handleDownload = (itemId: string, itemName: string) => {
    // Update downloaded items set
    const newDownloaded = new Set(downloadedItems);
    newDownloaded.add(itemId);
    setDownloadedItems(newDownloaded);

    // Download links object - maps item IDs to their download URLs
    const downloadLinks: DownloadLink = {
      'rocket-league-mech-ssl-1v1-bot': 'https://gofile.io/d/NZjDO1',
      'novabot-flip-reset': 'https://gofile.io/d/NZjDO1',
      'rocket-league-requiem-ssl-bot': 'https://gofile.io/d/NZjDO1',
      'training-pack-ultimate-mechanics': 'https://example.com/training-pack',
      'replay-analysis-tool': 'https://example.com/replay-tool'
    };

    const downloadUrl = downloadLinks[itemId];

    if (downloadUrl) {
      // Open download link in new tab
      window.open(downloadUrl, '_blank');

      // Log download event for analytics
      console.log(`Download initiated for: ${itemName}`);
    } else {
      console.error(`Download link not found for item: ${itemId}`);
    }

    // Reset downloaded state after 2 seconds
    setTimeout(() => {
      const resetDownloaded = new Set(downloadedItems);
      resetDownloaded.delete(itemId);
      setDownloadedItems(resetDownloaded);
    }, 2000);
  };

  const filteredDownloads = activeCategory === 'all' 
    ? downloads 
    : downloads.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Downloads
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Access all our premium bots, training packs, and tools to enhance your Rocket League experience
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {['all', 'bots', 'training', 'tools'].map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Downloads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredDownloads.map(item => (
            <div
              key={item.id}
              className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-white flex-1 pr-4">
                  {item.name}
                </h3>
                <span className="text-xs px-2 py-1 bg-blue-600/20 text-blue-300 rounded">
                  {item.category}
                </span>
              </div>

              <p className="text-slate-300 text-sm mb-4">
                {item.description}
              </p>

              <div className="flex flex-col gap-2 mb-6 text-xs text-slate-400">
                {item.fileSize && (
                  <div>
                    <span className="font-medium">Size:</span> {item.fileSize}
                  </div>
                )}
                {item.version && (
                  <div>
                    <span className="font-medium">Version:</span> {item.version}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleDownload(item.id, item.name)}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  downloadedItems.has(item.id)
                    ? 'bg-green-600 text-white'
                    : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95'
                }`}
              >
                <Download size={18} />
                {downloadedItems.has(item.id) ? 'Downloaded!' : 'Download'}
              </button>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-8 mb-8">
          <div className="flex gap-4">
            <AlertCircle className="text-blue-400 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                Information
              </h3>
              <p className="text-slate-300 mb-2">
                All downloads are provided as-is. Make sure your system meets the minimum requirements before downloading.
              </p>
              <p className="text-slate-300">
                If you encounter any issues, please contact our support team or visit our{' '}
                <Link href="/support" className="text-blue-400 hover:text-blue-300 underline">
                  support page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/documentation">
            <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-3">
                <ExternalLink className="text-blue-400 group-hover:text-blue-300" size={20} />
                <h4 className="font-bold text-white">Documentation</h4>
              </div>
              <p className="text-slate-300 text-sm">
                Read our comprehensive guides and documentation
              </p>
            </div>
          </Link>

          <Link href="/support">
            <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-3">
                <ExternalLink className="text-blue-400 group-hover:text-blue-300" size={20} />
                <h4 className="font-bold text-white">Support</h4>
              </div>
              <p className="text-slate-300 text-sm">
                Get help from our support team
              </p>
            </div>
          </Link>

          <Link href="/community">
            <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-3">
                <ExternalLink className="text-blue-400 group-hover:text-blue-300" size={20} />
                <h4 className="font-bold text-white">Community</h4>
              </div>
              <p className="text-slate-300 text-sm">
                Join our community and connect with others
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
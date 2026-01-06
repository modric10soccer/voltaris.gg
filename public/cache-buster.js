/**
 * Cache Buster Script
 * Handles cache clearing on page load to ensure users get the latest version of assets
 */

(function() {
  'use strict';

  // Configuration
  const CACHE_VERSION_KEY = 'app-cache-version';
  const CACHE_STORES = ['default', 'assets', 'pages'];

  /**
   * Get the current cache version from meta tag or package
   */
  function getCacheVersion() {
    const metaTag = document.querySelector('meta[name="cache-version"]');
    if (metaTag) {
      return metaTag.getAttribute('content');
    }
    // Fallback to timestamp-based version
    return new Date().toISOString().split('T')[0];
  }

  /**
   * Clear browser cache (localStorage and sessionStorage)
   */
  function clearBrowserCache() {
    try {
      localStorage.clear();
      sessionStorage.clear();
      console.log('Browser cache cleared successfully');
    } catch (error) {
      console.warn('Unable to clear browser cache:', error);
    }
  }

  /**
   * Clear Service Worker caches
   */
  async function clearServiceWorkerCaches() {
    if (!('caches' in window)) {
      console.log('Cache API not available');
      return;
    }

    try {
      const cacheNames = await caches.keys();
      const deletePromises = cacheNames.map((cacheName) => {
        return caches.delete(cacheName);
      });
      
      await Promise.all(deletePromises);
      console.log('Service Worker caches cleared successfully');
    } catch (error) {
      console.warn('Unable to clear Service Worker caches:', error);
    }
  }

  /**
   * Clear IndexedDB
   */
  async function clearIndexedDB() {
    if (!window.indexedDB) {
      console.log('IndexedDB not available');
      return;
    }

    try {
      const databases = await indexedDB.databases?.();
      if (databases) {
        databases.forEach((db) => {
          indexedDB.deleteDatabase(db.name);
        });
      }
      console.log('IndexedDB cleared successfully');
    } catch (error) {
      console.warn('Unable to clear IndexedDB:', error);
    }
  }

  /**
   * Update cache version in storage
   */
  function updateCacheVersion(version) {
    try {
      localStorage.setItem(CACHE_VERSION_KEY, version);
    } catch (error) {
      console.warn('Unable to update cache version:', error);
    }
  }

  /**
   * Check if cache needs to be cleared
   */
  function shouldClearCache() {
    try {
      const storedVersion = localStorage.getItem(CACHE_VERSION_KEY);
      const currentVersion = getCacheVersion();
      
      return storedVersion !== currentVersion;
    } catch (error) {
      console.warn('Unable to check cache version:', error);
      return false;
    }
  }

  /**
   * Main cache buster function
   */
  async function bustCache() {
    try {
      if (shouldClearCache()) {
        const currentVersion = getCacheVersion();
        console.log('Cache version changed, clearing caches...', {
          from: localStorage.getItem(CACHE_VERSION_KEY),
          to: currentVersion
        });

        // Clear all cache types
        clearBrowserCache();
        await clearServiceWorkerCaches();
        await clearIndexedDB();

        // Update stored version
        updateCacheVersion(currentVersion);
        
        console.log('Cache bust completed successfully');
      } else {
        console.log('Cache is up to date');
      }
    } catch (error) {
      console.error('Error during cache bust:', error);
    }
  }

  /**
   * Force clear all caches regardless of version
   */
  window.forceCacheBust = async function() {
    console.log('Force clearing all caches...');
    clearBrowserCache();
    await clearServiceWorkerCaches();
    await clearIndexedDB();
    updateCacheVersion(getCacheVersion());
    console.log('Force cache bust completed');
  };

  /**
   * Get current cache version
   */
  window.getCacheVersion = getCacheVersion;

  /**
   * Initialize on DOM ready
   */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bustCache);
  } else {
    bustCache();
  }
})();
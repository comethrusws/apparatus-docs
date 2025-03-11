'use client'
import React, { useState } from 'react';

export function Tabs({ children }) {
  // Find the default selected tab
  const tabs = React.Children.toArray(children);
  const [activeTab, setActiveTab] = useState(tabs[0]?.props.value || '');

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null;
          const { value, label } = child.props;
          
          return (
            <button
              className={`tab-button ${activeTab === value ? 'active' : ''}`}
              onClick={() => setActiveTab(value)}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div className="tabs-content">
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null;
          return activeTab === child.props.value ? child : null;
        })}
      </div>
      <style jsx>{`
        .tabs-container {
          margin: 1.5rem 0;
        }
        .tabs-header {
          display: flex;
          border-bottom: 1px solid #e5e7eb;
        }
        .tab-button {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          border: none;
          background: none;
          cursor: pointer;
          margin-right: 0.5rem;
          border-bottom: 2px solid transparent;
        }
        .tab-button.active {
          border-bottom: 2px solid #3b82f6;
          font-weight: 500;
        }
        .tabs-content {
          padding: 1rem 0;
        }
      `}</style>
    </div>
  );
}

export function TabItem({ children, value, label }) {
  return <div>{children}</div>;
}

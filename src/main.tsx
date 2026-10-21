import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ABT Application Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-200 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#0D4439] flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
              ABT
            </div>
            <h1 className="text-xl font-bold text-slate-900 mb-2">ABT Environmental</h1>
            <p className="text-sm text-slate-600 mb-6">
              The application encountered an unexpected issue while loading. Click below to reload.
            </p>
            {this.state.error && (
              <pre className="text-left bg-slate-100 p-3 rounded-lg text-xs font-mono text-slate-700 overflow-x-auto mb-6 max-h-32">
                {this.state.error.message || String(this.state.error)}
              </pre>
            )}
            <button
              onClick={() => window.location.reload()}
              className="w-full py-3 px-4 bg-[#0D4439] hover:bg-emerald-800 text-white font-bold rounded-xl transition-colors shadow-sm cursor-pointer"
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
}

import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="max-w-xl w-full text-center">

          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-red-50 border-2 border-red-100 rounded-2xl flex items-center justify-center">
              <AlertTriangle size={36} className="text-red-500" />
            </div>
          </div>

          {/* Text */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-yellow-500" />
            <span className="text-yellow-600 font-bold uppercase tracking-[0.2em] text-xs">Something Went Wrong</span>
            <span className="w-10 h-[2px] bg-yellow-500" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight leading-tight mb-4">
            An unexpected<br />
            <span className="accent-text italic">error occurred</span>
          </h1>

          <p className="text-gray-500 text-base leading-relaxed max-w-md mx-auto mb-3">
            Something went wrong while loading this page. Try refreshing — if the problem persists, please contact us.
          </p>

          {/* Error detail (dev-friendly) */}
          {this.state.error && (
            <details className="mt-4 mb-8 text-left bg-gray-50 border border-gray-200 rounded-xl p-4 max-w-md mx-auto">
              <summary className="text-xs font-bold text-gray-500 uppercase tracking-wider cursor-pointer select-none">
                Error details
              </summary>
              <pre className="mt-3 text-xs text-red-600 whitespace-pre-wrap break-all leading-relaxed">
                {this.state.error.message}
              </pre>
            </details>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-slate-900 text-slate-900 font-bold uppercase tracking-wider text-xs rounded-xl hover:bg-slate-900 hover:text-white transition-all duration-300"
            >
              <RefreshCw size={14} /> Try Again
            </button>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-yellow-500 hover:bg-black hover:text-white text-black font-bold uppercase tracking-wider text-xs rounded-xl transition-all duration-300"
            >
              <Home size={14} /> Back to Home
            </a>
          </div>

        </div>
      </div>
    );
  }
}

export default ErrorBoundary;

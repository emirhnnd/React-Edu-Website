import { Component, type ReactNode } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 32, fontFamily: "monospace", background: "#fff1f0", color: "#c0392b", minHeight: "100vh" }}>
          <h2>⚠️ Uygulama Hatası</h2>
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-all", fontSize: 13 }}>
            {this.state.error.message}
            {"\n\n"}
            {this.state.error.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <div
        className="min-h-screen flex flex-col"
        style={{ backgroundColor: "#f8fafc", color: "#0f172a" }}
      >
        <Header />
        <Content />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;

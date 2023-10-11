import { Component, Suspense, type ErrorInfo, type ReactNode } from 'react';
import { PageError } from 'widgets/PageError';

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  constructor (props: Props) {
    super(props);
    this.state = { hasError: false, };
  }

  static getDerivedStateFromError (): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, };
  }

  componentDidCatch (error: Error, info: ErrorInfo): void {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    console.log(error, info.componentStack);
  }

  render (): ReactNode {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Suspense>
          <PageError />
        </Suspense>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

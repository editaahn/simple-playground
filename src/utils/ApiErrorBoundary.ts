import { Component, ReactNode, ErrorInfo } from "react";

interface Props {
	children: ReactNode;
	renderFallback: (error: Error) => ReactNode;
	onError?: (error: Error, info: ErrorInfo) => void;
	ignoreError?: (error: Error) => void;
}

interface State {
	error: Error | null;
}

export class ApiErrorBoundary extends Component<Props, State> {
	state: State = {
		error: null,
	};

	static getDerivedStateFromError(error: Error) {
		return { error };
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		const { onError, ignoreError } = this.props;

		if (ignoreError?.(error)) {
			throw error;
		}

		onError?.(error, info);
	}

	render() {
		if (this.state.error !== null) {
			return this.props.renderFallback(this.state.error);
		}

		return this.props.children;
	}
}
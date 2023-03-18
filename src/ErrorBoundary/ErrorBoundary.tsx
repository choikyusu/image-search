import React, { Component, ErrorInfo, ReactNode } from 'react';
import AuthKeyError from './Error/AuthKeyError';
import NetworkError from './Error/NetworkError';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorType: ErrorType;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorType: 'General' };
  }

  static getDerivedStateFromError(error: Error) {
    if (error instanceof NetworkError) {
      return { hasError: true, errorType: 'Network' };
    }
    if (error instanceof AuthKeyError) {
      return { hasError: true, errorType: 'AuthKey' };
    }
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.state.errorType === 'Network') {
        return (
          <div>
            <h1>네트워크 오류</h1>
            <p>인터넷 연결 상태를 확인해주세요.</p>
          </div>
        );
      }
      if (this.state.errorType === 'AuthKey') {
        return (
          <div>
            <h1>인증키 오류</h1>
            <p>
              카카오 인증키값이 비어져있습니다. .env 파일에 인증키값을
              채워주세요
            </p>
            <p>샘플 key : 8c9027161e59852235399bb5b08f28c7</p>
          </div>
        );
      }
      return (
        <div>
          <h1>에러 발생</h1>
          <p>문제가 발생했습니다. 페이지를 새로고침해주세요.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import ErrorPage from './ErrorPage';
import { useNavigate } from 'react-router-dom';
import PageNotFound from './PageNotFound';

const ErrorBoundary = ({ children }) => {
    const [hasError, setHasError] = useState(false)
    const [hasNotFoundError, setHasNotFoundError] = useState(false)

    useEffect(() => {
        // Response interceptor
        const responseInterceptor = axios.interceptors.response.use((response) => {
          return response;
        }, (error) => {
            if (error.response?.status) {
                switch (error.response.status) {
                  case 404: 
                        setHasNotFoundError(true)
                        break
                  default:
                        setHasError(true)
                }
            }
          return error;
        });
    
        return () => {
          // Remove handlers here
          axios.interceptors.response.eject(responseInterceptor);
        };
      }, []);
    
      return (
        hasError ? <ErrorPage /> : hasNotFoundError? <PageNotFound /> : children
      )
}

export default ErrorBoundary
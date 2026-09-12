'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Currency = 'GHS' | 'USD';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatRate: (amount: number, baseCurrency?: Currency) => string;
  formatAmount: (amount: number, baseCurrency?: Currency) => string;
  symbol: string;
  exchangeRate: number;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: 'GHS',
  setCurrency: () => {},
  formatRate: (amount) => `GH₵${amount}/hr`,
  formatAmount: (amount) => `GH₵${amount}`,
  symbol: 'GH₵',
  exchangeRate: 15.5,
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>('GHS');
  const exchangeRate = 15.5; // 1 USD = ~15.5 GHS

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('proengineer_currency') as Currency;
      if (saved === 'GHS' || saved === 'USD') {
        setCurrencyState(saved);
      }
    }
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    if (typeof window !== 'undefined') {
      localStorage.setItem('proengineer_currency', c);
    }
  };

  const symbol = currency === 'GHS' ? 'GH₵' : '$';

  const formatRate = (amount: number, baseCurrency: Currency = 'GHS'): string => {
    if (!amount && amount !== 0) return `${symbol}0/hr`;

    if (baseCurrency === currency) {
      return `${symbol}${Math.round(amount).toLocaleString()}/hr`;
    }

    if (baseCurrency === 'GHS' && currency === 'USD') {
      const converted = Math.round(amount / exchangeRate);
      return `$${converted.toLocaleString()}/hr`;
    }

    if (baseCurrency === 'USD' && currency === 'GHS') {
      const converted = Math.round(amount * exchangeRate);
      return `GH₵${converted.toLocaleString()}/hr`;
    }

    return `${symbol}${Math.round(amount)}/hr`;
  };

  const formatAmount = (amount: number, baseCurrency: Currency = 'GHS'): string => {
    if (!amount && amount !== 0) return `${symbol}0`;

    if (baseCurrency === currency) {
      return `${symbol}${Math.round(amount).toLocaleString()}`;
    }

    if (baseCurrency === 'GHS' && currency === 'USD') {
      const converted = Math.round(amount / exchangeRate);
      return `$${converted.toLocaleString()}`;
    }

    if (baseCurrency === 'USD' && currency === 'GHS') {
      const converted = Math.round(amount * exchangeRate);
      return `GH₵${converted.toLocaleString()}`;
    }

    return `${symbol}${Math.round(amount)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatRate, formatAmount, symbol, exchangeRate }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}

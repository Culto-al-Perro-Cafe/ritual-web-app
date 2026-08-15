type AnalyticsEventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: AnalyticsEventParams) => void;
  }
}

export function trackGoogleAnalyticsEvent(eventName: string, params: AnalyticsEventParams) {
  if (typeof window !== "undefined") {
    window.gtag?.("event", eventName, params);
  }
}

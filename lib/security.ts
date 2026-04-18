// Strip HTML tags to prevent XSS when data is rendered or forwarded to external services
export function sanitizeInput(input: string): string {
  return input.replace(/<[^>]*>/g, "").trim();
}

// Contact form rate limit: max 3 submissions per IP per hour
const contactSubmissions = new Map<string, number[]>();

export function checkContactRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000;
  const max = 3;

  const timestamps = (contactSubmissions.get(ip) ?? []).filter(
    (t) => now - t < windowMs
  );

  if (timestamps.length >= max) return false;

  timestamps.push(now);
  contactSubmissions.set(ip, timestamps);
  return true;
}

// Login attempt tracker: max 5 failed attempts, block 15 minutes
interface LoginRecord {
  count: number;
  blockedUntil: number | null;
}

const loginAttempts = new Map<string, LoginRecord>();

export function checkLoginAllowed(ip: string): {
  allowed: boolean;
  minutesLeft?: number;
} {
  const now = Date.now();
  const record = loginAttempts.get(ip);

  if (record?.blockedUntil && now < record.blockedUntil) {
    const minutesLeft = Math.ceil((record.blockedUntil - now) / 60_000);
    return { allowed: false, minutesLeft };
  }

  return { allowed: true };
}

export function recordFailedLogin(ip: string): void {
  const now = Date.now();
  const blockMs = 15 * 60 * 1000;
  const maxAttempts = 5;

  const record = loginAttempts.get(ip) ?? { count: 0, blockedUntil: null };

  // Reset counter if previous block has expired
  const base =
    record.blockedUntil && now >= record.blockedUntil
      ? { count: 0, blockedUntil: null }
      : record;

  const newCount = base.count + 1;
  loginAttempts.set(ip, {
    count: newCount,
    blockedUntil: newCount >= maxAttempts ? now + blockMs : null,
  });
}

export function resetLoginAttempts(ip: string): void {
  loginAttempts.delete(ip);
}

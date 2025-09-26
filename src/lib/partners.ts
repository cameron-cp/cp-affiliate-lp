import { PartnerConfig } from '@/types/partner';
import partnersData from '@/data/partners.json';

// Default configuration for unknown/missing partners
export const DEFAULT_CONFIG: PartnerConfig = {
  partner_code: 'default',
  partner_name: '',
  partner_logo_url: '',
  partner_logo_alt_text: '',
  active_status: true,
};

// Compare Power brand constants
export const CP_BRAND = {
  logo_url: 'https://assets.comparepower.com/images/comparepower.png',
  logo_alt: 'Compare Power - The Power Is Yours',
  tagline: 'The Power Is Yours',
  colors: {
    primary: '#22baed',
    secondary: '#eb5a41',
    accent_yellow: '#FBB80D',
    accent_gray: '#d2d2d2'
  }
};

export async function getPartnerConfig(partnerCode?: string): Promise<PartnerConfig | null> {
  if (!partnerCode) {
    return null;
  }

  const partner = partnersData.partners[partnerCode as keyof typeof partnersData.partners];

  if (!partner || !partner.active_status) {
    return null;
  }

  return partner;
}

export function buildRedirectUrl(zipCode: string, homeSize: string, partnerCode?: string): string {
  // Map home size to usage amount
  const usageMap = {
    small: '500',
    medium: '1000',
    large: '2000',
    xlarge: '3000',
  };

  const usage = usageMap[homeSize as keyof typeof usageMap] || '1000';

  // Always use orders.comparepower.com URL
  const params = new URLSearchParams({
    zip_code: zipCode,
    usage: usage
  });

  // Add cp_afid if present
  if (partnerCode) {
    params.append('cp_afid', partnerCode);
  }

  return `https://orders.comparepower.com/?${params.toString()}`;
}
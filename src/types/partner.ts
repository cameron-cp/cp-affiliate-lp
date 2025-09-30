export interface PartnerConfig {
  partner_code: string;
  partner_name: string;
  partner_logo_url: string;
  partner_logo_alt_text: string;
  active_status: boolean;
  created_date?: string;
  brand_colors?: {
    primary: string;
    secondary: string;
  };
}

export interface FormData {
  homeSize: 'small' | 'medium' | 'large' | 'xlarge';
  zipCode: string;
}

export interface TrackingEvents {
  page_view: {
    partner_code: string;
    page_type: 'affiliate_landing';
  };
  form_start: {
    partner_code: string;
    form_location: 'hero' | 'sticky';
  };
  form_submit: {
    partner_code: string;
    home_size: string;
    zip_code: string;
  };
  partner_logo_click: {
    partner_code: string;
  };
}
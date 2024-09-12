/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite', // Adjust the timing (3s) here
        'spin-ultra-slow': 'spin 20s linear infinite', // Adjust the timing (3s) here
        'spin-fast': 'spin 0.5s linear infinite', // For faster spinning
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          }, to: {
            "backgroundPosition":
              "-200% 0"
          }
        }
      },
      colors: {
        qz_transparent: 'rgb(0 0 0 / 0)',
        qz_bg_clr: 'rgb(var(--bg-clr) / <alpha-value>)',
        qz_surface_clr: 'rgb(var(--sr-clr) / <alpha-value>)',
        qz_border_clr: 'rgb(var(--br-clr) / <alpha-value>)',
        qz_heading_text_clr: 'rgb(var(--heading-text-clr) / <alpha-value>)',
        qz_body_text_clr: 'rgb(var(--body-text-clr) / <alpha-value>)',
        qz_body_text_light_clr: 'rgb(var(--body-text-light-clr) / <alpha-value>)',
        qz_primary_clr: 'rgb(var(--primary-clr) / <alpha-value>)',
        qz_onPrimary_clr: 'rgb(var(--onPrimary-clr) / <alpha-value>)',
        qz_secondary_1_clr: 'rgb(var(--secondary-clr-1) / <alpha-value>)',
        qz_secondary_2_clr: 'rgb(var(--secondary-clr-2) / <alpha-value>)',
        qz_link_clr: 'rgb(var(--link-clr) / <alpha-value>)',
        qz_success_clr: 'rgb(var(--success-clr) / <alpha-value>)',
        qz_warning_clr: 'rgb(var(--warning-clr) / <alpha-value>)',
        qz_error_clr: 'rgb(var(--error-clr) / <alpha-value>)',
      },
      maxWidth: {
        'lg-custom': '1440px',
        'card-custom': '400px',
      }
    },
  },
  plugins: [],
}


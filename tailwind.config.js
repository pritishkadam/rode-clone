/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      fontFamily: {
        avenir: ['Avenir-Medium', 'Inter', 'sans-serif'],
      },
      fontSize: {
        '3xl': '1.75rem',
      },
      backgroundImage: {
        'microphone-blog-img':
          "url('https://edge.rode.com/images%2Fpage%2F1%2Fmodules%2F5357%2Fmicrophones-module-1200x300-rgb.png')",
        'interface-blog-img':
          "url('https://rode.com/assets/images%2Fpage%2F1%2Fmodules%2F5359%2Finterfaces-module-2022-1200x300-rgb.jpg')",
        'software-blog-img':
          "url('https://edge.rode.com/images%2Fpage%2F1%2Fmodules%2F5361%2Fsoftware-module-2021-1200x300-rgb.png')",
        'accessories-blog-img':
          "url('https://edge.rode.com/images%2Fpage%2F1%2Fmodules%2F5370%2Faccessories-module-2021-1200x300-rgb.png')",
        'streamer-x-img':
          "url('https://edge.rode.com/images/page/1/modules/8063/StreamerX-Header-right.jpg')",
        'duo-img':
          "url('https://edge.rode.com/images/page/1/modules/8061/DUO-Change-over-01.jpg')",
        'backpack-img':
          "url('https://edge.rode.com/images/page/1/modules/7785/rode-rcp-backpack-insitu-city-web-banner-6406x2336-rgb-1920x700-8c89d38a.jpg')",
        'podmic-img':
          "url('https://edge.rode.com/images/page/1/modules/8062/rode-pod-mic-usb-home-header-11614x4234-rgb-1921x700-8c89d38.jpg')",
        'wireless-img':
          "url('https://edge.rode.com/images/page/1/modules/7728/rode-wireless-me-insitu-pastel-livingroom-mobile-sefie-with-iPhone-sc21-6040x2200-rgb-1921x700-8c89d38 (1).jpg')",
        'microphone-img':
          "url('https://edge.rode.com/images/page/1/modules/7727/rode-nt1-5g-silver-home-studio-profile-webbanner-13473x4912-rgb-1921x700-8c89d38.jpg')",
        'headphone-img':
          "url('https://edge.rode.com/images/page/1/modules/7160/rode-nth100m-home-header-1920x700-rgb (1).jpg')",
      },
    },
  },
  plugins: [],
};

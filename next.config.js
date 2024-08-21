/** @type {import('next').NextConfig} */

const nextConfig = {}


module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kidstkd.pockethost.io',
        port: '',
        pathname: '/api/files/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/posts/01-kukkuwon',
        destination: '/posts/91rvuolytp23kbt',
        permanent: true,
      },
      {
        source: '/posts/02-hanmadang',
        destination: '/posts/nxkwvrc3e0gw1s2',
        permanent: true,
      },
      {
        source: '/posts/03-worldtaekwondo',
        destination: '/posts/qwmc22lb8ul0ul7',
        permanent: true,
      },
      {
        source: '/posts/04-pss',
        destination: '/posts/5hasxdpn1g71veh',
        permanent: true,
      },
      {
        source: '/posts/05-daedo-pss',
        destination: '/posts/9h9etba7kq3wdch',
        permanent: true,
      },
      {
        source: '/posts/06-kpnp-pss',
        destination: '/posts/u0n7m5bktzwle1v',
        permanent: true,
      },
      {
        source: '/posts/07-zemita',
        destination: '/posts/oiiiuxkckmeyx8g',
        permanent: true,
      },
      {
        source: '/posts/08-paul-green',
        destination: '/posts/aa4qfbdyx6jyv2w',
        permanent: true,
      },
      {
        source: '/posts/09-dobok-evolution',
        destination: '/posts/hcvxwrfl70s3pw6',
        permanent: true,
      },
      {
        source: '/posts/10-deado-height-myph',
        destination: '/posts/x4xovpnzbhwbm0j',
        permanent: true,
      },
      {
        source: '/posts/11-taping',
        destination: '/posts/39e7xqm1iiedmkx',
        permanent: true,
      },
      {
        source: '/posts/12-wt-rank-system',
        destination: '/posts/cyzqff9oqwrip8c',
        permanent: true,
      },
      {
        source: '/posts/13-wt-licence-system',
        destination: '/posts/9ris5czv3pgo39d',
        permanent: true,
      },
      {
        source: '/posts/14-poomsae-rules',
        destination: '/posts/qr25jg4mm4dfs4n',
        permanent: true,
      },
      {
        source: '/posts/15-rules-history',
        destination: '/posts/w2rtc6bv3ufq2oc',
        permanent: true,
      },
      {
        source: '/posts/16-september-04-taekwondo-day',
        destination: '/posts/ms0slry065m75rb',
        permanent: true,
      },
      {
        source: '/posts/17-how-much-is-wtf-championship',
        destination: '/posts/uwyh8y204f4b7v5',
        permanent: true,
      },
      {
        source: '/posts/20-referee-hand-signals',
        destination: '/posts/x03n4943mjdazu9',
        permanent: true,
      },
      {
        source: '/posts/22-new-rules',
        destination: '/posts/4z555m8a63382r5',
        permanent: true,
      },
      {
        source: '/posts/23-pss-update',
        destination: '/posts/wv9gs8vrjda8dpd',
        permanent: true,
      },
      {
        source: '/posts/25-kpnp-k2',
        destination: '/posts/znkw0bn44fherj3',
        permanent: true,
      },
      {
        source: '/news/2024/:path*',
        destination: '/03-news/2024/',
        permanent: true,
      },
      {
        source: '/news/2023/:path*',
        destination: '/03-news/2023/',
        permanent: true,
      },
      {
        source: '/news/2022/:path*',
        destination: '/03-news/2022/',
        permanent: true,
      },
      {
        source: '/news/2021/:path*',
        destination: '/03-news/2021/',
        permanent: true,
      },
      {
        source: '/news/2020/:path*',
        destination: '/03-news/2020/',
        permanent: true,
      },
      {
        source: '/news/2019/:path*',
        destination: '/03-news/2019/',
        permanent: true,
      },
      {
        source: '/wtc',
        destination: '/competitions/wtc/',
        permanent: true,
      },
      {
        source: '/kibon/jase/jejari-seogi/moa-seogi',
        destination: '/kibon/jase/jejari-seogi/s3qrcu3s2tbyx3f',
        permanent: true,
      },
    ]
  }
};




 

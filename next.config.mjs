/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cdn.mos.cms.futurecdn.net',
              port: '',
              pathname: '/**',
            },
            {
              protocol: 'https',
              hostname: 'www.cnet.com',
              port: '',
              pathname: '/a/**',
            },
            {
                protocol: 'https',
                hostname: 'i.insider.com',
                port: '',
                pathname: '/**/**',
              },
              {
                protocol: 'https',
                hostname: 'readwrite.com',
                port: '',
                pathname: '/wp-content/uploads/**',
              },
              {
                protocol: 'https',
                hostname: 'imgs.hipertextual.com',
                port: '',
                pathname: '/wp-content/uploads/**',
              },
              {
                protocol: 'https',
                hostname: 's.yimg.com',
                port: '',
                pathname: '/ny/api/res/**',
            },{
                protocol: 'https',
                hostname: 'cdn.vox-cdn.com',
                port: '',
                pathname: '/uploads/chorus_asset/file/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.vox-cdn.com',
                port: '',
                pathname: '/thumbor/**',
              },
              {
                protocol: 'https',
                hostname: 'i.blogs.es',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.digitaltrends.com',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'media.newyorker.com',
                port: '',
                pathname: '/photos/**',
            },{
                protocol: 'https',
                hostname: 'arxiv.org',
                port: '',
                pathname: '/static/browse/**',
            },{
                protocol: 'https',
                hostname: 'heise.cloudimg.io',
                port: '',
                pathname: '/bound/**',
            },
          ],
          domains: ['www.apple.com','media.zenfs.com','compote.slate.com','blogger.googleusercontent.com','brainbaking.com','blog.apnic.net','media.loom-app.com','www.accessnow.org','regmedia.co.uk','docs.blink.sh','media0.faz.net','images.macrumors.com','cdn.lesnumeriques.com','thepointsguy.global.ssl.fastly.net','stadt-bremerhaven.de','images.frandroid.com','www.appinn.com','smallbiztrends.com','s3.crackedcdn.com','phandroid.com','www.presse-citron.net','1.img-dpreview.com','static1.xdaimages.com','ritholtz.com','www.androidauthority.com','media.npr.org','www.journaldugeek.com','i0.wp.com','9to5mac.com','static1.anpoimages.com','photos5.appleinsider.com','www.yankodesign.com',],
    }
};

export default nextConfig;


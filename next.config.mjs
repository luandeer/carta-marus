/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        GOOGLE_CLIENT_EMAIL: 'marusbrasa@marus-data.iam.gserviceaccount.com',
        GOOGLE_PRIVATE_KEY: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCrE5VaqrHQye9u\nD41P7km/s3nQzdv0rZ4PUFkb0sdylZFz3BhidsRVN2sF/PHsCe1bJYEwFxoD2zph\nRdqenjMAnZmSi7XNLlgNNR96+VkDkw29pjvzQtO6xNW4E1Sq8xdY0Eeeaqh04xG0\nk6/cxuFhudSVHfyfNQF0dSgM7QMV7mHZBAgDgnYoGqGRjj8iG1lTSC3ekHIozQEJ\nu0GsFTXf9ALRhs9Yvfg4+Vi7RzOaSvC5UmTMJ2mUizoUimTkpEaeyZT0LGU4vPOV\n9Gz93ggF2mBWKB5hXhyYNMB/VuLeS9pxk0gMTcEKu20nhqEPEBCXBdnQbKC+mGSQ\nOlhK431HAgMBAAECggEAS//6sVk0fn8/TUM+cXx4KeA3JTJW3WeF2OLGe2xTq41T\nnUdxU8jUZtEkS/g3lzc/yWarcixJI95wHIeWXDIGkWbyMx666MiGWHO5pP2B9GsP\nRynC50pQWmAYW9rGmd09iXiZ4IAcjzTTCEg179wwgyQ1kvtL34SCPXTQkpF2dfaC\nI9KpcyGBsJnGfB2UL4GaddA/QJzzRbXRaEv0Gx1ECe3naztlyQE6JdU1/EKfdMhc\nQRUDBooNsqZlkep19GpYaAOyS/hkijzoo1XekTCivhjH+aGg7J+yTKVpMhI4Gury\nk5wKm0tgS2qBQ3RENR88oLVFYxXzA1ziTCqMMwqlTQKBgQDrqBsk1DFFoRaRhGoM\nRDuE8SSspCP9+So2DzBsdhDngEQdwZZhwq3KRDUKnwB/zEb4KCAM4PZrtBMWS0+L\nnOY1B2E6tqaNVpvHWNfOvftKWVReQI1+h8AxVJ8cggd5DV0YbkCaVtIJUtUaVXyM\nuaSig0lHqhXTxoI1YHrXy9ZIPQKBgQC52EnCrw5SROOvxTcVSEdZLsuY9h5tS6LR\nd4DfE3UjqSOKONB/IhpMfAP9M/+Wj3yT+i1BfNcVILasOOYoLyRKsq2E1N5RKqdT\noy3qIsnPL/EFaKtZFBRgkRDBXdtObNarexJvmhf4dksgtvPigoXt88jByVD7uhEq\npQG443nv0wKBgCuEIW8NmAOpmYdJkmOtfegwt3sB3HubtUXCTEjbDIgTUYDFLMXk\nsz70lW7eqbLvv/M3RaPbLuX4nMWzJn87e+8y66tx6xOSeLW5HDDbODokgMXe2cIR\nw1XYsIENKeAaraRDR764ZZS/LQbt3lAGP/aak7+eEuXGdGjy5fxPccRpAoGARZDk\n629D2R/Yau9T0y+fJY8Sv0tB0H/Djs1A/D/4VUT2/MKPqUdGuOKjS6CvR9imNW4s\nipsEl/AK8STLYrdiymNf+J0GKzPgNrqacU5cZKX5fqDToyCVECC9OOS9Nvoe0Unc\neNIhruv462IQoPVi1NOwjnmhStk3m9LwdhkQh+kCgYA/62lfnZIn/lyUGz8d0E4E\nQurUo0VzdMNpPS91LcF34JIkp/nxGGd5P905NSZ7htFnqMPEM3L/Q8dvhiA6teuY\nu2W/LVeJ5x+D0zJJeju9TY3QCibpogzVhdksnhA/ERfpP/UE/A3ug8gln1iEV7sm\nwEaVuaWBbAx5p9xSkuNm/Q==\n-----END PRIVATE KEY-----\n',
        GOOGLE_SHEET_ID: '1odBPWvGCCYI_R9CQ0xKrDG3LNNQoor8hpq44MkEqEY4',
        GOOGLE_CLIENT_ID: '115718591367785777813',
        FIREBASE_API_KEY: 'AIzaSyAtIi720oYUFW8Z2lJs7liT9c3htsBOlGM',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com'
            },
            {
                protocol: 'https',
                hostname: 'stimpulsacdnprod.blob.core.windows.net'
            },
        ],
        unoptimized: true,
    },
};

export default nextConfig;

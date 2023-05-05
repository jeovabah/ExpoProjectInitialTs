const nameApp = 'return704apps'
const nameBucket = 'return704appsfb704'
const linkApp = 'fb704'
export let appProccess = 'production'
// OBS - SOCKET NA AWS TROCAR DE HTTP, PARA HTTPS

export const buildApp = () => {
  if (appProccess === 'development') {
    const HOST_API_DELIVERY = `https://v2.apiteste.${nameApp}.com.br/`
    const HOST_API_APP = `https://apiteste.${nameApp}.com.br/`
    const HOST_SOCKET = `http://v2.apiteste.${nameApp}.com.br:3000`
    const HOST_AUDIO_MESSAGE = `https://s3-sa-east-1.amazonaws.com/${nameApp}teste/chat/trip/`
    const HOST_SITE = `https://beta.${nameApp}.com.br/`
    const HOST_API_GOOGLE_MAPS = 'AIzaSyDpEY9E0WwXctYqH5V7EVuxMUU_14RgukI'

    const HOST_IMAGE_DRIVER = `https://s3-sa-east-1.amazonaws.com/${nameApp}teste/driver/profile/compressed/`
    const HOST_IMAGE_CUSTOMER = `https://s3-sa-east-1.amazonaws.com/${nameApp}teste/customer/profile/compressed/`

    const PATH_IMAGE_TEMP = `https://s3-sa-east-1.amazonaws.com/${nameApp}teste/driver/profile/temp/`

    const HOST_IMAGE_TRIP_TYPE = `https://${nameApp}teste.s3.sa-east-1.amazonaws.com/tripType/`

    const HOST_IMAGE_LOGO = `https://s3-sa-east-1.amazonaws.com/${nameBucket}/default.jpg`

    return {
      HOST_API_DELIVERY,
      HOST_API_APP,
      HOST_SOCKET,
      HOST_AUDIO_MESSAGE,
      HOST_SITE,
      HOST_API_GOOGLE_MAPS,
      HOST_IMAGE_DRIVER,
      HOST_IMAGE_CUSTOMER,
      PATH_IMAGE_TEMP,
      HOST_IMAGE_TRIP_TYPE,
      HOST_IMAGE_LOGO,
    }
  }

  if (appProccess === 'aws') {
    const HOST_API_DELIVERY = `https://v2.${nameApp}api.${linkApp}.com.br/`
    const HOST_API_APP = `https://mobilidade-api-php-${nameApp}.prod.704apps.com.br/`
    const HOST_SOCKET = `https://mobilidade-api-node-${nameApp}.prod.704apps.com.br/`
    const HOST_AUDIO_MESSAGE = `https://s3.amazonaws.com/${nameBucket}/chat/trip/`
    const HOST_SITE = `https://${nameApp}.prod.704apps.com.br/`
    const HOST_API_GOOGLE_MAPS = 'AIzaSyDpEY9E0WwXctYqH5V7EVuxMUU_14RgukI'

    const HOST_IMAGE_DRIVER = `https://s3.amazonaws.com/${nameBucket}/driver/profile/compressed/`
    const HOST_IMAGE_CUSTOMER = `https://s3.amazonaws.com/${nameBucket}/customer/profile/compressed/`

    const PATH_IMAGE_TEMP = `https://s3.amazonaws.com/${nameBucket}/driver/profile/temp/`

    const HOST_IMAGE_TRIP_TYPE = `https://${nameBucket}.s3.amazonaws.com/tripType/`

    const HOST_IMAGE_LOGO = `https://s3.amazonaws.com/${nameBucket}/default.jpg`

    return {
      HOST_API_DELIVERY,
      HOST_API_APP,
      HOST_SOCKET,
      HOST_AUDIO_MESSAGE,
      HOST_SITE,
      HOST_API_GOOGLE_MAPS,
      HOST_IMAGE_DRIVER,
      HOST_IMAGE_CUSTOMER,
      PATH_IMAGE_TEMP,
      HOST_IMAGE_TRIP_TYPE,
      HOST_IMAGE_LOGO,
    }
  }
  const HOST_API_DELIVERY = `https://v2.${nameApp}api.${linkApp}.com.br/`
  const HOST_API_APP = `https://${nameApp}api.${linkApp}.com.br/`
  const HOST_SOCKET = `https://${nameApp}api.${linkApp}.com.br:3000`
  const HOST_AUDIO_MESSAGE = `https://s3-sa-east-1.amazonaws.com/${nameBucket}/chat/trip/`
  const HOST_SITE = `https://${nameApp}.fb704.com.br/`
  const HOST_API_GOOGLE_MAPS = 'AIzaSyDpEY9E0WwXctYqH5V7EVuxMUU_14RgukI'

  const HOST_IMAGE_DRIVER = `https://s3-sa-east-1.amazonaws.com/${nameBucket}/driver/profile/compressed/`
  const HOST_IMAGE_CUSTOMER = `https://s3-sa-east-1.amazonaws.com/${nameBucket}/customer/profile/compressed/`

  const PATH_IMAGE_TEMP = `https://s3-sa-east-1.amazonaws.com/${nameBucket}/driver/profile/temp/`

  const HOST_IMAGE_TRIP_TYPE = `https://${nameBucket}.s3.sa-east-1.amazonaws.com/tripType/`

  const HOST_IMAGE_LOGO = `https://s3-sa-east-1.amazonaws.com/${nameBucket}/default.jpg`

  return {
    HOST_API_DELIVERY,
    HOST_API_APP,
    HOST_SOCKET,
    HOST_AUDIO_MESSAGE,
    HOST_SITE,
    HOST_API_GOOGLE_MAPS,
    HOST_IMAGE_DRIVER,
    HOST_IMAGE_CUSTOMER,
    PATH_IMAGE_TEMP,
    HOST_IMAGE_TRIP_TYPE,
    HOST_IMAGE_LOGO,
  }
}
